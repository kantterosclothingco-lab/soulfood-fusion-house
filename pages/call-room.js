import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";

export default function CallRoom() {
  const router = useRouter();
  const { roomId, role } = router.query;

  const socketRef = useRef(null);
  const pcRef = useRef(null);
  const localRef = useRef(null);
  const remoteRef = useRef(null);

  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  useEffect(() => {
    if (!roomId) return;

    const socket = io("https://soulfood-video-server-production.up.railway.app");
    socketRef.current = socket;

    socket.on("user-joined", async () => {
      const offer = await pcRef.current.createOffer();
      await pcRef.current.setLocalDescription(offer);

      socket.emit("webrtc-offer", { roomId, offer });
    });

    socket.on("webrtc-offer", async ({ offer }) => {
      await pcRef.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await pcRef.current.createAnswer();
      await pcRef.current.setLocalDescription(answer);

      socket.emit("webrtc-answer", { roomId, answer });
    });

    socket.on("webrtc-answer", async ({ answer }) => {
      await pcRef.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on("webrtc-ice-candidate", async ({ candidate }) => {
      if (candidate) {
        await pcRef.current.addIceCandidate(new RTCIceCandidate(candidate));
      }
    });

    socket.on("user-left", () => {
      endCall();
    });

    socket.on("chat-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

  }, [roomId]);

  async function joinCall() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    localRef.current.srcObject = stream;

    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    pcRef.current = pc;

    stream.getTracks().forEach((track) => pc.addTrack(track, stream));

    pc.ontrack = (e) => {
      remoteRef.current.srcObject = e.streams[0];
    };

    pc.onicecandidate = (e) => {
      if (e.candidate) {
        socketRef.current.emit("webrtc-ice-candidate", {
          roomId,
          candidate: e.candidate,
        });
      }
    };

    socketRef.current.emit("join-room", {
      roomId,
      userType: role,
    });

    setJoined(true);
  }

  function sendMessage() {
    if (!chatInput.trim()) return;

    const msg = {
      message: chatInput,
      sender: role,
    };

    setMessages((prev) => [...prev, msg]);

    socketRef.current.emit("chat-message", {
      roomId,
      message: chatInput,
      sender: role,
    });

    setChatInput("");
  }

  function endCall() {
    socketRef.current.emit("leave-room", { roomId });
    setCallEnded(true);
    setJoined(false);
  }

  if (callEnded) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        {role === "consultant" ? (
          <>
            <h1>Call Ended</h1>
            <a href="/consultant-app">Back</a>
          </>
        ) : (
          <>
            <h1>Rate Us!</h1>
            <a href="https://www.google.com/search?q=Soulfood+Fusion+House+review" target="_blank">
              Leave Review
            </a>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      {!joined ? (
        <button onClick={joinCall}>Join Call</button>
      ) : (
        <>
          <video ref={remoteRef} autoPlay playsInline style={{ width: "100%" }} />
          <video ref={localRef} autoPlay muted style={{ width: 100 }} />

          <button onClick={endCall}>End</button>

          <button onClick={() => setShowChat(!showChat)}>💬</button>

          {showChat && (
            <div style={{ position: "absolute", bottom: 0, background: "#000", width: "100%" }}>
              <div style={{ maxHeight: 200, overflow: "auto" }}>
                {messages.map((m, i) => (
                  <div key={i}>{m.sender}: {m.message}</div>
                ))}
              </div>

              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}