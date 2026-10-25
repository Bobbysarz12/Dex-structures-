"use client";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DraftingCompass, Mail, LockKeyhole, UserRound } from "lucide-react";
export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [notice, setNotice] = useState("");
  const params = useSearchParams();
  const isSignup = mode === "signup";
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice("Demo form only. Connect Supabase Auth before using real accounts.");
  }
  return <main className="container flex min-h-[72vh] items-center justify-center py-14"><div className="card w-full max-w-md p-7 sm:p-9"><div className="mb-7 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber text-ink"><DraftingCompass/></span><div><p className="font-black tracking-wider">DEX STRUCTURE</p><p className="text-xs text-slate-500">Your engineering journey starts here</p></div></div><h1 className="text-3xl font-black">{isSignup ? "Create your account" : "Welcome back"}</h1><p className="mt-2 text-sm leading-6 text-slate-400">{isSignup ? "Join the learning community and track your progress." : "Log in to continue your learning journey."}</p>
    <form className="mt-7 space-y-4" onSubmit={submit}>{isSignup && <label className="block"><span className="mb-2 block text-sm font-bold">Full name</span><span className="flex items-center gap-3 rounded-lg border border-white/15 bg-ink px-3"><UserRound size={17} className="text-slate-500"/><input required className="w-full bg-transparent py-3 text-sm" placeholder="Your full name"/></span></label>}
      <label className="block"><span className="mb-2 block text-sm font-bold">Email address</span><span className="flex items-center gap-3 rounded-lg border border-white/15 bg-ink px-3"><Mail size={17} className="text-slate-500"/><input required type="email" className="w-full bg-transparent py-3 text-sm" placeholder="you@example.com"/></span></label>
      <label className="block"><span className="mb-2 block text-sm font-bold">Password</span><span className="flex items-center gap-3 rounded-lg border border-white/15 bg-ink px-3"><LockKeyhole size={17} className="text-slate-500"/><input required type="password" minLength={8} className="w-full bg-transparent py-3 text-sm" placeholder="At least 8 characters"/></span></label>
      <button className="btn-primary w-full" type="submit">{isSignup ? "Create account" : "Log in"}</button>
    </form>
    {notice && <p role="status" className="mt-4 rounded-lg border border-amber/20 bg-amber/5 p-3 text-sm text-amber">{notice}</p>}
    <p className="mt-6 text-center text-sm text-slate-400">{isSignup ? "Already have an account?" : "New to DEX STRUCTURE?"} <Link className="font-bold text-amber" href={isSignup ? "/login" : `/signup${params.get("course") ? `?course=${params.get("course")}` : ""}`}>{isSignup ? "Log in" : "Create account"}</Link></p>
    <p className="mt-5 text-xs leading-5 text-slate-500">Account creation and login are not connected yet. A developer must implement secure server-side authentication and session handling.</p>
  </div></main>;
}
