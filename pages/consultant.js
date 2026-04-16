import Head from "next/head";
import { useEffect, useState } from "react";

export default function ConsultantPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadRequests() {
    try {
      const res = await fetch("/api/create-consultation-request");
      const data = await res.json();
      setRequests(data.requests || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    try {
      const res = await fetch("/api/create-consultation-request", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, status }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to update request");
        return;
      }

      loadRequests();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  useEffect(() => {
    loadRequests();
    const interval = setInterval(loadRequests, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Consultant Dashboard | Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="page">
        <section className="header">
          <div className="inner">
            <p className="eyebrow">Consultant Dashboard</p>
            <h1>Incoming consultation requests</h1>
            <p>
              This page is the consultant side of the consultation system.
            </p>
          </div>
        </section>

        <section className="content">
          <div className="card">
            {loading ? (
              <p>Loading consultation requests...</p>
            ) : requests.length === 0 ? (
              <p>No consultation requests yet.</p>
            ) : (
              <div className="requestList">
                {requests.map((request) => (
                  <article className="requestCard" key={request.id}>
                    <div className="requestTop">
                      <div>
                        <h2>{request.fullName}</h2>
                        <p className="requestId">Request ID: {request.id}</p>
                      </div>
                      <span className="status">{request.status}</span>
                    </div>

                    <div className="requestInfo">
                      <p><strong>Phone:</strong> {request.phone}</p>
                      <p><strong>Email:</strong> {request.email}</p>
                      <p><strong>Event Type:</strong> {request.eventType}</p>
                      <p><strong>Event Date:</strong> {request.eventDate}</p>
                      <p><strong>Notes:</strong> {request.notes || "No notes"}</p>
                      <p><strong>Created:</strong> {request.createdAt}</p>
                      <p><strong>Room:</strong> {request.roomId}</p>
                    </div>

                    <div className="requestActions">
                      <button
                        type="button"
                        onClick={() => updateStatus(request.id, "ringing")}
                        className="ringBtn"
                      >
                        Ringing
                      </button>

                      <button
                        type="button"
                        onClick={() => updateStatus(request.id, "answered")}
                      >
                        Answer
                      </button>

                      <button
                        type="button"
                        className="secondary"
                        onClick={() => updateStatus(request.id, "declined")}
                      >
                        Decline
                      </button>

                      {request.roomUrl && (
                        <a href={request.roomUrl} className="openRoomBtn">
                          Open Room
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
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
          background: #f8f5ef;
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
          max-width: 1000px;
          margin: 0 auto;
        }

        .eyebrow {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #d8b07a;
        }

        .header h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 500;
          margin: 12px 0 14px;
        }

        .header p {
          max-width: 760px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.88);
        }

        .content {
          padding: 40px 20px 70px;
        }

        .card {
          max-width: 1000px;
          margin: 0 auto;
          background: #fffdf9;
          border: 1px solid #ede2d3;
          padding: 24px;
        }

        .requestList {
          display: grid;
          gap: 18px;
        }

        .requestCard {
          border: 1px solid #eadfce;
          background: white;
          padding: 18px;
        }

        .requestTop {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: start;
          margin-bottom: 10px;
        }

        .requestTop h2 {
          margin: 0 0 4px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .requestId {
          margin: 0;
          color: #8a6b4d;
          font-size: 0.85rem;
        }

        .status {
          background: #f3e5d3;
          color: #7a5635;
          padding: 6px 10px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .requestInfo p {
          margin: 6px 0;
          line-height: 1.7;
          color: #5f4a3d;
          font-size: 0.92rem;
        }

        .requestActions {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          flex-wrap: wrap;
        }

        .requestActions button,
        .openRoomBtn {
          border: none;
          background: #c79356;
          color: #1e120d;
          padding: 10px 16px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        .requestActions .ringBtn {
          background: #e3efe8;
          color: #244631;
        }

        .requestActions .secondary {
          background: #efe5d8;
          color: #3a2418;
        }

        .openRoomBtn {
          background: #2f4f3e;
          color: white;
        }
      `}</style>
    </>
  );
}