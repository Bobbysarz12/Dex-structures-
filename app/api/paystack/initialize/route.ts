import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ error: "Payments are not configured. Set PAYSTACK_SECRET_KEY on the server." }, { status: 503 });
  }

  let body: { email?: string; amountNaira?: number; reference?: string; metadata?: Record<string, unknown> };
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 }); }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const amountNaira = Number(body.amountNaira);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid customer email is required." }, { status: 400 });
  }
  if (!Number.isFinite(amountNaira) || amountNaira < 100 || amountNaira > 10000000) {
    return NextResponse.json({ error: "Invalid payment amount." }, { status: 400 });
  }

  // IMPORTANT: Before production, derive the amount and product/course ID from trusted server-side records.
  // Never allow the browser to set arbitrary prices or grant course access after redirect alone.
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  const reference = body.reference && /^[a-zA-Z0-9_-]{8,100}$/.test(body.reference)
    ? body.reference
    : `dex_${crypto.randomUUID().replace(/-/g, "")}`;

  const response = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      amount: Math.round(amountNaira * 100),
      reference,
      callback_url: `${siteUrl}/payment/callback`,
      metadata: { ...body.metadata, platform: "DEX STRUCTURE" }
    }),
    cache: "no-store"
  });

  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.status || !result?.data?.authorization_url) {
    return NextResponse.json({ error: "Unable to initialize payment. Check server logs and Paystack settings." }, { status: 502 });
  }
  return NextResponse.json({ authorizationUrl: result.data.authorization_url, reference: result.data.reference });
}
