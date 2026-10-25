import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) return NextResponse.json({ error: "Webhook not configured." }, { status: 503 });

  const rawBody = await request.text();
  const signature = request.headers.get("x-paystack-signature") || "";
  const expected = createHmac("sha512", secret).update(rawBody).digest("hex");

  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (signatureBuffer.length !== expectedBuffer.length || !timingSafeEqual(signatureBuffer, expectedBuffer)) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  let event: { event?: string; data?: { reference?: string; status?: string; amount?: number; currency?: string; metadata?: unknown } };
  try { event = JSON.parse(rawBody); } catch { return NextResponse.json({ error: "Invalid event payload." }, { status: 400 }); }

  if (event.event === "charge.success") {
    // TODO: Verify the transaction against Paystack's verify endpoint, then update the payment/order
    // in Supabase in an idempotent transaction. Grant course access only after server verification.
    // Do not trust client redirects or metadata alone. Store event/reference to prevent double processing.
    console.info("Paystack charge.success received", {
      reference: event.data?.reference,
      amount: event.data?.amount,
      currency: event.data?.currency
    });
  }

  return NextResponse.json({ received: true });
}
