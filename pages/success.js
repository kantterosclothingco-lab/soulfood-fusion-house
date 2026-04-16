import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { clearCart } from "../lib/cart";

const reviewLink =
  "https://www.google.com/search?sca_esv=1578db8b805c577c&sxsrf=ANbL-n6D8nRjb_fNMoNfjrpx3FLWu0Z8RQ:1774762975084&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdn7PKGMS2CqhpWnURd-em_dI93f_FTD6soC0lZqrBmEJNFVQwA2NFk7OvIIk9SURLjnweEVxpWw3g382Vt6Dbyo107aDNHzg2-Zui6vlEAuE9PwwJmD-8wxId7WF1Ue61sAvWo%3D&q=SoulFood+Fusion+House+Cafe+%26+Restaurant+Reviews&sa=X&ved=2ahUKEwipysKls8STAxVMla8BHacLIl0Q0bkNegQIKBAH&biw=1358&bih=644&dpr=1";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=8+High+St,+Bendigo+VIC+3550,+Australia";

export default function SuccessPage() {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Order Confirmed | Soulfood Fusion House</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <main className="successPage">
        <div className="successCard">
          <div className="successIcon">✅</div>

          <p className="eyebrow">Payment Successful</p>

          <h1>Thank you for your order</h1>

          <p className="lead">
            Your payment has been received successfully. Your cart has been
            cleared, and your order is now confirmed.
          </p>

          <div className="infoBox">
            <h3>Pickup reminder</h3>
            <p>
              Please come to:
              <br />
              <strong>8 High St, Bendigo VIC 3550, Australia</strong>
            </p>
            <p>
              If you need help with your order, call:
              <br />
              <strong>+61 403 036 727</strong>
            </p>
          </div>

          <div className="successActions">
            <Link href="/" className="primaryBtn">
              Back to Home
            </Link>

            <Link href="/menu" className="secondaryBtn">
              View Menu
            </Link>

            <a
              href={reviewLink}
              target="_blank"
              rel="noreferrer"
              className="reviewBtn"
            >
              ⭐ Leave a Review
            </a>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="mapBtn"
            >
              📍 Open Map
            </a>
          </div>
        </div>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(
            180deg,
            #120b08 0%,
            #1a100c 35%,
            #24150f 100%
          );
          color: white;
        }

        a {
          text-decoration: none;
        }

        .successPage {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 24px;
        }

        .successCard {
          width: 100%;
          max-width: 820px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 42px 28px;
          text-align: center;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
        }

        .successIcon {
          font-size: 4rem;
          margin-bottom: 10px;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.78rem;
          font-weight: 700;
          color: #f0d8b3;
        }

        .successCard h1 {
          font-size: clamp(2rem, 5vw, 3.8rem);
          margin: 14px 0;
          color: #fff8f0;
        }

        .lead {
          color: #eadbcb;
          line-height: 1.8;
          max-width: 640px;
          margin: 0 auto 24px;
        }

        .infoBox {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 22px;
          padding: 22px;
          margin: 0 auto 26px;
          max-width: 620px;
          text-align: left;
        }

        .infoBox h3 {
          margin-top: 0;
          color: #fff7ee;
        }

        .infoBox p {
          color: #eadbcb;
          line-height: 1.8;
          margin: 0 0 14px;
        }

        .infoBox p:last-child {
          margin-bottom: 0;
        }

        .successActions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .primaryBtn,
        .secondaryBtn,
        .reviewBtn,
        .mapBtn {
          display: inline-block;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 700;
        }

        .primaryBtn {
          background: linear-gradient(135deg, #c79356, #ebce97);
          color: #1e120d;
        }

        .secondaryBtn {
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid #dcc7af;
          color: #3b261b;
        }

        .reviewBtn {
          background: #3a2a20;
          color: #fff4e8;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mapBtn {
          background: rgba(255, 255, 255, 0.12);
          color: #fff4e8;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        @media (max-width: 700px) {
          .successCard {
            padding: 34px 18px;
          }

          .infoBox {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}
