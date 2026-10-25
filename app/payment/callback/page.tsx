import Link from "next/link";
import { AlertTriangle } from "lucide-react";
export default function PaymentCallbackPage() {
  return <main className="container flex min-h-[65vh] items-center justify-center py-14"><div className="card max-w-xl p-8 text-center sm:p-10"><AlertTriangle className="mx-auto text-amber" size={38}/><h1 className="mt-5 text-3xl font-black">Payment status needs verification</h1><p className="muted mt-4 leading-7">This callback page intentionally does not grant access. The developer must verify the Paystack reference on the server, confirm the amount and item, update the order, and then show the verified result.</p><Link href="/dashboard" className="btn-primary mt-7">Go to dashboard</Link></div></main>;
}
