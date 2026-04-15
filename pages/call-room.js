import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CallRoomPage() {
  const localVideoRef = useRef(null);
  const localStreamRef = useRef(null);

  const [joined, setJoined] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [error, setError] = useState("");
  const [loadingMedia, setLoadingMedia] = useState(false);

  useEffect(() => {
    return () => {
      stopLocalStream();
    };
  }, []);

  async function startLocalStream() {
    setError("");
    setLoadingMedia(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      localStreamRef.current = stream;

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      setJoined(true);
      setCameraOn(true);
      setMicOn(true);
    } catch (err) {
      console.error(err);
      setError(
        "Could not access camera or microphone. Please allow permissions and try again."
      );
    } finally {
      setLoadingMedia(false);
    }
  }

  function stopLocalStream() {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
  }

  function leaveRoom() {
    stopLocalStream();
    setJoined(false);
    setCameraOn(true);
    setMicOn(true);
  }

  function toggleCamera() {
    if (!localStreamRef.current) return;

    const videoTracks = localStreamRef.current.getVideoTracks();
    videoTracks.forEach((track) => {
      track.enabled = !track.enabled;
    });

    setCameraOn(videoTracks[0]?.enabled ?? false);
  }

  function toggleMic() {
    if (!localStreamRef.current) return;

    const audioTracks = localStreamRef.current.getAudioTracks();
    audioTracks.forEach((track) => {
      track.enabled = !track.enabled;
    });

    setMicOn(audioTracks[0]?.enabled ?? false);
  }

  return (
    <>
      <Head>
        <title>Consultation Call Room | Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="page">
        <section className="header">
          <div className="inner">
            <p className="eyebrow">Consultation Call Room</p>
            <h1>Video consultation room</h1>
            <p>
              Camera and microphone are now connected on this page. The next
              step after this is linking both customer and consultant into the
              same live call.
            </p>
          </div>
        </section>

        <section className="content">
          <div className="callLayout">
            <div className="videoArea">
              <div className="videoBox large">
                {joined ? (
                  <video
                    ref={localVideoRef}
                    autoPlay
                    muted
                    playsInline
                    className="videoElement"
                  />
                ) : (
                  <div className="placeholder">
                    {loadingMedia ? "Connecting camera and microphone..." : "Waiting to join room"}
                  </div>
                )}
              </div>

              <div className="videoRow">
                <div className="videoBox small">
                  {joined ? "Your camera is connected" : "Local preview"}
                </div>
                <div className="videoBox small">
                  Remote participant preview
                </div>
              </div>
            </div>

            <aside className="sidebar">
              <div className="panel">
                <h2>Room Controls</h2>

                {!joined ? (
                  <button
                    className="primaryBtn full"
                    onClick={startLocalStream}
                    type="button"
                    disabled={loadingMedia}
                  >
                    {loadingMedia ? "Joining..." : "Join Consultation Room"}
                  </button>
                ) : (
                  <>
                    <button
                      className="primaryBtn full"
                      onClick={toggleCamera}
                      type="button"
                    >
                      {cameraOn ? "Turn Camera Off" : "Turn Camera On"}
                    </button>

                    <button
                      className="secondaryBtn full"
                      onClick={toggleMic}
                      type="button"
                    >
                      {micOn ? "Mute Microphone" : "Unmute Microphone"}
                    </button>

                    <button
                      className="dangerBtn full"
                      onClick={leaveRoom}
                      type="button"
                    >
                      Leave Room
                    </button>
                  </>
                )}

                {error && <p className="errorText">{error}</p>}
              </div>

              <div className="panel">
                <h2>Status</h2>
                <p>
                  <strong>Room:</strong> Consultation Room
                </p>
                <p>
                  <strong>Joined:</strong> {joined ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Camera:</strong> {cameraOn ? "On" : "Off"}
                </p>
                <p>
                  <strong>Microphone:</strong> {micOn ? "On" : "Muted"}
                </p>
              </div>

              <div className="panel">
                <h2>Next Step</h2>
                <p>
                  Next we connect this room to a real signaling system so both
                  the customer and consultant can see and hear each other in the
                  same room.
                </p>

                <div className="links">
                  <Link href="/consultation">Customer Consultation Page</Link>
                  <Link href="/consultant">Consultant Dashboard</Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          background: #f7f4ee;
          color: #2a1c15;
        }

        .page {
          min-height: 100vh;
        }

        .header {
          background: linear-gradient(135deg, #1e140f, #3a2418);
          color: white;
          padding: 70px 20px 50px;
        }

        .inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .eyebrow {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #d8b07a;
        }

        .header h1 {
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 500;
          margin: 12px 0 14px;
        }

        .header p {
          max-width: 760px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.88);
        }

        .content {
          padding: 32px 20px 60px;
        }

        .callLayout {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 22px;
        }

        .videoArea {
          display: grid;
          gap: 16px;
        }

        .videoBox {
          border: 1px solid #eadfce;
          background: #ffffff;
          display: grid;
          place-items: center;
          color: #6b584b;
          font-size: 0.95rem;
          overflow: hidden;
        }

        .videoBox.large {
          min-height: 420px;
        }

        .videoRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .videoBox.small {
          min-height: 160px;
          padding: 16px;
        }

        .videoElement {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: black;
        }

        .placeholder {
          padding: 20px;
        }

        .sidebar {
          display: grid;
          gap: 16px;
          align-self: start;
        }

        .panel {
          background: #fffdf9;
          border: 1px solid #eadfce;
          padding: 18px;
        }

        .panel h2 {
          margin: 0 0 12px;
          font-size: 1rem;
          font-weight: 600;
        }

        .panel p {
          margin: 8px 0;
          font-size: 0.92rem;
          line-height: 1.7;
          color: #5f4a3d;
        }

        .primaryBtn,
        .secondaryBtn,
        .dangerBtn {
          border: none;
          padding: 12px 16px;
          font-weight: 600;
          font-size: 0.92rem;
          cursor: pointer;
        }

        .primaryBtn {
          background: #c79356;
          color: #1e120d;
        }

        .secondaryBtn {
          background: #efe5d8;
          color: #3a2418;
        }

        .dangerBtn {
          background: #7f2f2f;
          color: white;
        }

        .full {
          width: 100%;
          margin-bottom: 10px;
        }

        .errorText {
          color: #8b2c2c !important;
          font-size: 0.88rem !important;
          margin-top: 10px !important;
        }

        .links {
          display: grid;
          gap: 8px;
          margin-top: 12px;
        }

        .links a {
          color: #7c5a3c;
          text-decoration: none;
          font-size: 0.92rem;
        }

        @media (max-width: 900px) {
          .callLayout {
            grid-template-columns: 1fr;
          }

          .videoRow {
            grid-template-columns: 1fr;
          }

          .videoBox.large {
            min-height: 280px;
          }
        }
      `}</style>
    </>
  );
}
