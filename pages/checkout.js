import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const [paymentType, setPaymentType] = useState("card");

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
          <img src="/images/logo/logo.png" alt="Soulfood Fusion House Logo" className="logo" />
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
          <h1>Complete your order</h1>
          <p>
            This page is ready for future payment integration using Stripe, Square,
            card checkout, digital wallets, and Afterpay-supported flows.
          </p>
        </section>

        <div className="checkoutGrid">
          <section className="checkoutCard">
            <h2>Customer Details</h2>
            <form className="checkoutForm" action="/success">
              <input type="text" placeholder="Full name" required />
              <input type="tel" placeholder="Phone number" required />
              <input type="email" placeholder="Email address" required />
              <input type="text" placeholder="Order notes" />
              <select required>
                <option value="">Choose order type</option>
                <option>Pickup</option>
                <option>Delivery</option>
              </select>
              <input type="text" placeholder="Delivery address (if needed)" />
              <button type="submit" className="payBtn">
                Proceed to Confirmation
              </button>
            </form>
          </section>

          <aside className="checkoutCard">
            <h2>Payment Options</h2>

            <div className="paymentOptions">
              <button
                type="button"
                className={paymentType === "card" ? "paymentOption active" : "paymentOption"}
                onClick={() => setPaymentType("card")}
              >
                💳 Card Payment
              </button>

              <button
                type="button"
                className={paymentType === "wallet" ? "paymentOption active" : "paymentOption"}
                onClick={() => setPaymentType("wallet")}
              >
                📱 Apple Pay / Google Pay
              </button>

              <button
                type="button"
                className={paymentType === "afterpay" ? "paymentOption active" : "paymentOption"}
                onClick={() => setPaymentType("afterpay")}
              >
                🛍 Afterpay
              </button>
            </div>

            <div className="paymentInfo">
              {paymentType === "card" && (
                <>
                  <h3>Card checkout</h3>
                  <p>
                    Best for direct online payment using a future Stripe or Square integration.
                  </p>
                </>
              )}

              {paymentType === "wallet" && (
                <>
                  <h3>Digital wallets</h3>
                  <p>
                    This flow can support Apple Pay and Google Pay once checkout is connected.
                  </p>
                </>
              )}

              {paymentType === "afterpay" && (
                <>
                  <h3>Afterpay-ready flow</h3>
                  <p>
                    Afterpay can usually be enabled through a supported payment provider,
                    depending on region and account approval.
                  </p>
                </>
              )}
            </div>

            <div className="orderSummary">
              <h3>Order Summary Example</h3>
              <p>2 × Grilled Chicken Inasal</p>
              <p>1 × Asian Fried Calamari</p>
              <p>1 × Java Rice</p>
              <hr />
              <strong>Total: A$76.50</strong>
            </div>
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
        .checkoutCard h2, .checkoutCard h3 { color: #332116; }

        .checkoutForm { display: grid; gap: 14px; }
        .checkoutForm input, .checkoutForm select {
          width: 100%; padding: 16px 18px; border-radius: 14px; border: 1px solid #dcc7af; background: white; font-size: 1rem;
        }

        .payBtn {
          border: none; border-radius: 999px; padding: 15px 20px;
          background: linear-gradient(135deg, #c79356, #ebce97);
          color: #1e120d; font-weight: 700; cursor: pointer;
        }

        .paymentOptions { display: grid; gap: 12px; margin-bottom: 18px; }

        .paymentOption {
          width: 100%; padding: 14px 16px; border-radius: 16px; border: 1px solid #dcc7af;
          background: white; font-weight: 700; color: #3a2418; text-align: left; cursor: pointer;
        }

        .paymentOption.active {
          background: linear-gradient(135deg, #fff1dc, #f7dfb5);
          border-color: #c79356;
        }

        .paymentInfo { margin-bottom: 20px; color: #6f5a49; line-height: 1.75; }

        .orderSummary {
          background: #fffaf4; border: 1px solid #ead7bf; border-radius: 18px; padding: 18px;
        }
        .orderSummary p { color: #6f5a49; margin: 0 0 8px; }
        .orderSummary hr { border: none; border-top: 1px solid #ead7bf; margin: 14px 0; }

        @media (max-width: 900px) {
          .checkoutGrid { grid-template-columns: 1fr; }
          .checkoutPage { padding-left: 18px; padding-right: 18px; }
          .topbar { padding: 16px 18px; }
        }
      `}</style>
    </>
  );
}
