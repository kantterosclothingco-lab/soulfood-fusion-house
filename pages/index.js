import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

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
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* POPUP */}
      {showPopup && (
        <div className="popupOverlay">
          <div className="popupContainer">
            <button
              className="popupClose"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <div className="popupSide">
              <img
                src="/images/MothersdayPoster3.jpg"
                alt="Lunch Event"
              />
              <a href="https://soulfood-fusion-house.onrender.com/book-lunch.html">
                <button className="popupBtn lunch">BOOK LUNCH</button>
              </a>
            </div>

            <div className="popupSide">
              <img
                src="/images/ReyValeraPoster2.jpg"
                alt="Dinner Event"
              />
              <a href="https://soulfood-fusion-house.onrender.com/book-dinner.html">
                <button className="popupBtn dinner">BOOK DINNER</button>
              </a>
            </div>
          </div>
        </div>
      )}

      <Head>
        <title>Soulfood Fusion House</title>
      </Head>

      <header className="topbar">
        <h2>Soulfood Fusion House</h2>
      </header>

      <main>
        <section className="hero">
          <h1>WHERE GOOD FOOD MEETS YOUR SOULFUL CRAVINGS!</h1>
        </section>
      </main>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial;
        }

        .popupOverlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popupContainer {
          width: 900px;
          max-width: 95%;
          display: flex;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }

        .popupSide {
          width: 50%;
          padding: 10px;
          text-align: center;
        }

        .popupSide img {
          width: 100%;
        }

        .popupBtn {
          margin-top: 10px;
          padding: 12px;
          width: 100%;
          font-weight: bold;
          border: none;
        }

        .popupBtn.lunch {
          background: #e91e63;
          color: #fff;
        }

        .popupBtn.dinner {
          background: #000;
          color: #fff;
        }

        .popupClose {
          position: absolute;
          top: 10px;
          right: 10px;
          background: black;
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .popupContainer {
            flex-direction: column;
          }
          .popupSide {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}