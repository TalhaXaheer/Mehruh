import Stripe from "stripe";

export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-09-30.endive" as any,
    })
  : null;

export interface CreateCheckoutSessionParams {
  items: Array<{
    name: string;
    amount: number;
    quantity: number;
    size: string;
  }>;
  customerEmail?: string;
  orderId: string;
}

export async function createStripeCheckoutSession(params: CreateCheckoutSessionParams) {
  if (!stripe) {
    throw new Error("Stripe secret key not configured");
  }

  const lineItems = params.items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: `${item.name} (${item.size})`,
      },
      unit_amount: item.amount * 100, // cents
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    customer_email: params.customerEmail,
    metadata: {
      orderId: params.orderId,
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/cart`,
  });

  return session;
}
