import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function CallRecordsDashboard() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    loadRecords();
  }, []);

  async function loadRecords() {
    try {
      setLoading(true);
      const res = await fetch("/api/call-records");
      const data = await res.json();
      setRecords(data.records || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load call records.");
    } finally {
      setLoading(false);
    }
  }

  const filteredRecords = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return records;

    return records.filter((record) => {
      return [
        record.full_name,
        record.phone,
        record.email,
        record.event_type,
        record.event_date,
        record.notes,
        record.role,
        record.event,
        record.request_id,
        record.room_id,
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(q));
    });
  }, [records, query]);

  const totalRecords = records.length;
  const startedCount = records.filter((r) => r.event === "started").length;
  const endedCount = records.filter((r) =>
    ["ended", "ended-by-user", "other-participant-left"].includes(r.event)
  ).length;

  function formatDate(dateValue) {
    if (!dateValue) return "-";
    try {
      return new Date(dateValue).toLocaleString();
    } catch {
      return dateValue;
    }
  }

  function getBadgeClass(event) {
    if (event === "started") return "started";
    if (
      event === "ended" ||
      event === "ended-by-user" ||
      event === "other-participant-left"
    ) {
      return "endedState";
    }
    return "";
  }

  return (
    <main className="dashboard">
      <div className="container">
        <div className="topBar">
          <div>
            <p className="eyebrow">Admin Dashboard</p>
            <h1>Call Records</h1>
            <p className="subtext">
              Consultation caller details and call activity history.
            </p>
          </div>

          <div className="topActions">
            <button onClick={loadRecords} className="refreshBtn">
              Refresh
            </button>
            <Link href="/consultant-app" className="backBtn">
              Back to Consultant App
            </Link>
          </div>
        </div>

        <section className="statsGrid">
          <article className="statCard">
            <span className="statLabel">Total Records</span>
            <strong>{totalRecords}</strong>
          </article>

          <article className="statCard">
            <span className="statLabel">Started Calls</span>
            <strong>{startedCount}</strong>
          </article>

          <article className="statCard">
            <span className="statLabel">Ended Calls</span>
            <strong>{endedCount}</strong>
          </article>
        </section>

        <section className="filterBar">
          <input
            type="text"
            placeholder="Search name, phone, email, event, request ID..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </section>

        {loading ? (
          <div className="emptyState">Loading records...</div>
        ) : filteredRecords.length === 0 ? (
          <div className="emptyState">No matching call records found.</div>
        ) : (
          <section className="recordsGrid">
            {filteredRecords.map((record) => (
              <article className="recordCard" key={record.id}>
                <div className="recordHeader">
                  <div>
                    <h2>{record.full_name || "Unknown Customer"}</h2>
                    <p className="recordMeta">
                      {record.event_type || "No event type"} •{" "}
                      {record.event_date || "No event date"}
                    </p>
                  </div>

                  <span className={`badge ${getBadgeClass(record.event)}`}>
                    {record.event || "unknown"}
                  </span>
                </div>

                <div className="detailGrid">
                  <div>
                    <label>Phone</label>
                    <p>{record.phone || "-"}</p>
                  </div>

                  <div>
                    <label>Email</label>
                    <p>{record.email || "-"}</p>
                  </div>

                  <div>
                    <label>Role</label>
                    <p>{record.role || "-"}</p>
                  </div>

                  <div>
                    <label>Time</label>
                    <p>{formatDate(record.time)}</p>
                  </div>

                  <div>
                    <label>Request ID</label>
                    <p>{record.request_id || "-"}</p>
                  </div>

                  <div>
                    <label>Room ID</label>
                    <p>{record.room_id || "-"}</p>
                  </div>
                </div>

                <div className="notesBox">
                  <label>Notes</label>
                  <p>{record.notes || "No notes provided."}</p>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>

      <style jsx>{`
        .dashboard {
          min-height: 100vh;
          background: #f6f2eb;
          color: #1f1a17;
          font-family: Arial, sans-serif;
          padding: 28px 18px 48px;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .topBar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .eyebrow {
          margin: 0 0 8px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 12px;
          color: #7c6a5f;
        }

        h1 {
          margin: 0 0 8px;
          font-size: 40px;
          line-height: 1.05;
        }

        .subtext {
          margin: 0;
          color: #6f6258;
          max-width: 680px;
          line-height: 1.6;
        }

        .topActions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .refreshBtn,
        .backBtn {
          border: none;
          padding: 12px 16px;
          border-radius: 999px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .refreshBtn {
          background: #d8c2a5;
          color: #2a1c15;
        }

        .backBtn {
          background: #2f4f3e;
          color: white;
        }

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 20px;
        }

        .statCard {
          background: white;
          border-radius: 20px;
          padding: 18px;
          border: 1px solid #eadfce;
        }

        .statLabel {
          display: block;
          font-size: 13px;
          color: #7b6a5b;
          margin-bottom: 10px;
        }

        .statCard strong {
          font-size: 28px;
        }

        .filterBar {
          margin-bottom: 20px;
        }

        .filterBar input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 16px;
          border: 1px solid #d9cbbb;
          background: white;
          font-size: 15px;
        }

        .emptyState {
          background: white;
          border: 1px solid #eadfce;
          border-radius: 20px;
          padding: 28px;
          text-align: center;
          color: #6f6258;
        }

        .recordsGrid {
          display: grid;
          gap: 16px;
        }

        .recordCard {
          background: white;
          border: 1px solid #eadfce;
          border-radius: 24px;
          padding: 20px;
        }

        .recordHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .recordHeader h2 {
          margin: 0 0 6px;
          font-size: 24px;
        }

        .recordMeta {
          margin: 0;
          color: #6f6258;
        }

        .badge {
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          background: #eee4d6;
          color: #5c4739;
        }

        .badge.started {
          background: #d9f4e3;
          color: #1b6a3e;
        }

        .badge.endedState {
          background: #f6d9d6;
          color: #9a3024;
        }

        .detailGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 18px;
          margin-bottom: 16px;
        }

        .detailGrid label,
        .notesBox label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #8a7768;
          margin-bottom: 6px;
          font-weight: 700;
        }

        .detailGrid p,
        .notesBox p {
          margin: 0;
          line-height: 1.5;
          word-break: break-word;
        }

        .notesBox {
          background: #faf7f2;
          border: 1px solid #eee3d4;
          border-radius: 16px;
          padding: 14px;
        }

        @media (max-width: 800px) {
          .statsGrid {
            grid-template-columns: 1fr;
          }

          .detailGrid {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </main>
  );
}