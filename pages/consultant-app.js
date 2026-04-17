import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const CONSULTANT_SERVER_URL =
  "https://soulfood-consultant-server-production.up.railway.app";

const WEBSITE_URL = "https://soulfoodfusionhouse.com";

export default function ConsultantAppPage() {
  const socketRef = useRef(null);

  const [status, setStatus] = useState(
    "Connecting to consultant notification server..."
  );
  const [currentRequest, setCurrentRequest] = useState(null);
  const [ringing, setRinging] = useState(false);

  useEffect(() => {
    const socket = io(CONSULTANT_SERVER_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      setStatus("Connected. Consultant is ready.");
      socket.emit("register-consultant");
    });

    socket.on("connect_error", (error) => {
      console.error(error);
      setStatus("Failed to connect to consultant notification server.");
    });

    socket.on("incoming-call", async (request) => {
      setCurrentRequest(request);
      setRinging(true);

      try {
        const audio = new Audio(
          "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
        );
        audio.play().catch(() => {});
      } catch (e) {
        console.error(e);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  async function handleAnswer() {
    if (!currentRequest) return;

    try {
      const res = await fetch(`${WEBSITE_URL}/api/create-consultation-request`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: currentRequest.id,
          status: "answered",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to answer consultation.");
        return;
      }

      setRinging(false);

      const params = new URLSearchParams({
        roomId: currentRequest.roomId,
        role: "consultant",
        autostart: "1",
        requestId: currentRequest.id,
        fullName: currentRequest.fullName || "",
        phone: currentRequest.phone || "",
        email: currentRequest.email || "",
        eventType: currentRequest.eventType || "",
        eventDate: currentRequest.eventDate || "",
        notes: currentRequest.notes || "",
      });

      window.location.href = `${WEBSITE_URL}/call-room?${params.toString()}`;
    } catch (error) {
      console.error(error);
      alert("Failed to answer consultation.");
    }
  }

  async function handleDecline() {
    if (!currentRequest) return;

    try {
      const res = await fetch(`${WEBSITE_URL}/api/create-consultation-request`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: currentRequest.id,
          status: "declined",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to decline consultation.");
        return;
      }

      setCurrentRequest(null);
      setRinging(false);
      setStatus("Connected. Consultant is ready.");
    } catch (error) {
      console.error(error);
      alert("Failed to decline consultation.");
    }
  }

  return (
    <>
      <Head>
        <title>Consultant App | Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f10" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <main className="page">
        {!currentRequest ? (
          <section className="waitingScreen">
            <div className="topBar">
              <div>
                <p className="label">Soulfood Consultant</p>
                <h1>Ready for calls</h1>
              </div>

              <div className="topActions">
                <div className="statusDotWrap">
                  <span className="statusDot" />
                  <span>Online</span>
                </div>

                <Link href="/call-records" className="recordsIconBtn" title="Call Records">
                  📋
                </Link>
              </div>
            </div>

            <div className="waitingCard">
              <div className="avatarCircle">SF</div>
              <h2>Consultant App</h2>
              <p>{status}</p>
              <div className="tipBox">
                Keep this page open on your phone home screen for the fastest
                consultation response.
              </div>
            </div>
          </section>
        ) : (
          <section className="incomingScreen">
            <div className="incomingBackdrop" />
            <div className="incomingContent">
              <p className="incomingSmall">Incoming consultation</p>
              <div className={`pulseRing ${ringing ? "active" : ""}`}>
                <div className="avatarCircle large">SF</div>
              </div>

              <h1>{currentRequest.fullName}</h1>
              <p className="subtitle">{currentRequest.eventType}</p>
              <p className="subtitle">{currentRequest.eventDate}</p>

              <div className="detailsCard">
                <p><strong>Phone:</strong> {currentRequest.phone}</p>
                <p><strong>Email:</strong> {currentRequest.email}</p>
                <p><strong>Notes:</strong> {currentRequest.notes || "No notes"}</p>
              </div>

              <div className="callActions">
                <button className="declineBtn" onClick={handleDecline}>
                  Decline
                </button>
                <button className="answerBtn" onClick={handleAnswer}>
                  Answer
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          margin: 0;
          min-height: 100%;
          font-family: Inter, Arial, sans-serif;
          background: #0f0f10;
        }

        .page {
          min-height: 100vh;
          color: #fff;
        }

        .waitingScreen {
          min-height: 100vh;
          background: linear-gradient(180deg, #111214 0%, #1a1b1e 100%);
          padding: 24px 18px 32px;
          display: flex;
          flex-direction: column;
        }

        .topBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 30px;
        }

        .topActions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .recordsIconBtn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 20px;
          color: white;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .label {
          margin: 0 0 8px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #a7a7ac;
        }

        .topBar h1 {
          margin: 0;
          font-size: 34px;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .statusDotWrap {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #d5d5d7;
          font-size: 14px;
        }

        .statusDot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #29d17d;
          display: inline-block;
        }

        .waitingCard {
          margin: auto;
          width: 100%;
          max-width: 460px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 28px 22px;
          text-align: center;
        }

        .avatarCircle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2f4f3e, #4e7f66);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 24px;
          margin: 0 auto 18px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);
        }

        .avatarCircle.large {
          width: 96px;
          height: 96px;
          font-size: 30px;
        }

        .waitingCard h2 {
          margin: 0 0 10px;
          font-size: 28px;
        }

        .waitingCard p {
          margin: 0;
          color: #d1d1d5;
          line-height: 1.7;
        }

        .tipBox {
          margin-top: 18px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06);
          color: #cfcfd4;
          font-size: 14px;
          line-height: 1.6;
        }

        .incomingScreen {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at top, #202a2f 0%, #0e0f11 58%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 18px;
        }

        .incomingBackdrop {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04),
            rgba(0, 0, 0, 0.28)
          );
        }

        .incomingContent {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 460px;
          text-align: center;
        }

        .incomingSmall {
          margin: 0 0 16px;
          color: #c0c0c7;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 12px;
        }

        .pulseRing {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .pulseRing.active::before,
        .pulseRing.active::after {
          content: "";
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.18);
          animation: pulse 2s infinite;
        }

        .pulseRing.active::after {
          animation-delay: 1s;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .incomingContent h1 {
          margin: 0 0 8px;
          font-size: 38px;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .subtitle {
          margin: 0 0 6px;
          color: #d4d4d8;
          font-size: 16px;
        }

        .detailsCard {
          margin-top: 22px;
          text-align: left;
          border-radius: 24px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .detailsCard p {
          margin: 8px 0;
          color: #f0f0f2;
          line-height: 1.6;
          font-size: 14px;
        }

        .callActions {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-top: 28px;
        }

        .callActions button {
          border: none;
          width: 132px;
          height: 58px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }

        .declineBtn {
          background: #2b2c30;
          color: #fff;
        }

        .answerBtn {
          background: #23c46e;
          color: #fff;
          box-shadow: 0 10px 30px rgba(35, 196, 110, 0.3);
        }
      `}</style>
    </>
  );
}