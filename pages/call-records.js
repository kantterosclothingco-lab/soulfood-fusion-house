import { useEffect, useState } from "react";

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
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <h1>Call Records</h1>
      <button onClick={loadRecords} style={{ marginBottom: 20 }}>
        Refresh
      </button>

      {records.length === 0 ? (
        <p>No call records yet.</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {records.map((record) => (
            <div
              key={record.id}
              style={{
                border: "1px solid #ddd",
                padding: 16,
                background: "#fff",
              }}
            >
              <p><strong>Request ID:</strong> {record.requestId}</p>
              <p><strong>Room ID:</strong> {record.roomId}</p>
              <p><strong>Role:</strong> {record.role}</p>
              <p><strong>Event:</strong> {record.event}</p>
              <p><strong>Time:</strong> {record.time}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}