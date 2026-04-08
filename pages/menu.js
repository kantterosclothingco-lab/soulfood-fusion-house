import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addToCart, getCartCount } from "../lib/cart";

const reviewLink =
  "https://www.google.com/search?sca_esv=1578db8b805c577c&sxsrf=ANbL-n6D8nRjb_fNMoNfjrpx3FLWu0Z8RQ:1774762975084&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdn7PKGMS2CqhpWnURd-em_dI93f_FTD6soC0lZqrBmEJNFVQwA2NFk7OvIIk9SURLjnweEVxpWw3g382Vt6Dbyo107aDNHzg2-Zui6vlEAuE9PwwJmD-8wxId7WF1Ue61sAvWo%3D&q=SoulFood+Fusion+House+Cafe+%26+Restaurant+Reviews&sa=X&ved=2ahUKEwipysKls8STAxVMla8BHacLIl0Q0bkNegQIKBAH&biw=1358&bih=644&dpr=1";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=8+High+St,+Bendigo+VIC+3550,+Australia";

const menuSections = [
  {
    title: "Steak & Grill",
    items: [
      {
        name: "Filo BBQ Ribs",
        price: "$29.90",
        image: "/images/menu/filo-bbq-ribs.jpg",
        description:
          "Filo style pork ribs barbecue. Single comes with Java rice, chips, or salad.",
      },
      {
        name: "Grilled Chicken Inasal",
        price: "$24.90",
        image: "/images/menu/grilled-chicken-inasal.jpg",
        description:
          "Char-grilled chicken marinated in Soulfood special sauce.",
      },
      {
        name: "Pinoy Barbeque Skewers",
        price: "$24.50",
        image: "/images/menu/pinoy-barbeque-skewers.jpg",
        description:
          "Pinoy-style barbecue marinated with Soulfood signature barbecue sauce.",
      },
      {
        name: "Porterhouse",
        price: "$36.00",
        image: "/images/menu/porterhouse-steak.jpg",
        description:
          "300 grams Vic farm grain. Includes salad, veggies, Java, mash, or chips.",
      },
      {
        name: "Sizzling Pork Sisig",
        price: "$28.00",
        image: "/images/menu/sizzling-pork-sisig.jpg",
        description: "A sizzling Filipino favorite with bold flavor.",
      },
      {
        name: "Soulfood Burger",
        price: "$26.00",
        image: "/images/menu/soulfood-burger.jpg",
        description:
          "Grilled Angus beef topped with melted cheese, bacon, pineapple, and smashed avo.",
      },
    ],
  },
  {
    title: "Soup",
    items: [
      {
        name: "Lomi Noodle Soup",
        price: "$28.00",
        image: "/images/menu/lomi-noodle-soup.jpg",
        description: "Comforting noodle soup with a rich broth.",
      },
      {
        name: "Pork Sinigang",
        price: "$34.00",
        image: "/images/menu/pork-sinigang.jpg",
        description: "Classic sour Filipino soup with pork.",
      },
      {
        name: "Beef Nilaga",
        price: "$36.00",
        image: "/images/menu/beef-nilaga.jpg",
        description: "A hearty beef soup perfect for comfort meals.",
      },
    ],
  },
  {
    title: "Appetizer",
    items: [
      {
        name: "Asian Fried Calamari",
        price: "$17.60",
        image: "/images/menu/asian-fried-calamari.jpg",
        description:
          "Crispy calamari with salad, mayo, and signature vinegar dip.",
      },
      {
        name: "Pork Spring Roll (Shang-hai)",
        price: "$14.00",
        image: "/images/menu/pork-spring-roll.jpg",
        description: "A crispy and flavorful appetizer favorite.",
      },
      {
        name: "Boneless Crispy Chicken Bites",
        price: "$16.00",
        image: "/images/menu/boneless-crispy-chicken-bites.jpg",
        description: "Crunchy bites of chicken with a satisfying finish.",
      },
    ],
  },
];

