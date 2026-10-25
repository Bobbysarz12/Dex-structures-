"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { SearchCheck, ShieldCheck } from "lucide-react";
export default function VerifyCertificatePage() {
  const [code, setCode] = useState("");
  const [searched, setSearched] = useState(false);
  return <main className="container flex min-h-[70vh] items-center justify-center py-16"><div className="card w-full max-w-2xl p-7 sm:p-10"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber text-ink"><ShieldCheck size={25}/></div><p className="eyebrow mt-6">Credential verification</p><h1 className="mt-3 text-3xl font-black sm:text-4xl">Verify a DEX STRUCTURE certificate.</h1><p className="muted mt-4 leading-7">Enter the unique certificate code to check its status. This interface is a placeholder until the certificate database and verification endpoint are implemented.</p><form className="mt-7 flex flex-col gap-3 sm:flex-row" onSubmit={e=>{e.preventDefault();setSearched(true);}}><input value={code} onChange={e=>setCode(e.target.value)} required className="min-w-0 flex-1 rounded-lg border border-white/15 bg-ink px-4 py-3 text-sm" placeholder="e.g. DEX-2026-AB12CD"/><button className="btn-primary" type="submit"><SearchCheck size={17}/> Verify code</button></form>{searched&&<div role="status" className="mt-5 rounded-lg border border-amber/20 bg-amber/5 p-4 text-sm leading-6 text-amber">Demo only: no live verification was performed for “{code}”. Connect this form to a server endpoint that checks certificate status in the database.</div>}<p className="mt-6 text-xs leading-5 text-slate-500">Production verification should display only the minimum public details required, and must support revoked or superseded credentials.</p></div></main>;
}
