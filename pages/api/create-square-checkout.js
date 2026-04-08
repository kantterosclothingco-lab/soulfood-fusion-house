export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { cart } = req.body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const total = cart.reduce((sum, item) => {
      const price = Number(String(item.price).replace(/[^0-9.]/g, ""));
      const quantity = Number(item.quantity || 1);
      return sum + price * quantity;
    }, 0);

    const amount = Math.round(total * 100);

    const squareRes = await fetch(
      "https://connect.squareup.com/v2/online-checkout/payment-links",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Square-Version": "2024-01-18",
          Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          idempotency_key: crypto.randomUUID(),
          quick_pay: {
            name: "Soulfood Fusion House Order",
            price_money: {
              amount,
              currency: "AUD",
            },
            location_id: process.env.SQUARE_LOCATION_ID,
          },
          checkout_options: {
            redirect_url: `${req.headers.origin}/success`,
          },
        }),
      }
    );

    const data = await squareRes.json();

    if (!squareRes.ok) {
      console.error("Square live error:", JSON.stringify(data, null, 2));
      return res.status(squareRes.status).json({
        error: data?.errors?.[0]?.detail || "Square request failed",
        full: data,
      });
    }

    return res.status(200).json({
      url: data.payment_link.url,
    });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({
      error: error.message || "Checkout error",
    });
  }
}
