// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51KcH7pAXiO93TvpGo64hNMmFkOv7sqBnSQ0U1RNy87ZEaIWyr6oMXcKfzjoDbguzvUzHy4haKnRkuUv8lRwuDT5g00BL24NuF9"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const pi = await stripe.paymentIntents.create({
        amount: req.body.amount * 100,
        currency: "usd",
        payment_method_types: ["card"],
      });
      res.status(201).json({ message: pi.client_secret });
    } catch (err) {
      console.log("err", err);
    }
  }
}
