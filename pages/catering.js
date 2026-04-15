import Head from "next/head";
import Link from "next/link";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=8+High+St,+Bendigo+VIC+3550,+Australia";

export default function CateringPage() {
  return (
    <>
      <Head>
        <title>Soulfood Fusion Catering</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CLEAN PROFESSIONAL FONT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* NAV */}
      <header className="topbar">
        <Link href="/" className="brand brandWithLogo">
          <img
            src="/images/logo/logo.png"
            alt="Logo"
            className="logo"
          />
          <span>Soulfood Fusion Catering</span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <a href="#about">About</a>
          <a href="#menus">Menus</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO VIDEO */}
        <section className="hero">
          <video
            className="heroVideo"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/catering.mp4" type="video/mp4" />
          </video>

          <div className="heroOverlay" />

          <div className="heroContent">
            <p className="eyebrow">Soulfood Fusion Catering</p>

            <h1>
              Catering for events, gatherings, and shared meals in Bendigo
            </h1>

            <p>
              Simple food, generous servings, and reliable service for birthdays,
              private events, and group catering.
            </p>

            <div className="heroButtons">
              <a href="#about" className="primaryBtn">About</a>
              <a href="#menus" className="secondaryBtn">Menus</a>
              <a href="#contact" className="secondaryBtn">Contact</a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="section intro">
          <p>
            A Bendigo-based catering service focused on good food, simple
            ordering, and events that run smoothly.
          </p>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <h2>About</h2>
          <p>
            Soulfood Fusion Catering provides shared meals and food trays for
            birthdays, office lunches, and private events. Our focus is on food
            that is easy to serve, satisfying, and enjoyable for groups.
          </p>
        </section>

        {/* MENUS */}
        <section className="section" id="menus">
          <h2>Menus</h2>

          <div className="grid">
            <div>
              <h3>Party Catering</h3>
              <p>Food trays for birthdays and gatherings.</p>
            </div>

            <div>
              <h3>Office Catering</h3>
              <p>Meals for meetings and team lunches.</p>
            </div>

            <div>
              <h3>Custom Catering</h3>
              <p>Flexible menu based on your event.</p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section" id="gallery">
          <h2>Gallery</h2>

          <div className="gallery">
            <img src="/images/menu/filo-bbq-ribs.jpg" />
            <img src="/images/menu/grilled-chicken-inasal.jpg" />
            <img src="/images/menu/pinoy-barbeque-skewers.jpg" />
            <img src="/images/menu/crispy-pork-belly-bagnet.jpg" />
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <h2>Contact</h2>

          <p><strong>Phone:</strong> +61 403 036 727</p>
          <p><strong>Email:</strong> soulfoodfusionhouse@gmail.com</p>
          <p><strong>Address:</strong> 8 High St, Bendigo VIC 3550</p>

          <div className="heroButtons">
            <a href="tel:+61403036727" className="primaryBtn">Call</a>
            <a href={mapLink} target="_blank" className="secondaryBtn">
              Map
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>Soulfood Fusion Catering</p>
      </footer>

      {/* STYLES */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: #faf7f2;
          color: #2a1c15;
        }

        a {
          text-decoration: none;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          padding: 20px 40px;
          background: #1a120e;
        }

        .nav a,
        .brand {
          color: white;
          margin-left: 16px;
          font-weight: 500;
        }

        .logo {
          width: 40px;
        }

        .hero {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .heroVideo {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heroOverlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          padding: 60px;
          margin-left: 80px;
          color: white;
        }

        .heroContent h1 {
          font-size: 3rem;
          font-weight: 500;
          margin: 10px 0;
        }

        .heroContent p {
          max-width: 500px;
          line-height: 1.7;
          opacity: 0.9;
        }

        .eyebrow {
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .heroButtons {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .primaryBtn {
          background: #c79356;
          padding: 12px 20px;
          border-radius: 999px;
          color: black;
        }

        .secondaryBtn {
          border: 1px solid white;
          padding: 12px 20px;
          border-radius: 999px;
          color: white;
        }

        .section {
          padding: 60px 40px;
          max-width: 900px;
          margin: auto;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .gallery img {
          height: 200px;
          object-fit: cover;
          width: 100%;
        }

        .footer {
          text-align: center;
          padding: 30px;
          border-top: 1px solid #ddd;
        }

        @media(max-width: 900px){
          .grid, .gallery {
            grid-template-columns: 1fr;
          }

          .heroContent {
            margin-left: 20px;
            padding: 30px;
          }

          .heroContent h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}
