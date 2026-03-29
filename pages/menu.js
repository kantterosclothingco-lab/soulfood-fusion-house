import Link from "next/link";

const menu = [
  { name: "Filo BBQ Ribs", price: "$29.9", img: "filo-bbq-ribs.jpg" },
  { name: "Grilled Chicken Inasal", price: "$24.9", img: "grilled-chicken-inasal.jpg" },
  { name: "Pinoy Barbeque Skewers", price: "$24.5", img: "pinoy-barbeque-skewers.jpg" },
  { name: "Porterhouse Steak", price: "$36", img: "porterhouse-steak.jpg" },
  { name: "Sizzling Pork Sisig", price: "$28", img: "sizzling-pork-sisig.jpg" },
  { name: "Soulfood Burger", price: "$26", img: "soulfood-burger.jpg" },
  { name: "Lomi Noodle Soup", price: "$28", img: "lomi-noodle-soup.jpg" },
  { name: "Pork Sinigang", price: "$34", img: "pork-sinigang.jpg" },
  { name: "Chopseuy", price: "$23", img: "chopseuy-mix-vegetables.jpg" },
  { name: "Asian Fried Calamari", price: "$17.60", img: "asian-fried-calamari.jpg" },
  { name: "Steam Rice", price: "$7", img: "steam-rice.jpg" },
  { name: "Beef Tapa", price: "$28.60", img: "beef-tapa-tapsilog.jpg" },
  { name: "Crispy Pata", price: "$39", img: "crispy-pata-family.jpg" },
  { name: "Kare Kare", price: "$34", img: "beef-brisket-kare-kare.jpg" },
];

export default function Menu() {
  return (
    <>
      <header className="topbar">
        <Link href="/">← Home</Link>
        <h2>Menu</h2>
      </header>

      <section className="menuGrid">
        {menu.map((item) => (
          <div className="card" key={item.name}>
            <img src={`/images/menu/${item.img}`} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </section>

      <style jsx global>{`
        .menuGrid {
          padding: 30px;
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
      `}</style>
    </>
  );
}
