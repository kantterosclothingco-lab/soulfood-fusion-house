import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const bestSellers = [
  {
    name: "Filo BBQ Ribs",
    price: "$29.9",
    image: "/images/menu/filo-bbq-ribs.jpg",
    description: "Filo style pork ribs barbecue served with your choice of sides.",
  },
  {
    name: "Grilled Chicken Inasal",
    price: "$24.9",
    image: "/images/menu/grilled-chicken-inasal.jpg",
    description: "Char-grilled chicken marinated in Soulfood special sauce.",
  },
  {
    name: "Soulfood Burger",
    price: "$26",
    image: "/images/menu/soulfood-burger.jpg",
    description: "Angus beef, melted cheese, bacon, pineapple, and smashed avo.",
  },
  {
    name: "Crispy Pork Belly",
    price: "$26.00",
    image: "/images/menu/crispy-pork-belly-bagnet.jpg",
    description: "Crispy, savory, and full of flavor.",
  },
  {
    name: "Beef Tapa (Tapsilog)",
    price: "$28.60",
    image: "/images/menu/beef-tapa-tapsilog.jpg",
    description: "A house favorite made for hearty appetites.",
  },
  {
    name: "Asian Fried Calamari",
    price: "$17.60",
    image: "/images/menu/asian-fried-calamari.jpg",
    description: "Crispy calamari with salad, mayo, and signature vinegar dip.",
  },
];

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=8+High+St,+Bendigo+VIC+3550,+Australia";

const reviewLink =
  "https://www.google.com/search?q=SoulFood+Fusion+House+Reviews";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="topbar">
        <div className="brandWrap">
          <img src="/images/logo/logo.png" className="logo" />
          <div>
            <h2>Soulfood Fusion House</h2>
            <p>Bendigo, VIC</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#bestsellers">Best Sellers</a>
          <a href="#visit">Visit</a>
          <Link href="/menu">Menu</Link>
          <Link href="/catering">Catering</Link>
          <Link href="/checkout">Order</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="heroOverlay" />
          <div className="heroContent">
            <h1>WHERE GOOD FOOD MEETS YOUR SOULFUL CRAVINGS</h1>
            <p>
              Good food, warm service, and bold flavors made to share.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="aboutSection" id="about">
          <div className="sectionIntro">
            <h2>About Us</h2>
            <p>
              Soulfood Fusion House brings together Filipino favorites,
              comforting mains, and fresh dishes in a warm dining experience.
            </p>
          </div>
        </section>

        {/* BEST SELLERS */}
        <section className="bestSellerSection" id="bestsellers">
          <div className="dishGrid">
            {bestSellers.map((item) => (
              <div key={item.name}>
                <img src={item.image} />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VISIT */}
        <section id="visit">
          <h2>Visit Us</h2>
          <p>8 High St, Bendigo VIC 3550</p>
          <a href={mapLink} target="_blank">Open Map</a>
        </section>

        {/* BOOKING */}
        <section>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <input placeholder="Name" required />
              <input placeholder="Phone" required />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <p>Thank you!</p>
          )}
        </section>
      </main>

      {/* ✅ CLEAN AESTHETIC FOOTER */}
      <footer className="footer">
        <div className="footerLeft">
          <h3>Soulfood Fusion House</h3>
          <p>Where good food meets your soulful cravings.</p>
        </div>

        <div className="footerLinks">
          <Link href="/menu">Menu</Link>
          <Link href="/catering">Catering</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/checkout">Order</Link>
          <a href={mapLink} target="_blank">Location</a>
          <a href={reviewLink} target="_blank">Reviews</a>
        </div>

        <div className="footerRight">
          <p>8 High St, Bendigo VIC 3550</p>
          <p>+61 403 036 727</p>
          <p>soulfoodfusionhouse@gmail.com</p>
        </div>
      </footer>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          background: #f8f4ee;
        }

        .footer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding: 40px;
          border-top: 1px solid #ead7bf;
        }

        .footer h3 {
          font-family: serif;
        }

        .footerLinks {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        @media (max-width: 800px) {
          .footer {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
