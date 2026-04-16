import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        }
      } catch (error) {
        console.error(error);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [requestId]);

  return (
    <>
      <Head>
        <title>Free Consultation | Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
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
                    placeholder="Event Type (Birthday, Wedding, etc.)"
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
                    placeholder="Additional details about your event"
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
                  <p className="statusLabel">Status</p>
                  <div className={`status ${status}`}>{status}</div>
                </div>

                {status === "waiting" && (
                  <p>Waiting for a consultant to respond.</p>
                )}

                {status === "ringing" && (
                  <p>A consultant is being notified. Please stay on this page.</p>
                )}

                {status === "answered" && (
                  <div className="joinBox">
                    <p>Your consultant is ready.</p>
                    <a href={roomUrl} className="joinBtn">
                      Join Video Consultation
                    </a>
                  </div>
                )}

                {status === "declined" && (
                  <p>
                    Request declined. Please try again or contact us directly.
                  </p>
                )}
              </div>
            )}

            <div className="backLink">
              <Link href="/catering">← Back to Catering</Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          background: #faf7f2;
        }

        .hero {
          background: linear-gradient(135deg, #1e140f, #3a2418);
          color: white;
          padding: 80px 20px;
        }

        .heroInner {
          max-width: 900px;
          margin: auto;
        }

        .eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #d8b07a;
        }

        h1 {
          font-size: 3rem;
          margin: 10px 0;
        }

        .formSection {
          padding: 50px 20px;
        }

        .formCard {
          max-width: 800px;
          margin: auto;
          background: white;
          padding: 30px;
          border: 1px solid #eee;
        }

        .formGrid {
          display: grid;
          gap: 14px;
        }

        input, textarea {
          padding: 14px;
          border: 1px solid #ddd;
        }

        button, .joinBtn {
          background: #c79356;
          border: none;
          padding: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          color: #1e120d;
        }

        .status {
          padding: 8px 12px;
          font-weight: 600;
          text-transform: uppercase;
          display: inline-block;
        }

        .waiting { background: #f3e5d3; }
        .ringing { background: #e9f1fb; }
        .answered { background: #e3efe8; }
        .declined { background: #f7e2e2; }

        .backLink {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}