import Link from "next/link";
import { DraftingCompass, ArrowUpRight } from "lucide-react";
export default function Footer() {
  return <footer className="border-t border-white/10 bg-[#050f1d]">
    <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><Link href="/" className="mb-4 inline-flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber text-ink"><DraftingCompass size={22}/></span><span className="text-lg font-black tracking-[.08em]">DEX STRUCTURE</span></Link><p className="max-w-sm text-sm leading-7 text-slate-400">Where Africa&apos;s engineers learn to build. Learn the principles, deliver the drawings, and develop the confidence to design responsibly.</p></div>
      <div><p className="mb-4 text-xs font-extrabold uppercase tracking-[.16em] text-slate-300">Explore</p><div className="flex flex-col gap-3 text-sm text-slate-400"><Link href="/courses" className="hover:text-white">Courses</Link><Link href="/marketplace" className="hover:text-white">Drawing Library</Link><Link href="/dashboard" className="hover:text-white">Learner Dashboard</Link></div></div>
      <div><p className="mb-4 text-xs font-extrabold uppercase tracking-[.16em] text-slate-300">Build with us</p><div className="flex flex-col gap-3 text-sm text-slate-400"><Link href="/instructor" className="hover:text-white">Become a Contributor <ArrowUpRight className="inline" size={13}/></Link><Link href="/certificates/verify" className="hover:text-white">Verify a Certificate</Link><Link href="/admin" className="hover:text-white">Platform Admin</Link></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container flex flex-col justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row"><span>© {new Date().getFullYear()} DEX STRUCTURE. All rights reserved.</span><span>Educational content does not replace competent professional review.</span></div></div>
  </footer>;
}
