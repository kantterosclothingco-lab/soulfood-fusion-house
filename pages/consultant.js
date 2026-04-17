import Head from "next/head";
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

  useEffect(() => {
    const socket = io(CONSULTANT_SERVER_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      setStatus("Connected. Consultant is ready to receive calls.");
      socket.emit("register-consultant");
    });

    socket.on("connect_error", (error) => {
      console.error(error);
      setStatus("Failed to connect to consultant notification server.");
    });

    socket.on("incoming-call", (request) => {
      setCurrentRequest(request);

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

      window.location.href = `${WEBSITE_URL}${currentRequest.roomUrl}`;
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
      </Head>

      <main className="page">
        <div className="card">
          <h1>Consultant App</h1>
          <p className="status">{status}</p>

          {!currentRequest ? (
            <div className="idleBox">
              <p>Waiting for incoming consultation requests.</p>
            </div>
          ) : (
            <div className="callBox">
              <p className="ringing">Incoming Free Consultation</p>
              <p><strong>Name:</strong> {currentRequest.fullName}</p>
              <p><strong>Phone:</strong> {currentRequest.phone}</p>
              <p><strong>Email:</strong> {currentRequest.email}</p>
              <p><strong>Event:</strong> {currentRequest.eventType}</p>
              <p><strong>Date:</strong> {currentRequest.eventDate}</p>

              <div className="actions">
                <button className="answerBtn" onClick={handleAnswer}>
                  Answer Call
                </button>
                <button className="declineBtn" onClick={handleDecline}>
                  Decline
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f8f5ef;
          color: #2a1c15;
        }

        .page {
          min-height: 100vh;
          padding: 24px;
        }

        .card {
          max-width: 760px;
          margin: 0 auto;
          background: white;
          border: 1px solid #eadfce;
          padding: 24px;
        }

        h1 {
          margin-top: 0;
        }

        .status {
          font-weight: 600;
          margin-bottom: 18px;
        }

        .idleBox,
        .callBox {
          border: 1px solid #d9c7b3;
          background: #fff9f2;
          padding: 18px;
        }

        .ringing {
          color: #a33a2d;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .actions {
          margin-top: 16px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        button {
          border: none;
          padding: 12px 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .answerBtn {
          background: #2f4f3e;
          color: white;
        }

        .declineBtn {
          background: #efe5d8;
          color: #3a2418;
        }
      `}</style>
    </>
  );
}