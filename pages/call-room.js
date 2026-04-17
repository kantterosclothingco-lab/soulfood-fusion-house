import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";

export default function CallRoom() {
  const router = useRouter();
  const {
    roomId,
    role,
    autostart,
    requestId,
    fullName,
    phone,
    email,
    eventType,
    eventDate,
    notes,
  } = router.query;

  const socketRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const localStreamRef = useRef(null);
  const remoteStreamRef = useRef(null);
  const joinedRef = useRef(false);
  const leavingRef = useRef(false);
  const chatMessagesRef = useRef(null);

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const [joined, setJoined] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const [statusText, setStatusText] = useState("Preparing room...");
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [facingMode, setFacingMode] = useState("user");
  const [remoteConnected, setRemoteConnected] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

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
      setReady(true);
      setError("");
      setStatusText("Ready to join");
    });

    socket.on("connect_error", (err) => {
      console.error(err);
      setReady(false);
      setError("Could not connect to the live video server.");
      setStatusText("Connection failed");
    });

    socket.on("user-joined", async () => {
      try {
        if (!peerConnectionRef.current) return;
        setStatusText("Connecting...");
        await createOffer();
      } catch (err) {
        console.error(err);
      }
    });

    socket.on("user-left", async () => {
      setRemoteConnected(false);
      setStatusText("Other participant ended the call");
      await logCallEnded("other-participant-left");
      cleanup();
      setJoined(false);
      setCallEnded(true);
    });

    socket.on("chat-message", (data) => {
      setMessages((prev) => [
        ...prev,
        {
          message: data.message,
          sender: data.sender,
          time: data.time,
        },
      ]);
    });

    socket.on("webrtc-offer", async ({ offer }) => {
      try {
        if (!peerConnectionRef.current) {
          await setupLocalMediaAndPeer(facingMode);
        }
        await createAnswer(offer);
      } catch (err) {
        console.error(err);
      }
    });

    socket.on("webrtc-answer", async ({ answer }) => {
      try {
        if (!peerConnectionRef.current) return;
        await peerConnectionRef.current.setRemoteDescription(
          new RTCSessionDescription(answer)
        );
      } catch (err) {
        console.error(err);
      }
    });

    socket.on("webrtc-ice-candidate", async ({ candidate }) => {
      try {
        if (!peerConnectionRef.current || !candidate) return;
        await peerConnectionRef.current.addIceCandidate(
          new RTCIceCandidate(candidate)
        );
      } catch (err) {
        console.error(err);
      }
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      cleanup();
    };
  }, [router.isReady, roomId]);

  useEffect(() => {
    if (!router.isReady || !roomId || !ready || joined) return;
    if (autostart !== "1") return;
    joinCall();
  }, [router.isReady, roomId, ready, autostart, joined]);

  useEffect(() => {
    if (!chatMessagesRef.current) return;
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  }, [messages]);

  async function getMediaStream(nextFacingMode = "user") {
    try {
      return await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: nextFacingMode },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: true,
      });
    } catch (err) {
      console.warn("Preferred camera failed, using fallback", err);
      return await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
    }
  }

  async function attachVideo(videoEl, stream, muted = false) {
    if (!videoEl) return;
    videoEl.srcObject = stream;
    videoEl.muted = muted;
    videoEl.playsInline = true;
    videoEl.autoplay = true;

    try {
      await videoEl.play();
    } catch (err) {
      console.error("Video play error:", err);
    }
  }

  async function setupLocalMediaAndPeer(nextFacingMode = "user") {
    if (!localStreamRef.current) {
      const stream = await getMediaStream(nextFacingMode);
      localStreamRef.current = stream;

      await attachVideo(localVideoRef.current, stream, true);

      const audioTrack = stream.getAudioTracks()[0];
      const videoTrack = stream.getVideoTracks()[0];

      setMicOn(audioTrack?.enabled ?? true);
      setCameraOn(videoTrack?.enabled ?? true);
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
        const incomingStream = event.streams[0];
        if (!incomingStream) return;

        incomingStream.getTracks().forEach((track) => {
          if (!remoteStream.getTracks().some((t) => t.id === track.id)) {
            remoteStream.addTrack(track);
          }
        });

        await attachVideo(remoteVideoRef.current, remoteStream, false);
        setRemoteConnected(true);
        setStatusText("Connected");
        await logCallStarted();
      };

      pc.onicecandidate = (event) => {
        if (event.candidate && socketRef.current && roomId) {
          socketRef.current.emit("webrtc-ice-candidate", {
            roomId,
            candidate: event.candidate,
          });
        }
      };

      pc.onconnectionstatechange = () => {
        if (pc.connectionState === "connected") {
          setRemoteConnected(true);
          setStatusText("Connected");
        }
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

    try {
      setError("");
      await setupLocalMediaAndPeer(facingMode);

      socketRef.current.emit("join-room", {
        roomId,
        userType: role || "user",
      });

      joinedRef.current = true;
      setJoined(true);
      setStatusText("Joining...");
    } catch (err) {
      console.error(err);
      setError("Could not start camera or microphone. Please allow permissions and try again.");
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
  }

  function toggleMic() {
    const stream = localStreamRef.current;
    if (!stream) return;

    stream.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });

    setMicOn(stream.getAudioTracks()[0]?.enabled ?? false);
  }

  function toggleCamera() {
    const stream = localStreamRef.current;
    if (!stream) return;

    stream.getVideoTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });

    setCameraOn(stream.getVideoTracks()[0]?.enabled ?? false);
  }

  async function switchCamera() {
    const nextFacingMode = facingMode === "user" ? "environment" : "user";
    setFacingMode(nextFacingMode);

    try {
      const oldStream = localStreamRef.current;
      if (oldStream) {
        oldStream.getTracks().forEach((track) => track.stop());
      }

      const newStream = await getMediaStream(nextFacingMode);
      localStreamRef.current = newStream;
      await attachVideo(localVideoRef.current, newStream, true);

      const senders = peerConnectionRef.current?.getSenders() || [];
      const newVideoTrack = newStream.getVideoTracks()[0];
      const newAudioTrack = newStream.getAudioTracks()[0];

      const videoSender = senders.find(
        (sender) => sender.track && sender.track.kind === "video"
      );
      const audioSender = senders.find(
        (sender) => sender.track && sender.track.kind === "audio"
      );

      if (videoSender && newVideoTrack) {
        await videoSender.replaceTrack(newVideoTrack);
      }
      if (audioSender && newAudioTrack) {
        await audioSender.replaceTrack(newAudioTrack);
      }

      setMicOn(newAudioTrack?.enabled ?? true);
      setCameraOn(newVideoTrack?.enabled ?? true);
    } catch (err) {
      console.error(err);
      setError("Could not switch camera on this device/browser.");
    }
  }

  function sendMessage() {
    if (!chatInput.trim() || !socketRef.current || !roomId) return;

    const newMessage = {
      message: chatInput.trim(),
      sender: role || "user",
      time: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);

    socketRef.current.emit("chat-message", {
      roomId,
      message: chatInput.trim(),
      sender: role || "user",
    });

    setChatInput("");
  }

  function handleChatKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  }

  async function logCallStarted() {
    try {
      await fetch("/api/call-records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          requestId: requestId || "",
          roomId: roomId || "",
          role: role || "",
          event: "started",
          time: new Date().toISOString(),
          fullName: fullName || "",
          phone: phone || "",
          email: email || "",
          eventType: eventType || "",
          eventDate: eventDate || "",
          notes: notes || "",
        }),
      });
    } catch (err) {
      console.error("Failed to log call start:", err);
    }
  }

  async function logCallEnded(eventName) {
    try {
      await fetch("/api/call-records", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          requestId: requestId || "",
          roomId: roomId || "",
          role: role || "",
          event: eventName,
          time: new Date().toISOString(),
          fullName: fullName || "",
          phone: phone || "",
          email: email || "",
          eventType: eventType || "",
          eventDate: eventDate || "",
          notes: notes || "",
        }),
      });
    } catch (err) {
      console.error("Failed to log call end:", err);
    }
  }

  async function leaveCall() {
    leavingRef.current = true;
    await logCallEnded("ended-by-user");

    if (socketRef.current && roomId) {
      socketRef.current.emit("leave-room", {
        roomId,
        reason: "ended-by-user",
      });
    }

    cleanup();
    setJoined(false);
    setCallEnded(true);
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

    joinedRef.current = false;
    setRemoteConnected(false);
  }

  if (callEnded && role === "consultant") {
    return (
      <div className="postCallScreen">
        <div className="postCard">
          <h1>Call ended</h1>
          <p>Returning to consultant dashboard…</p>
          <a className="primaryBtn" href="/consultant-app">Back to Dashboard</a>
        </div>

        <style jsx>{`
          .postCallScreen {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #101114;
            color: white;
            font-family: Inter, Arial, sans-serif;
            padding: 24px;
          }
          .postCard {
            width: 100%;
            max-width: 420px;
            padding: 28px;
            border-radius: 24px;
            background: rgba(255,255,255,0.06);
            text-align: center;
          }
          .primaryBtn {
            display: inline-block;
            margin-top: 16px;
            padding: 14px 18px;
            border-radius: 999px;
            background: #23c46e;
            color: white;
            text-decoration: none;
            font-weight: 700;
          }
        `}</style>
      </div>
    );
  }

  if (callEnded && role === "customer") {
    return (
      <div className="postCallScreen">
        <div className="postCard">
          <h1>Thank you for your call</h1>
          <p>We’d love your feedback.</p>
          <div className="btnRow">
            <a
              className="primaryBtn"
              href="https://www.google.com/search?q=Soulfood+Fusion+House+review"
              target="_blank"
              rel="noreferrer"
            >
              Rate us!
            </a>
            <a className="secondaryBtn" href="/">
              Back to Home
            </a>
          </div>
        </div>

        <style jsx>{`
          .postCallScreen {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #101114;
            color: white;
            font-family: Inter, Arial, sans-serif;
            padding: 24px;
          }
          .postCard {
            width: 100%;
            max-width: 420px;
            padding: 28px;
            border-radius: 24px;
            background: rgba(255,255,255,0.06);
            text-align: center;
          }
          .btnRow {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin-top: 16px;
            flex-wrap: wrap;
          }
          .primaryBtn,
          .secondaryBtn {
            display: inline-block;
            padding: 14px 18px;
            border-radius: 999px;
            text-decoration: none;
            font-weight: 700;
          }
          .primaryBtn {
            background: #23c46e;
            color: white;
          }
          .secondaryBtn {
            background: rgba(255,255,255,0.12);
            color: white;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="callApp">
      {!joined ? (
        <div className="preJoin">
          <div className="preJoinCard">
            <p className="preLabel">Soulfood Video Consultation</p>
            <h1>Ready to join</h1>
            <p className="preStatus">{statusText}</p>

            {error && <p className="errorText">{error}</p>}

            <button
              className="joinButton"
              onClick={joinCall}
              disabled={!ready}
            >
              Join Call
            </button>
          </div>
        </div>
      ) : (
        <div className="callScreen">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="remoteVideo"
          />

          {!remoteConnected && (
            <div className="remoteFallback">
              <span>{statusText}</span>
            </div>
          )}

          <div className="topOverlay">
            <div>
              <h1>Consultation</h1>
              <p>{statusText}</p>
            </div>
          </div>

          <div className="localPreviewWrap">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              className="localPreview"
            />
          </div>

          <button
            className="chatToggleBtn"
            onClick={() => setShowChat(!showChat)}
          >
            💬
          </button>

          {showChat && (
            <div className="chatPanel">
              <div className="chatHeader">
                <span>Live Chat</span>
                <button
                  className="chatCloseBtn"
                  onClick={() => setShowChat(false)}
                >
                  ✕
                </button>
              </div>

              <div className="chatMessages" ref={chatMessagesRef}>
                {messages.length === 0 ? (
                  <div className="emptyChat">No messages yet</div>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={`${msg.time}-${index}`}
                      className={`messageBubble ${
                        msg.sender === (role || "user") ? "mine" : "theirs"
                      }`}
                    >
                      <div className="messageSender">
                        {msg.sender === (role || "user") ? "You" : "Other"}
                      </div>
                      <div>{msg.message}</div>
                    </div>
                  ))
                )}
              </div>

              <div className="chatInputRow">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={handleChatKeyDown}
                  placeholder="Type a message..."
                  className="chatInput"
                />
                <button className="sendBtn" onClick={sendMessage}>
                  Send
                </button>
              </div>
            </div>
          )}

          <div className="controlsBar">
            <button className="controlBtn" onClick={toggleMic}>
              {micOn ? "Mute" : "Unmute"}
            </button>

            <button className="controlBtn" onClick={toggleCamera}>
              {cameraOn ? "Camera Off" : "Camera On"}
            </button>

            <button className="controlBtn" onClick={switchCamera}>
              Switch
            </button>

            <button className="endBtn" onClick={leaveCall}>
              End
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .callApp {
          min-height: 100vh;
          background: #000;
          color: #fff;
          font-family: Inter, Arial, sans-serif;
        }

        .preJoin {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: linear-gradient(180deg, #121315 0%, #1e2024 100%);
        }

        .preJoinCard {
          width: 100%;
          max-width: 430px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 28px 22px;
          text-align: center;
          backdrop-filter: blur(14px);
        }

        .preLabel {
          margin: 0 0 10px;
          color: #babac0;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 12px;
        }

        .preJoinCard h1 {
          margin: 0 0 10px;
          font-size: 36px;
          letter-spacing: -0.03em;
        }

        .preStatus {
          margin: 0 0 18px;
          color: #d4d4d8;
        }

        .joinButton {
          width: 100%;
          border: none;
          border-radius: 999px;
          background: #23c46e;
          color: #fff;
          padding: 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }

        .joinButton:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .errorText {
          color: #ffb7b7;
          margin-bottom: 14px;
        }

        .callScreen {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
        }

        .remoteVideo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #101114;
          z-index: 1;
        }

        .remoteFallback {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d6d6db;
          background: radial-gradient(circle at top, #20252a 0%, #0a0b0d 60%);
          z-index: 2;
        }

        .topOverlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 3;
          padding: 24px 18px 40px;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.55) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .topOverlay h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }

        .topOverlay p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }

        .localPreviewWrap {
          position: absolute;
          top: 84px;
          right: 14px;
          z-index: 4;
          width: 110px;
          height: 170px;
          border-radius: 22px;
          overflow: hidden;
          background: #222;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .localPreview {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #222;
          transform: scaleX(-1);
        }

        .chatToggleBtn {
          position: absolute;
          right: 16px;
          bottom: 106px;
          z-index: 6;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          background: #23c46e;
          color: white;
          font-size: 22px;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
        }

        .chatPanel {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 96px;
          height: 42%;
          max-height: 360px;
          z-index: 6;
          background: rgba(14, 14, 16, 0.94);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(14px);
        }

        .chatHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-weight: 700;
        }

        .chatCloseBtn {
          border: none;
          background: transparent;
          color: white;
          font-size: 18px;
          cursor: pointer;
        }

        .chatMessages {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .emptyChat {
          margin: auto;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
        }

        .messageBubble {
          max-width: 78%;
          padding: 10px 12px;
          border-radius: 16px;
          line-height: 1.4;
          font-size: 14px;
          word-break: break-word;
        }

        .messageBubble.mine {
          align-self: flex-end;
          background: #23c46e;
          color: white;
          border-bottom-right-radius: 6px;
        }

        .messageBubble.theirs {
          align-self: flex-start;
          background: rgba(255,255,255,0.12);
          color: white;
          border-bottom-left-radius: 6px;
        }

        .messageSender {
          font-size: 11px;
          opacity: 0.8;
          margin-bottom: 4px;
        }

        .chatInputRow {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
        }

        .chatInput {
          flex: 1;
          border: none;
          border-radius: 999px;
          padding: 12px 14px;
          outline: none;
          background: rgba(255,255,255,0.1);
          color: white;
        }

        .chatInput::placeholder {
          color: rgba(255,255,255,0.55);
        }

        .sendBtn {
          border: none;
          border-radius: 999px;
          padding: 12px 16px;
          background: #23c46e;
          color: white;
          font-weight: 700;
          cursor: pointer;
        }

        .controlsBar {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 24px;
          z-index: 5;
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
          padding: 14px;
          border-radius: 28px;
          background: rgba(18, 18, 20, 0.56);
          backdrop-filter: blur(14px);
        }

        .controlBtn,
        .endBtn {
          border: none;
          min-width: 72px;
          border-radius: 999px;
          padding: 12px 14px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .controlBtn {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
        }

        .endBtn {
          background: #db3d35;
          color: #fff;
        }

        @media (max-width: 520px) {
          .chatPanel {
            height: 46%;
          }

          .chatToggleBtn {
            width: 52px;
            height: 52px;
            bottom: 102px;
          }

          .controlsBar {
            gap: 8px;
            padding: 12px 10px;
          }

          .controlBtn,
          .endBtn {
            min-width: 66px;
            font-size: 12px;
            padding: 12px 10px;
          }

          .localPreviewWrap {
            width: 96px;
            height: 146px;
          }

          .topOverlay h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}