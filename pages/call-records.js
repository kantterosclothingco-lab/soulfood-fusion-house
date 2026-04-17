import { useEffect, useState } from "react";
import Link from "next/link";

export default function CallRecordsPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadRecords();
  }, []);

  async function loadRecords() {
    const res = await fetch("/api/call-records");
    const data = await res.json();
    setRecords(data.records || []);
  }

  return (
    <main style={{ padding: 24, fontFamily: "Arial", background: "#f7f4ef", minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <h1 style={{ marginBottom: 8 }}>Call Records</h1>
            <p style={{ margin: 0, color: "#666" }}>Consultation caller details and call events</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={loadRecords} style={{ padding: "10px 14px", cursor: "pointer" }}>
              Refresh
            </button>
            <Link href="/consultant-app" style={{ padding: "10px 14px", textDecoration: "none", background: "#2f4f3e", color: "white" }}>
              Back
            </Link>
          </div>
        </div>

        {records.length === 0 ? (
          <p>No call records yet.</p>
        ) : (
          <div style={{ display: "grid", gap: 14 }}>
            {records.map((record) => (
              <div
                key={record.id}
                style={{
                  border: "1px solid #ddd",
                  padding: 18,
                  background: "#fff",
                  borderRadius: 12,
                }}
              >
                <p><strong>Customer Name:</strong> {record.fullName || "-"}</p>
                <p><strong>Phone:</strong> {record.phone || "-"}</p>
                <p><strong>Email:</strong> {record.email || "-"}</p>
                <p><strong>Event Type:</strong> {record.eventType || "-"}</p>
                <p><strong>Event Date:</strong> {record.eventDate || "-"}</p>
                <p><strong>Notes:</strong> {record.notes || "-"}</p>
                <hr style={{ margin: "12px 0" }} />
                <p><strong>Request ID:</strong> {record.requestId}</p>
                <p><strong>Room ID:</strong> {record.roomId}</p>
                <p><strong>Role:</strong> {record.role}</p>
                <p><strong>Event:</strong> {record.event}</p>
                <p><strong>Time:</strong> {record.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}