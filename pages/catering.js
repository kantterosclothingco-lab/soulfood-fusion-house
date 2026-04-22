import Head from "next/head";
import Link from "next/link";

export default function CateringPage() {
  return (
    <>
      <Head>
        <title>Catering & Events | SoulFood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">SoulFood Fusion Catering & Events</p>
            <h1>Services</h1>
            <p className="heroText">
              SoulFood Fusion Catering & Events offers a complete catering
              experience designed to make every occasion seamless, memorable,
              and filled with exceptional flavors.
            </p>
            <p className="heroText">
              We specialize in a unique blend of Filipino cuisine and
              international dishes, combining traditional favorites with modern
              culinary touches to satisfy every guest.
            </p>
          </div>
        </section>

        <section className="contentSection">
          <div className="container grid">
            <article className="card">
              <h2>🎉 Events We Cater</h2>
              <p>
                We provide catering services for a wide range of occasions,
                including:
              </p>
              <ul>
                <li>Weddings</li>
                <li>Birthdays</li>
                <li>Christenings</li>
                <li>Corporate Events</li>
                <li>Anniversaries</li>
                <li>Private Parties</li>
                <li>Family Gatherings</li>
              </ul>
              <p>
                Whether it’s a small intimate event or a large celebration, we
                are equipped to deliver quality and consistency.
              </p>
            </article>

            <article className="card">
              <h2>🍽️ Our Catering Services</h2>

              <div className="serviceBlock">
                <h3>Buffet Catering</h3>
                <p>
                  A wide selection of dishes presented in a beautifully arranged
                  buffet setup, perfect for both small and large gatherings.
                </p>
              </div>

              <div className="serviceBlock">
                <h3>Plated / Formal Dining</h3>
                <p>
                  Elegant, individually served meals ideal for weddings and
                  formal occasions.
                </p>
              </div>

              <div className="serviceBlock">
                <h3>Corporate Catering</h3>
                <p>
                  Reliable and professional catering for meetings, office
                  events, and business functions.
                </p>
              </div>

              <div className="serviceBlock">
                <h3>Private Event Catering</h3>
                <p>
                  Customized food service for birthdays, family gatherings, and
                  special celebrations.
                </p>
              </div>
            </article>

            <article className="card">
              <h2>🌍 Cuisine Specialties</h2>
              <p>Our menu features a combination of:</p>
              <ul>
                <li>Authentic Filipino Favorites</li>
                <li>International Dishes</li>
                <li>Fusion Menu Options</li>
              </ul>
              <p>
                Each dish is carefully prepared using fresh ingredients and
                crafted to deliver both flavor and presentation.
              </p>
            </article>

            <article className="card">
              <h2>📝 Custom Catering Packages</h2>
              <p>
                Every event is different — and we make sure your catering fits
                perfectly.
              </p>
              <p>We offer tailored packages based on:</p>
              <ul>
                <li>Guest size</li>
                <li>Budget</li>
                <li>Menu preferences</li>
                <li>Event type</li>
              </ul>
            </article>

            <article className="card fullWidth">
              <h2>⭐ What We Offer</h2>
              <div className="offerGrid">
                <div className="offerItem">
                  <span>✔</span>
                  <p>High-quality, freshly prepared food</p>
                </div>
                <div className="offerItem">
                  <span>✔</span>
                  <p>Professional and reliable service</p>
                </div>
                <div className="offerItem">
                  <span>✔</span>
                  <p>Clean and elegant food presentation</p>
                </div>
                <div className="offerItem">
                  <span>✔</span>
                  <p>Flexible catering options</p>
                </div>
                <div className="offerItem">
                  <span>✔</span>
                  <p>Stress-free event experience</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="contactSection">
          <div className="container contactCard">
            <h2>Contact Us</h2>
            <p>
              Let us help bring exceptional food and service to your next event.
            </p>
            <a href="tel:+61413326097" className="contactBtn">
              +61 413 326 097
            </a>

            <div className="actionRow">
              <Link href="/consultation" className="primaryBtn">
                Book Free Consultation
              </Link>
              <Link href="/" className="secondaryBtn">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f8f4ee;
          color: #241913;
          font-family: Arial, sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1150px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero {
          background: linear-gradient(135deg, #2a1c15 0%, #53392b 100%);
          color: white;
          padding: 80px 0 70px;
        }

        .eyebrow {
          margin: 0 0 10px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #e1c9b1;
        }

        .hero h1 {
          margin: 0 0 18px;
          font-size: 50px;
          line-height: 1;
        }

        .heroText {
          max-width: 800px;
          font-size: 18px;
          line-height: 1.7;
          margin: 0 0 14px;
          color: #f5ebe2;
        }

        .contentSection {
          padding: 48px 0;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          border: 1px solid #eadfd2;
          border-radius: 24px;
          padding: 26px;
          box-shadow: 0 10px 30px rgba(44, 29, 20, 0.05);
        }

        .card h2 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 28px;
          color: #2a1c15;
        }

        .card h3 {
          margin: 0 0 8px;
          font-size: 20px;
          color: #3d281d;
        }

        .card p {
          margin: 0 0 14px;
          line-height: 1.7;
          color: #5e4a3d;
        }

        .card ul {
          margin: 0 0 14px 20px;
          padding: 0;
          color: #5e4a3d;
          line-height: 1.8;
        }

        .serviceBlock {
          padding: 14px 0;
          border-top: 1px solid #efe6db;
        }

        .serviceBlock:first-of-type {
          border-top: none;
          padding-top: 0;
        }

        .fullWidth {
          grid-column: 1 / -1;
        }

        .offerGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .offerItem {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px 16px;
          background: #faf7f2;
          border: 1px solid #eee3d7;
          border-radius: 16px;
        }

        .offerItem span {
          font-weight: 700;
          color: #2f4f3e;
        }

        .offerItem p {
          margin: 0;
        }

        .contactSection {
          padding: 0 0 60px;
        }

        .contactCard {
          background: #2a1c15;
          color: white;
          border-radius: 28px;
          padding: 34px 24px;
          text-align: center;
        }

        .contactCard h2 {
          margin: 0 0 12px;
          font-size: 34px;
        }

        .contactCard p {
          margin: 0 0 18px;
          color: #efe3d7;
          line-height: 1.6;
        }

        .contactBtn {
          display: inline-block;
          margin-bottom: 20px;
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
        }

        .actionRow {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .secondaryBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 18px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
        }

        .primaryBtn {
          background: #c79356;
          color: #20130d;
        }

        .secondaryBtn {
          background: rgba(255, 255, 255, 0.12);
          color: white;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .offerGrid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 40px;
          }

          .contactBtn {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}