function MenuSection({ title, items, onAdd }) {
  return (
    <section className="menuSection">
      <div className="sectionHeading">
        <p className="sectionLabel">Menu</p>
        <h2>{title}</h2>
      </div>

      <div className="menuGrid">
        {items.map((item) => (
          <article className="menuCard" key={item.name}>
            <div className="menuImageWrap">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="menuBody">
              <div className="menuTop">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>

              <div className="menuActions">
                <button
                  className="addBtn"
                  onClick={() => onAdd(item)}
                  type="button"
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function MenuPage() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(getCartCount());
  }, []);

  function handleAddToCart(item) {
    addToCart(item);
    setCartCount(getCartCount());
    alert(`${item.name} added to cart`);
  }

  return (
    <>
      <Head>
        <title>Menu | Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <header className="topbar">
        <Link href="/" className="brand brandWithLogo">
          <img
            src="/images/logo/logo.png"
            alt="Soulfood Fusion House Logo"
            className="logo"
          />
          <span>Soulfood Fusion House</span>
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/checkout" className="cartBtn">
            🛒 Cart ({cartCount})
          </Link>
          <a href={mapLink} target="_blank" rel="noreferrer" className="menuBtn">
            📍 Map
          </a>
          <a href={reviewLink} target="_blank" rel="noreferrer" className="reviewBtn">
            ⭐ Reviews
          </a>
        </nav>
      </header>

      <main className="menuPage">
        <section className="menuHero">
          <div className="menuHeroOverlay" />
          <div className="menuHeroContent">
            <p className="sectionLabel light">Full Menu</p>
            <h1>Choose your order</h1>
            <p>Add dishes to cart, then continue to checkout.</p>
          </div>
        </section>

        {menuSections.map((section) => (
          <MenuSection
            key={section.title}
            title={section.title}
            items={section.items}
            onAdd={handleAddToCart}
          />
        ))}

        <div className="bottomCta">
          <Link href="/checkout" className="backBtn">
            🛒 Go to Checkout
          </Link>
        </div>
      </main>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; background: #f8f4ee; color: #2b1c15; }
        a { text-decoration: none; }
        img { display: block; width: 100%; }

        .topbar {
          position: sticky; top: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center;
          padding: 18px 28px; background: rgba(17,10,8,0.88); backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212,174,112,0.18); flex-wrap: wrap; gap: 14px;
        }
        .brand, .nav a { color: #fff4e8; font-weight: 700; }
        .brandWithLogo { display: flex; align-items: center; gap: 12px; }
        .logo { width: 52px; height: 52px; object-fit: contain; border-radius: 12px; background: white; padding: 4px; }
        .nav { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }

        .menuBtn, .cartBtn, .reviewBtn {
          padding: 11px 18px; border-radius: 999px; font-weight: 700; display: inline-block;
        }
        .menuBtn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); color: #fff4e8 !important; }
        .cartBtn { background: linear-gradient(135deg, #c79356, #e7c78a); color: #1e120d !important; }
        .reviewBtn { background: #3a2a20; color: #fff4e8 !important; }

        .menuPage { max-width: 1280px; margin: 0 auto; padding-bottom: 70px; }
        .menuHero {
          position: relative; min-height: 42vh; margin: 0 28px; border-radius: 0 0 28px 28px;
          overflow: hidden; background: url("/images/menu/porterhouse-steak.jpg") center/cover no-repeat;
          display: flex; align-items: end;
        }
        .menuHeroOverlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(18,10,8,0.28), rgba(18,10,8,0.82));
        }
        .menuHeroContent { position: relative; z-index: 2; padding: 42px 32px; max-width: 760px; }
        .sectionLabel { text-transform: uppercase; letter-spacing: 0.18em; font-size: 0.78rem; font-weight: 700; color: #c99961; }
        .light { color: #f0d8b3; }
        .menuHero h1 { font-size: clamp(2.3rem, 6vw, 4.6rem); line-height: 1.02; color: #fff8f0; margin: 12px 0 14px; }
        .menuHero p { color: #eadbcb; line-height: 1.8; margin: 0; }

        .menuSection { padding: 64px 28px 0; }
        .sectionHeading { margin-bottom: 24px; }
        .sectionHeading h2 { margin: 10px 0 0; font-size: clamp(1.9rem, 4vw, 3rem); color: #2f1d15; }

        .menuGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .menuCard {
          background: #fff; border: 1px solid #ead7bf; border-radius: 24px; overflow: hidden;
          box-shadow: 0 18px 42px rgba(53,31,18,0.08); transition: 0.3s ease;
        }
        .menuCard:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(53,31,18,0.12); }
        .menuImageWrap { height: 250px; overflow: hidden; }
        .menuImageWrap img { height: 100%; object-fit: cover; }
        .menuBody { padding: 24px; }
        .menuTop { display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; margin-bottom: 10px; }
        .menuTop h3 { margin: 0; color: #332116; }
        .menuTop span { color: #b57a39; font-weight: 700; white-space: nowrap; }
        .menuBody p { margin: 0 0 16px; color: #6f5a49; line-height: 1.75; }
        .menuActions { display: flex; }

        .addBtn {
          border: none;
          border-radius: 999px;
          padding: 12px 18px;
          background: linear-gradient(135deg, #c79356, #ebce97);
          color: #1e120d;
          font-weight: 700;
          cursor: pointer;
        }

        .bottomCta { text-align: center; margin-top: 46px; padding: 0 28px; }
        .backBtn {
          display: inline-block; padding: 14px 22px; border-radius: 999px;
          background: linear-gradient(135deg, #c79356, #ebce97); color: #1e120d; font-weight: 700;
        }

        @media (max-width: 980px) {
          .menuGrid { grid-template-columns: 1fr; }
          .topbar, .menuSection, .bottomCta { padding-left: 18px; padding-right: 18px; }
          .menuHero { margin: 0 18px; }
        }
      `}</style>
    </>
  );
}
