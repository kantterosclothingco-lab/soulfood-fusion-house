import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";

export default function CallRoom() {
  const router = useRouter();
  const { roomId } = router.query;

  const socketRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const localStreamRef = useRef(null);
  const remoteStreamRef = useRef(null);

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const [joined, setJoined] = useState(false);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  const [statusText, setStatusText] = useState("Preparing room...");

  useEffect(() => {
    if (!router.isReady || !roomId) return;

    const socket = io("https://soulfood-video-server-production.up.railway.app", {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
      setReady(true);
      setError("");
      setStatusText("Connected to live video server");
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connect error:", err);
      setReady(false);
      setError("Could not connect to the live video server.");
      setStatusText("Live server connection failed");
    });

    socket.on("user-joined", async (data) => {
      try {
        console.log("User joined room:", roomId, data);
        setStatusText("Other participant joined. Sending offer...");
        if (!peerConnectionRef.current) return;
        await createOffer();
      } catch (err) {
        console.error("user-joined/createOffer error:", err);
      }
    });

    socket.on("webrtc-offer", async ({ offer }) => {
      try {
        console.log("Offer received for room:", roomId);
        setStatusText("Offer received. Creating answer...");

        if (!peerConnectionRef.current) {
          await setupLocalMediaAndPeer();
        }

        await createAnswer(offer);
      } catch (err) {
        console.error("webrtc-offer error:", err);
      }
    });

    socket.on("webrtc-answer", async ({ answer }) => {
      try {
        if (!peerConnectionRef.current) return;
        console.log("Answer received for room:", roomId);
        setStatusText("Answer received. Connecting...");

        await peerConnectionRef.current.setRemoteDescription(
          new RTCSessionDescription(answer)
        );
      } catch (err) {
        console.error("webrtc-answer error:", err);
      }
    });

    socket.on("webrtc-ice-candidate", async ({ candidate }) => {
      try {
        if (!peerConnectionRef.current || !candidate) return;
        console.log("ICE candidate received");

        await peerConnectionRef.current.addIceCandidate(
          new RTCIceCandidate(candidate)
        );
      } catch (err) {
        console.error("ICE candidate error:", err);
      }
    });

    socket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
      setStatusText("Disconnected from live video server");
    });

    return () => {
      socket.disconnect();
      cleanup();
      socketRef.current = null;
    };
  }, [router.isReady, roomId]);

  async function setupLocalMediaAndPeer() {
    if (!localStreamRef.current) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      localStreamRef.current = stream;

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
        try {
          await localVideoRef.current.play();
        } catch (err) {
          console.error("Local video play error:", err);
        }
      }
    }

    if (!peerConnectionRef.current) {
      const pc = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:stun1.l.google.com:19302" },
        ],
      });

      const remoteStream = new MediaStream();
      remoteStreamRef.current = remoteStream;

      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }

      localStreamRef.current.getTracks().forEach((track) => {
        pc.addTrack(track, localStreamRef.current);
      });

      pc.ontrack = async (event) => {
        console.log("Remote track received:", event.track.kind);
        setStatusText("Remote video connected");

        event.streams[0].getTracks().forEach((track) => {
          remoteStream.addTrack(track);
        });

        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = remoteStream;
          try {
            await remoteVideoRef.current.play();
          } catch (err) {
            console.error("Remote video play error:", err);
          }
        }
      };

      pc.onicecandidate = (event) => {
        if (event.candidate && socketRef.current && roomId) {
          console.log("Sending ICE candidate");
          socketRef.current.emit("webrtc-ice-candidate", {
            roomId,
            candidate: event.candidate,
          });
        }
      };

      pc.onconnectionstatechange = () => {
        console.log("Connection state:", pc.connectionState);
        setStatusText(`Connection state: ${pc.connectionState}`);
      };

      pc.oniceconnectionstatechange = () => {
        console.log("ICE connection state:", pc.iceConnectionState);
      };

      peerConnectionRef.current = pc;
    }
  }

  async function joinCall() {
    if (!roomId) {
      setError("Missing room ID.");
      return;
    }

    if (!socketRef.current || !ready) {
      setError("Socket is not ready yet.");
      return;
    }

    setError("");

    try {
      setStatusText("Starting camera and microphone...");
      await setupLocalMediaAndPeer();

      socketRef.current.emit("join-room", {
        roomId,
        userType: "user",
      });

      console.log("Joined room:", roomId);
      setStatusText(`Joined room: ${roomId}`);
      setJoined(true);
    } catch (err) {
      console.error("joinCall error:", err);
      setError(
        "Could not start camera or microphone. Please allow permissions and try again."
      );
    }
  }

  async function createOffer() {
    const pc = peerConnectionRef.current;
    if (!pc || !roomId || !socketRef.current) return;

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    socketRef.current.emit("webrtc-offer", {
      roomId,
      offer,
    });

    console.log("Offer sent for room:", roomId);
  }

  async function createAnswer(offer) {
    const pc = peerConnectionRef.current;
    if (!pc || !roomId || !socketRef.current) return;

    await pc.setRemoteDescription(new RTCSessionDescription(offer));

    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);

    socketRef.current.emit("webrtc-answer", {
      roomId,
      answer,
    });

    console.log("Answer sent for room:", roomId);
  }

  function cleanup() {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }

    if (remoteStreamRef.current) {
      remoteStreamRef.current.getTracks().forEach((track) => track.stop());
      remoteStreamRef.current = null;
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Video Consultation Room</h1>
      <p>
        <strong>Room ID:</strong> {roomId || "Loading..."}
      </p>
      <p>
        <strong>Status:</strong> {statusText}
      </p>

      {!ready && <p>Preparing room...</p>}

      {!joined && ready && (
        <button
          onClick={joinCall}
          style={{ padding: "10px 16px", cursor: "pointer" }}
        >
          Join Call
        </button>
      )}

      {error && (
        <p style={{ color: "red", marginTop: 12 }}>
          {error}
        </p>
      )}

      <div style={{ display: "flex", gap: 20, marginTop: 20, flexWrap: "wrap" }}>
        <div>
          <p>Your Camera</p>
          <video
            ref={localVideoRef}
            autoPlay
            muted
            playsInline
            style={{
              width: 320,
              height: 240,
              background: "black",
              objectFit: "cover",
            }}
          />
        </div>

        <div>
          <p>Other Participant</p>
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            style={{
              width: 320,
              height: 240,
              background: "black",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}