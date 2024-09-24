const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  try {
    const { tokenId, amount } = req.body;

    if (!tokenId || !amount) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method: tokenId,
      confirm: true,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      status: paymentIntent.status,
    });
  } catch (error) {
    console.error("Stripe payment error:", error);
    res.status(500).json({
      error: error.message || "An error occurred during payment processing",
    });
  }
});

module.exports = router;



