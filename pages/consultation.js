import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const CONSULTANT_SERVER_URL =
  "https://soulfood-consultant-server-production.up.railway.app";

export default function ConsultationPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [status, setStatus] = useState("waiting");
  const [roomUrl, setRoomUrl] = useState("");
  const [requestData, setRequestData] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/create-consultation-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to submit consultation request");
        return;
      }

      setSubmitted(true);
      setRequestId(data.request.id);
      setStatus(data.request.status);
      setRoomUrl(data.request.roomUrl);
      setRequestData(data.request);

      try {
        await fetch(`${CONSULTANT_SERVER_URL}/notify-consultants`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            request: data.request
          }),
        });
      } catch (notifyError) {
        console.error("Consultant notification failed:", notifyError);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!requestId) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/create-consultation-request");
        const data = await res.json();

        const current = (data.requests || []).find(
          (r) => r.id === requestId
        );

        if (current) {
          setStatus(current.status);
          setRoomUrl(current.roomUrl || "");
          setRequestData(current);
        }
      } catch (error) {
        console.error(error);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [requestId]);

  const joinUrl =
    requestData
      ? `/call-room?roomId=${encodeURIComponent(requestData.roomId)}&role=customer&autostart=1&requestId=${encodeURIComponent(requestId)}&fullName=${encodeURIComponent(requestData.fullName || "")}&phone=${encodeURIComponent(requestData.phone || "")}&email=${encodeURIComponent(requestData.email || "")}&eventType=${encodeURIComponent(requestData.eventType || "")}&eventDate=${encodeURIComponent(requestData.eventDate || "")}&notes=${encodeURIComponent(requestData.notes || "")}`
      : "#";

  return (
    <>
      <Head>
        <title>Free Consultation | Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page">
        <section className="hero">
          <div className="heroInner">
            <p className="eyebrow">Free Consultation</p>
            <h1>Speak with our catering consultant</h1>
            <p>
              Tell us about your event and connect with our team for a free
              consultation.
            </p>
          </div>
        </section>

        <section className="formSection">
          <div className="formCard">
            {!submitted ? (
              <>
                <h2>Request Consultation</h2>

                <form onSubmit={handleSubmit} className="formGrid">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="eventType"
                    placeholder="Event Type"
                    value={form.eventType}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="eventDate"
                    placeholder="Event Date"
                    value={form.eventDate}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    name="notes"
                    placeholder="Additional details"
                    value={form.notes}
                    onChange={handleChange}
                    rows="5"
                  />

                  <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Start Free Consultation"}
                  </button>
                </form>
              </>
            ) : (
              <div className="successBox">
                <h2>Consultation Requested</h2>

                <p><strong>Request ID:</strong> {requestId}</p>

                <div className="statusBox">
                  <p>Status</p>
                  <div className={`status ${status}`}>{status}</div>
                </div>

                {status === "waiting" && <p>Waiting for consultant...</p>}

                {status === "answered" && (
                  <a href={joinUrl} className="joinBtn">
                    Join Video Consultation
                  </a>
                )}
              </div>
            )}

            <div className="backLink">
              <Link href="/catering">← Back</Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial;
          background: #faf7f2;
        }

        .hero {
          background: #2a1c15;
          color: white;
          padding: 60px 20px;
        }

        .formCard {
          max-width: 600px;
          margin: auto;
          background: white;
          padding: 20px;
        }

        .formGrid {
          display: grid;
          gap: 10px;
        }

        input, textarea {
          padding: 10px;
        }

        button {
          padding: 12px;
          background: #c79356;
          border: none;
          cursor: pointer;
        }

        .status {
          padding: 6px;
          margin-top: 5px;
        }

        .answered { background: #c8f7c5; }
        .waiting { background: #f3e5d3; }

        .joinBtn {
          display: inline-block;
          margin-top: 10px;
          background: #2f4f3e;
          color: white;
          padding: 10px;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}