import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/checkout";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, customerEmail } = body;

    if (!items || !items.length) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    if (stripe) {
      const lineItems = items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: `MEHRUH - ${item.name} (${item.size})`,
          },
          unit_amount: Math.round(item.amount * 100),
        },
        quantity: item.quantity,
      }));

      const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        customer_email: customerEmail,
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/`,
      });

      return NextResponse.json({ url: session.url });
    }

    // In local demo mode without live Stripe key
    return NextResponse.json({
      url: null,
      message: "Order simulation ready. Stripe test key can be set in .env.local.",
    });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to initiate checkout" },
      { status: 500 }
    );
  }
}
