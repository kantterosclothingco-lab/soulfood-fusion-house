import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function ConsultationPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    notes: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Consultation request form saved. Next step: connect this to consultant app.");
  }

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

              <button type="submit">Request Free Consultation</button>
            </form>

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

        .formGrid button {
          border: none;
          background: #c79356;
          color: #1e120d;
          padding: 14px 18px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
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
