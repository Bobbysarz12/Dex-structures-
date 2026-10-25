"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, DraftingCompass } from "lucide-react";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/marketplace", label: "Drawing Library" },
  { href: "/dashboard", label: "My Learning" },
  { href: "/instructor", label: "Teach" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
    <div className="container flex h-[76px] items-center justify-between gap-5">
      <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber text-ink"><DraftingCompass size={22}/></span>
        <span><span className="block text-lg font-black tracking-[.08em]">DEX STRUCTURE</span><span className="hidden text-[9px] font-bold tracking-[.17em] text-steel sm:block">ENGINEERING, BUILT ON PRINCIPLES</span></span>
      </Link>
      <nav className="hidden items-center gap-7 md:flex">
        {links.map(link => <Link key={link.href} className="text-sm font-semibold text-slate-300 transition hover:text-white" href={link.href}>{link.label}</Link>)}
      </nav>
      <div className="hidden items-center gap-3 md:flex">
        <Link href="/login" className="text-sm font-bold text-slate-200 hover:text-white">Log in</Link>
        <Link href="/signup" className="btn-primary !px-4 !py-2.5 text-sm">Start learning <span>↗</span></Link>
      </div>
      <button aria-label="Toggle navigation" className="rounded-lg border border-white/15 p-2 md:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div className="border-t border-white/10 px-5 pb-5 pt-3 md:hidden"><nav className="container flex flex-col gap-1">
      {links.map(link => <Link key={link.href} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5" href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <div className="mt-3 grid grid-cols-2 gap-3"><Link className="btn-secondary" href="/login" onClick={() => setOpen(false)}>Log in</Link><Link className="btn-primary" href="/signup" onClick={() => setOpen(false)}>Join free</Link></div>
    </nav></div>}
  </header>;
}
