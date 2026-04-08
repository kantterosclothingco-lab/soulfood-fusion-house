import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  getCart,
  getCartTotal,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../lib/cart";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = Number(String(item.price).replace(/[^0-9.]/g, ""));
      return sum + price * item.quantity;
    }, 0);
  }, [cart]);

  function handleRemove(name) {
    const updated = removeFromCart(name);
    setCart(updated);
  }

  function handleQuantityChange(name, quantity) {
    const updated = updateQuantity(name, quantity);
    setCart(updated);
  }

  function handleCheckout(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    window.location.href = "https://square.link/u/AH4xQ2h4";
  }

  return (
    <>
      <Head>
        <title>Checkout | Soulfood Fusion House</title>
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
          <Link href="/menu">Menu</Link>
          <Link href="/catering">Catering</Link>
        </nav>
      </header>

      <main className="checkoutPage">
        <section className="checkoutHero">
          <p className="eyebrow">Checkout</p>
          <h1>Your cart</h1>
          <p>Review your selected items before paying with Square.</p>
        </section>

        <div className="checkoutGrid">
          <section className="checkoutCard">
            <h2>Cart Items</h2>

            {cart.length === 0 ? (
              <div className="emptyCart">
                <p>Your cart is empty.</p>
                <Link href="/menu" className="backBtn">
                  Go to Menu
                </Link>
              </div>
            ) : (
              <>
                <div className="cartList">
                  {cart.map((item) => (
                    <div className="cartItem" key={item.name}>
                      <img src={item.image} alt={item.name} className="cartImage" />

                      <div className="cartInfo">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>

                        <div className="cartControls">
                          <label>Qty</label>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.name, Number(e.target.value))
                            }
                          />
                          <button
                            type="button"
                            className="removeBtn"
                            onClick={() => handleRemove(item.name)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="clearBtn"
                  onClick={() => {
                    clearCart();
                    setCart([]);
                  }}
                >
                  Clear Cart
                </button>
              </>
            )}
          </section>

          <aside className="checkoutCard">
            <h2>Order Summary</h2>

            <div className="orderSummary">
              <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
              <hr />
              <strong>Total: A${total.toFixed(2)}</strong>
            </div>

            <form className="checkoutForm" onSubmit={handleCheckout}>
              <input type="text" placeholder="Full name" required />
              <input type="tel" placeholder="Phone number" required />
              <input type="email" placeholder="Email address" required />
              <input
                type="text"
                placeholder="Preferred pickup time"
                required
              />

              <button type="submit" className="payBtn">
                Pay with Square
              </button>
            </form>

            <p className="note">
              On the Square page, enter the same order total and include your
              cart items in the order details field.
            </p>
          </aside>
        </div>
      </main>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; background: #f8f4ee; color: #2b1c15; }
        a { text-decoration: none; }

        .topbar {
          position: sticky; top: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center;
          padding: 18px 28px; background: rgba(17,10,8,0.88); backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212,174,112,0.18); flex-wrap: wrap; gap: 14px;
        }
        .brand, .nav a { color: #fff4e8; font-weight: 700; }
        .brandWithLogo { display: flex; align-items: center; gap: 12px; }
        .logo { width: 52px; height: 52px; object-fit: contain; border-radius: 12px; background: white; padding: 4px; }
        .nav { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }

        .checkoutPage { max-width: 1200px; margin: 0 auto; padding: 48px 28px 80px; }
        .checkoutHero { margin-bottom: 30px; }
        .eyebrow { text-transform: uppercase; letter-spacing: 0.18em; font-size: 0.78rem; font-weight: 700; color: #c99961; }
        .checkoutHero h1 { font-size: clamp(2.2rem, 5vw, 4rem); margin: 10px 0 14px; color: #2e1d15; }
        .checkoutHero p { color: #6f5a49; line-height: 1.8; max-width: 760px; }

        .checkoutGrid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 24px; }

        .checkoutCard {
          background: linear-gradient(180deg, #ffffff, #f8efe3);
          border: 1px solid #ead7bf; border-radius: 24px; padding: 26px;
          box-shadow: 0 16px 40px rgba(53,31,18,0.06);
        }

        .cartList { display: grid; gap: 18px; }
        .cartItem {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 16px;
          padding: 14px;
          border: 1px solid #ead7bf;
          border-radius: 18px;
          background: #fffaf4;
        }
        .cartImage {
          width: 110px;
          height: 110px;
          object-fit: cover;
          border-radius: 14px;
        }
        .cartInfo h3 { margin: 0 0 8px; color: #332116; }
        .cartInfo p { margin: 0 0 12px; color: #6f5a49; }

        .cartControls {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .cartControls input {
          width: 70px;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #dcc7af;
        }

        .removeBtn, .clearBtn, .payBtn, .backBtn {
          border: none;
          border-radius: 999px;
          padding: 12px 18px;
          font-weight: 700;
          cursor: pointer;
          display: inline-block;
        }

        .removeBtn {
          background: #3a2a20;
          color: #fff4e8;
        }

        .clearBtn {
          margin-top: 18px;
          background: #efe4d7;
          color: #3a2418;
        }

        .orderSummary {
          background: #fffaf4;
          border: 1px solid #ead7bf;
          border-radius: 18px;
          padding: 18px;
          margin-bottom: 18px;
        }
        .orderSummary p { margin: 0 0 8px; color: #6f5a49; }
        .orderSummary hr { border: none; border-top: 1px solid #ead7bf; margin: 14px 0; }

        .checkoutForm {
          display: grid;
          gap: 14px;
        }
        .checkoutForm input {
          width: 100%;
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid #dcc7af;
          background: white;
          font-size: 1rem;
        }

        .payBtn, .backBtn {
          background: linear-gradient(135deg, #c79356, #ebce97);
          color: #1e120d;
        }

        .note {
          margin-top: 14px;
          color: #6f5a49;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .emptyCart {
          text-align: center;
          padding: 20px 0;
        }

        @media (max-width: 900px) {
          .checkoutGrid { grid-template-columns: 1fr; }
          .checkoutPage { padding-left: 18px; padding-right: 18px; }
          .topbar { padding: 16px 18px; }
          .cartItem { grid-template-columns: 1fr; }
          .cartImage { width: 100%; height: 220px; }
        }
      `}</style>
    </>
  );
}
