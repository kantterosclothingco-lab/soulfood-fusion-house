export default function Home() {
  return (
    <>
      <main className="container">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              Soulful comfort • Modern fusion • Warm hospitality
            </span>

            <h1>Bold Southern flavor with a modern fusion twist.</h1>

            <p className="lead">
              A concept homepage for Soulfood Fusion House designed to feel
              premium, rich, and modern — with room for online ordering,
              reservations, AI chat, catering, and a full restaurant system.
            </p>

            <div className="hero-actions">
              <a href="#menu" className="primary-btn">
                View Signature Dishes
              </a>
              <a href="#contact" className="ghost-btn">
                Plan Catering
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <strong>Fast Ordering</strong>
                <span>Ready for pickup and delivery flow</span>
              </div>
              <div className="stat">
                <strong>Live AI Support</strong>
                <span>Future-ready for inquiries and menu help</span>
              </div>
              <div className="stat">
                <strong>Brand Upgrade</strong>
                <span>Luxury layout with strong food-first visuals</span>
              </div>
            </div>
          </div>

          <aside className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80"
              alt="Soul food platter"
            />
          </aside>
        </section>

        <section className="section-pad" id="experience">
          <div className="section-title">
            <h2>A concept built to feel rich, warm, and unforgettable</h2>
            <p>
              Luxury comfort-food branding with space for ecommerce, AI, and
              full restaurant automation.
            </p>
          </div>

          <div className="cards">
            <article className="card">
              <h3>Order-Ready Design</h3>
              <p>
                Built to evolve into a real ordering system with categories,
                add-ons, checkout, pickup, and delivery options.
              </p>
            </article>

            <article className="card">
              <h3>AI Inquiry Assistant</h3>
              <p>
                Perfect for adding a live AI chat that answers opening hours,
                menu questions, reservations, and catering requests.
              </p>
            </article>

            <article className="card">
              <h3>Conversion Focused</h3>
              <p>
                Every section can guide visitors toward actions that matter:
                order, reserve, call, ask, or book an event.
              </p>
            </article>
          </div>
        </section>

        <section className="section-pad" id="menu">
          <div className="section-title">
            <h2>Signature dishes</h2>
            <p>
              Sample layout content for inspiration — you can replace everything
              later with the real menu.
            </p>
          </div>

          <div className="menu-grid">
            <article className="menu-card">
              <h3>Smoked BBQ Ribs Plate</h3>
              <p>
                Sticky glazed ribs, creamy mac and cheese, cornbread, and house
                slaw.
              </p>
              <p className="price">From $18</p>
            </article>

            <article className="menu-card">
              <h3>Cajun Shrimp &amp; Grits</h3>
              <p>
                Butter-seared shrimp on creamy grits with herbs, spice, and
                soulful depth.
              </p>
              <p className="price">From $16</p>
            </article>

            <article className="menu-card">
              <h3>Hot Honey Fried Chicken</h3>
              <p>
                Crispy chicken finished with hot honey glaze and served with
                seasoned fries.
              </p>
              <p className="price">From $15</p>
            </article>
          </div>
        </section>

        <section className="section-pad">
          <div className="section-title">
            <h2>Visual direction</h2>
            <p>
              A simple gallery concept you can later replace with your own AI
              images, real food photography, and final brand assets.
            </p>
          </div>

          <div className="gallery">
            <figure className="large">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
                alt="Restaurant interior"
              />
              <figcaption>
                Warm lighting, dark tones, and a premium dining feel.
              </figcaption>
            </figure>

            <div className="stack">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
                  alt="Food closeup"
                />
              </figure>
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
                  alt="Restaurant dish"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="cta-panel">
            <h2>Ready to turn this into a full smart restaurant platform?</h2>
            <p>
              Next steps can include a real menu system, booking flow, AI chat
              widget, event inquiries, online checkout, and an admin dashboard.
            </p>
            <a href="#contact" className="primary-btn">
              Start the next version
            </a>
          </div>
        </section>

        <section className="section-pad" id="contact">
          <div className="contact-box">
            <div>
              <h2>Get launch updates or reserve for events</h2>
              <p>
                Use this section later for reservations, catering, private
                dining, or customer inquiries.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
              <button type="submit">Join the list</button>
            </form>
          </div>
        </section>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(
            180deg,
            #120b08 0%,
            #1a100c 35%,
            #24150f 100%
          );
          color: #f7efe7;
        }

        a {
          text-decoration: none;
        }

        img {
          display: block;
          width: 100%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 80px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          min-height: 80vh;
          padding: 32px 0 24px;
        }

        .eyebrow {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(215, 161, 74, 0.12);
          color: #f2c16f;
          border: 1px solid rgba(215, 161, 74, 0.18);
          margin-bottom: 18px;
          font-size: 14px;
        }

        h1 {
          font-size: clamp(42px, 7vw, 78px);
          line-height: 0.98;
          margin: 0 0 18px;
          color: #fff7ef;
        }

        .lead {
          font-size: 18px;
          line-height: 1.7;
          color: #e9d8c6;
          max-width: 680px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin: 28px 0;
        }

        .primary-btn {
          background: linear-gradient(135deg, #d7a14a, #f1c97a);
          color: #20120d;
          font-weight: 700;
          padding: 15px 22px;
          border-radius: 999px;
          display: inline-block;
        }

        .ghost-btn {
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff1e6;
          padding: 15px 22px;
          border-radius: 999px;
          display: inline-block;
          background: rgba(255, 255, 255, 0.03);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 18px;
        }

        .stat {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 18px;
        }

        .stat strong {
          display: block;
          font-size: 18px;
          color: #fff6ed;
          margin-bottom: 6px;
        }

        .stat span {
          color: #d7c3b2;
          font-size: 14px;
          line-height: 1.5;
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
        }

        .hero-card img {
          min-height: 560px;
          object-fit: cover;
        }

        .section-pad {
          padding: 60px 0;
        }

        .section-title {
          text-align: center;
          margin-bottom: 32px;
        }

        .section-title h2 {
          font-size: clamp(30px, 4vw, 48px);
          margin-bottom: 10px;
          color: #fff7ef;
        }

        .section-title p {
          color: #dac7b7;
          max-width: 820px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card,
        .menu-card {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.03)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px;
        }

        .card h3,
        .menu-card h3 {
          margin-top: 0;
          color: #fff6ed;
        }

        .card p,
        .menu-card p {
          color: #dbc7b7;
          line-height: 1.7;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .price {
          color: #f2c16f !important;
          font-weight: 700;
        }

        .gallery {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .gallery figure {
          margin: 0;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          overflow: hidden;
        }

        .gallery .large img {
          min-height: 460px;
          object-fit: cover;
        }

        .gallery .stack {
          display: grid;
          gap: 20px;
        }

        .gallery .stack img {
          min-height: 220px;
          object-fit: cover;
        }

        figcaption {
          padding: 16px 18px;
          color: #dbc7b7;
          font-size: 14px;
        }

        .cta-panel {
          background: linear-gradient(
            135deg,
            rgba(215, 161, 74, 0.18),
            rgba(255, 122, 24, 0.12)
          );
          border: 1px solid rgba(215, 161, 74, 0.22);
          border-radius: 24px;
          padding: 42px 24px;
          text-align: center;
        }

        .cta-panel h2 {
          margin-top: 0;
          color: #fff7ef;
        }

        .cta-panel p {
          color: #e4d2c2;
          max-width: 760px;
          margin: 0 auto 22px;
          line-height: 1.7;
        }

        .contact-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 28px;
        }

        .contact-box h2 {
          margin-top: 0;
          color: #fff7ef;
        }

        .contact-box p {
          color: #dbc7b7;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 14px;
        }

        .contact-form input {
          width: 100%;
          padding: 15px 16px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: white;
          outline: none;
        }

        .contact-form button {
          padding: 15px 22px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(135deg, #d7a14a, #f1c97a);
          color: #20120d;
          font-weight: 700;
          cursor: pointer;
        }

        @media (max-width: 980px) {
          .hero,
          .cards,
          .menu-grid,
          .gallery,
          .stats,
          .contact-form {
            grid-template-columns: 1fr;
          }

          .hero-card img,
          .gallery .large img,
          .gallery .stack img {
            min-height: 280px;
          }

          .container {
            padding: 24px 16px 60px;
          }
        }
      `}</style>
    </>
  );
}
