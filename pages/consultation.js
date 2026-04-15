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
        setLoading(false);
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

        const currentRequest = (data.requests || []).find(
          (request) => request.id === requestId
        );

        if (currentRequest) {
          setStatus(currentRequest.status);
          setRoomUrl(currentRequest.roomUrl || "");
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
            <h1>Talk to our catering consultant</h1>
            <p>
              Submit your event details and request a free consultation for your
              catering needs.
            </p>
          </div>
        </section>

        <section className="formSection">
          <div className="formCard">
            {!submitted ? (
              <>
                <h2>Consultation Request</h2>

                <form onSubmit={handleSubmit} className="formGrid">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="eventType"
                    placeholder="Event type"
                    value={form.eventType}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="eventDate"
                    placeholder="Event date"
                    value={form.eventDate}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    name="notes"
                    placeholder="Tell us about your event"
                    value={form.notes}
                    onChange={handleChange}
                    rows="6"
                  />

                  <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Request Free Consultation"}
                  </button>
                </form>
              </>
            ) : (
              <div className="successBox">
                <h2>Consultation request received</h2>
                <p>
                  <strong>Request ID:</strong> {requestId}
                </p>

                <div className="statusBox">
                  <p className="statusLabel">Current Status</p>
                  <div className={`statusPill ${status}`}>{status}</div>
                </div>

                {status === "waiting" && (
                  <p>Your consultation request is waiting for a consultant.</p>
                )}

                {status === "ringing" && (
                  <p>A consultant is being notified now. Please stay on this page.</p>
                )}

                {status === "answered" && (
                  <div className="joinBox">
                    <p>A consultant has answered your request.</p>
                    {roomUrl && (
                      <a href={roomUrl} className="joinBtn">
                        Join Consultation Room
                      </a>
                    )}
                  </div>
                )}

                {status === "declined" && (
                  <p>
                    This consultation request was declined. You can submit a new
                    request or contact the restaurant directly.
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
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          background: #faf7f2;
          color: #2a1c15;
        }

        .page {
          min-height: 100vh;
        }

        .hero {
          background: linear-gradient(135deg, #1e140f, #3a2418);
          color: white;
          padding: 80px 20px 60px;
        }

        .heroInner {
          max-width: 900px;
          margin: 0 auto;
        }

        .eyebrow {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #d8b07a;
        }

        .hero h1 {
          font-size: clamp(2.2rem, 5vw, 4rem);
          margin: 12px 0 14px;
          font-weight: 500;
        }

        .hero p {
          max-width: 650px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.88);
        }

        .formSection {
          padding: 50px 20px 70px;
        }

        .formCard {
          max-width: 860px;
          margin: 0 auto;
          background: #fffdf9;
          border: 1px solid #f0e6d8;
          padding: 28px;
        }

        .formCard h2 {
          margin-top: 0;
          font-weight: 500;
        }

        .formGrid {
          display: grid;
          gap: 14px;
        }

        .formGrid input,
        .formGrid textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #dccfbe;
          background: white;
          font-size: 0.95rem;
          font-family: inherit;
          color: #2a1c15;
        }

        .formGrid button,
        .joinBtn {
          border: none;
          background: #c79356;
          color: #1e120d;
          padding: 14px 18px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        .formGrid button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .successBox p {
          line-height: 1.8;
          color: #6f5a49;
        }

        .statusBox {
          margin: 18px 0;
        }

        .statusLabel {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #8a6b4d;
          margin-bottom: 8px;
        }

        .statusPill {
          display: inline-block;
          padding: 8px 12px;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
        }

        .statusPill.waiting {
          background: #f3e5d3;
          color: #7a5635;
        }

        .statusPill.ringing {
          background: #e9f1fb;
          color: #315a8b;
        }

        .statusPill.answered {
          background: #e3efe8;
          color: #244631;
        }

        .statusPill.declined {
          background: #f7e2e2;
          color: #7a2e2e;
        }

        .joinBox {
          margin-top: 10px;
        }

        .backLink {
          margin-top: 18px;
        }

        .backLink a {
          color: #7c5a3c;
          text-decoration: none;
          font-size: 0.92rem;
        }
      `}</style>
    </>
  );
}
