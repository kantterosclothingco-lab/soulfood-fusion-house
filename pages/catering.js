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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="topbar">
        <Link href="/" className="brand">
          Soulfood Fusion Catering
        </Link>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#packages">Packages</a>
          <a href="#menus">Menus</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO VIDEO */}
        <section className="hero">
          <video autoPlay muted loop playsInline className="heroVideo">
            <source src="/videos/catering.mp4" type="video/mp4" />
          </video>

          <div className="overlay" />

          <div className="heroContent">
            <p className="eyebrow">Soulfood Fusion Catering</p>
            <h1>Catering for events, gatherings, and shared meals</h1>
            <p>
              Filipino-inspired dishes, shared trays, and flexible catering for
              birthdays, private events, and special occasions.
            </p>

            <div className="buttons">
              <a href="#about" className="primaryBtn">About</a>
              <a href="#menus" className="secondaryBtn">Menus</a>
              <a href="#contact" className="secondaryBtn">Contact</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <h2>About</h2>
          <p>
            Soulfood Fusion Catering provides food for events, parties, and
            gatherings. Simple service, good food, and reliable setup for your
            event.
          </p>
        </section>

        {/* PACKAGES */}
        <section className="section" id="packages">
          <h2>Packages</h2>

          <div className="grid">
            <div>
              <h3>Bronze</h3>
              <p>1 rice, 4 mains, dessert, drinks (min 50 pax)</p>
            </div>

            <div>
              <h3>Silver</h3>
              <p>1 rice, appetizer, 4 mains, desserts, drinks</p>
            </div>

            <div>
              <h3>Gold</h3>
              <p>Rice, salad, appetizer, 5 mains, desserts</p>
            </div>

            <div>
              <h3>Platinum</h3>
              <p>Full service with lechon belly and platters</p>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section className="section" id="menus">
          <h2>Menu Options</h2>

          <div className="grid">
            <div>
              <h3>Chicken</h3>
              <p>Inasal, Adobo, Curry, Fried Chicken, Teriyaki</p>
            </div>

            <div>
              <h3>Pork</h3>
              <p>Sisig, Lechon Belly, BBQ Ribs, Bicol Express</p>
            </div>

            <div>
              <h3>Beef</h3>
              <p>Kare-kare, Rendang, Caldereta, Stroganoff</p>
            </div>

            <div>
              <h3>Seafood</h3>
              <p>Prawns, Barramundi, Seafood dishes</p>
            </div>

            <div>
              <h3>Noodles & Rice</h3>
              <p>Pancit, Pad Thai, Java Rice, Fried Rice</p>
            </div>

            <div>
              <h3>Desserts</h3>
              <p>Mango Float, Ube Desserts, Cakes</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <h2>Contact</h2>

          <p><strong>Phone:</strong> 2413326097</p>
          <p><strong>Email:</strong> soulfoodfusionhouse@gmail.com</p>
          <p><strong>Address:</strong> 8 High St, Bendigo VIC 3550</p>

          <div className="buttons">
            <a href="tel:2413326097" className="primaryBtn">Call</a>
            <a href={mapLink} target="_blank" className="secondaryBtn">
              Map
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Soulfood Fusion Catering</p>
      </footer>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          padding: 20px 40px;
          background: #111;
        }

        .topbar a {
          color: white;
          margin-left: 15px;
        }

        .hero {
          height: 90vh;
          position: relative;
        }

        .heroVideo {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
        }

        .heroContent {
          position: relative;
          color: white;
          padding: 80px;
        }

        .section {
          padding: 60px;
          max-width: 900px;
          margin: auto;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 20px;
        }

        .buttons {
          margin-top: 20px;
        }

        .primaryBtn {
          background: #c79356;
          padding: 10px 20px;
          margin-right: 10px;
        }

        .secondaryBtn {
          border: 1px solid black;
          padding: 10px 20px;
        }

        .footer {
          text-align: center;
          padding: 30px;
          border-top: 1px solid #ddd;
        }

        @media(max-width:768px){
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
