import Link from "next/link";

const bestSellers = [
  {
    name: "Filo BBQ Ribs",
    price: "$29.9",
    image: "/images/menu/filo-bbq-ribs.jpg",
  },
  {
    name: "Chicken Inasal",
    price: "$24.9",
    image: "/images/menu/grilled-chicken-inasal.jpg",
  },
  {
    name: "Crispy Pork Belly",
    price: "$26.00",
    image: "/images/menu/crispy-pork-belly-bagnet.jpg",
  },
  {
    name: "Beef Tapa",
    price: "$28.60",
    image: "/images/menu/beef-tapa-tapsilog.jpg",
  },
  {
    name: "Asian Fried Calamari",
    price: "$17.60",
    image: "/images/menu/asian-fried-calamari.jpg",
  },
  {
    name: "Soulfood Burger",
    price: "$26",
    image: "/images/menu/soulfood-burger.jpg",
  },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <h2>Soulfood Fusion House</h2>
        <Link href="/menu" className="menuBtn">☰ Menu</Link>
      </header>

      <section className="hero">
        <h1>WHERE GOOD FOOD MEETS YOUR SOULFUL CRAVINGS!</h1>
      </section>

      <section className="bestsellers">
        <h2>Best Sellers</h2>

        <div className="grid">
          {bestSellers.map((item) => (
            <div className="card" key={item.name}>
              <img src={item.image} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>

        <Link href="/menu" className="viewMenu">
          View Full Menu
        </Link>
      </section>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial;
          background: #faf6f2;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background: white;
        }

        .menuBtn {
          background: black;
          color: white;
          padding: 10px 15px;
          border-radius: 20px;
        }

        .hero {
          padding: 100px 20px;
          text-align: center;
          background: url('/images/menu/filo-bbq-ribs.jpg') center/cover;
          color: white;
        }

        .bestsellers {
          padding: 50px 20px;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .viewMenu {
          display: inline-block;
          margin-top: 20px;
          background: black;
          color: white;
          padding: 12px 20px;
          border-radius: 20px;
        }
      `}</style>
    </>
  );
}
