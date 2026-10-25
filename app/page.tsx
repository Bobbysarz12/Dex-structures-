import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, DraftingCompass, Layers3, ShieldCheck, Workflow, Play, Ruler, ScanLine } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import DrawingCard from "@/components/DrawingCard";
import { courses, drawings } from "@/lib/data";

export default function HomePage() {
  return <main>
    <section className="blueprint relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="container relative grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
        <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-xs font-bold text-amber"><span className="h-2 w-2 rounded-full bg-amber"/> Practical engineering education, built for Africa</div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-[4.4rem]">Know the <span className="text-amber">principles.</span><br/>Deliver the <span className="text-sky-300">drawings.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Build real structural engineering confidence—from first principles to professional workflows, design software, and clear deliverable drawings.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/courses" className="btn-primary">Explore the learning path <ArrowRight size={17}/></Link><Link href="/marketplace" className="btn-secondary">Browse drawing library</Link></div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400"><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber"/> Learn at your pace</span><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber"/> One-time class purchases</span><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber"/> Practical project workflow</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-7 rounded-full bg-sky-500/10 blur-3xl"/>
          <div className="card relative overflow-hidden rounded-2xl border-sky-200/20 bg-[#0b1d32]/80 p-4 shadow-glow sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><div><p className="text-[10px] font-extrabold tracking-[.18em] text-amber">STRUCTURAL CONCEPT / S-01</p><p className="mt-1 text-sm font-bold">Reinforced concrete framing</p></div><span className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-slate-400">SCHEMATIC</span></div>
            <div className="grid-bg relative mt-4 overflow-hidden rounded-xl border border-sky-300/10 bg-[#08182a] p-3">
              <svg viewBox="0 0 520 390" className="w-full" fill="none">
                <g stroke="#5aa7d7" strokeWidth="1.5" opacity=".85"><path d="M55 85L420 85L465 50L100 50Z"/><path d="M55 85V290L100 255V50"/><path d="M420 85V290L465 255V50"/><path d="M55 290L420 290L465 255"/><path d="M55 85L420 85L420 290"/><path d="M100 50L465 50"/><path d="M55 155L420 155L465 120"/><path d="M55 220L420 220L465 185"/><path d="M175 85V290L220 255V50"/><path d="M295 85V290L340 255V50"/><path d="M55 155L100 120 M175 155L220 120 M295 155L340 120 M420 155L465 120"/><path d="M55 220L100 185 M175 220L220 185 M295 220L340 185 M420 220L465 185"/></g>
                <g stroke="#F5A623" strokeWidth="2" opacity=".9"><path d="M55 85L55 290 M175 85L175 290 M295 85L295 290 M420 85L420 290"/><path d="M55 155L420 155 M55 220L420 220"/></g>
                <g stroke="#c5e5f7" strokeWidth="1" opacity=".65"><path d="M55 320H420 M55 313V327 M420 313V327"/><path d="M25 85V290 M18 85H32 M18 290H32"/></g>
                <g fill="#c5e5f7" fontSize="11" fontFamily="monospace"><text x="195" y="340">GRID / BAY DIMENSIONS</text><text x="10" y="185" transform="rotate(-90 10 185)">LEVELS</text><text x="350" y="35" fill="#F5A623">FRAME MODEL</text></g>
                <g fill="#F5A623"><circle cx="55" cy="85" r="4"/><circle cx="175" cy="85" r="4"/><circle cx="295" cy="85" r="4"/><circle cx="420" cy="85" r="4"/><circle cx="55" cy="220" r="4"/><circle cx="420" cy="220" r="4"/></g>
              </svg>
              <div className="absolute bottom-3 left-3 rounded-lg border border-sky-300/20 bg-[#0b1e35]/90 px-3 py-2"><p className="text-[9px] tracking-widest text-slate-400">DESIGN PROCESS</p><p className="mt-1 text-xs font-bold text-sky-200">Model → Check → Detail</p></div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4"><div className="rounded-lg bg-white/[.035] p-3"><p className="text-[10px] text-slate-500">LEARN</p><p className="mt-1 text-sm font-bold">Principles</p></div><div className="rounded-lg bg-white/[.035] p-3"><p className="text-[10px] text-slate-500">PRACTISE</p><p className="mt-1 text-sm font-bold">Workflows</p></div><div className="rounded-lg bg-white/[.035] p-3"><p className="text-[10px] text-slate-500">DELIVER</p><p className="mt-1 text-sm font-bold">Drawings</p></div></div>
          </div>
          <div className="absolute -right-2 top-16 hidden rounded-xl border border-amber/20 bg-[#102945] p-3 shadow-xl sm:block"><Ruler size={19} className="text-amber"/><p className="mt-2 text-xs font-bold">Design with intent</p><p className="text-[10px] text-slate-400">Not button-clicking alone</p></div>
        </div>
      </div>
    </section>

    <section className="border-y border-white/10 bg-[#09182a]"><div className="container grid gap-6 py-6 sm:grid-cols-3"><div className="flex items-center gap-3"><DraftingCompass className="text-amber" size={24}/><div><p className="font-extrabold">Understand the why</p><p className="text-xs text-slate-400">Principles before software</p></div></div><div className="flex items-center gap-3"><Workflow className="text-amber" size={24}/><div><p className="font-extrabold">Follow a real workflow</p><p className="text-xs text-slate-400">Calculations to deliverables</p></div></div><div className="flex items-center gap-3"><ShieldCheck className="text-amber" size={24}/><div><p className="font-extrabold">Check your work</p><p className="text-xs text-slate-400">Review output responsibly</p></div></div></div></section>

    <section className="container py-20"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">The learning path</p><h2 className="section-title mt-3 max-w-2xl">From learning the basics to delivering the work.</h2><p className="muted mt-4 max-w-2xl leading-7">A structured path for students, graduates, and early-career engineers who want to understand the work—not just operate the software.</p></div><Link href="/courses" className="btn-secondary self-start md:self-auto">View all courses <ArrowUpRight size={16}/></Link></div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{courses.slice(0,3).map(course => <CourseCard key={course.slug} course={course}/>)}</div>
      <div className="mt-8 grid gap-4 md:grid-cols-4">{[{n:"00",t:"Start here",d:"Get oriented and learn how the platform works."},{n:"01",t:"Design",d:"Build a first-principles design foundation."},{n:"02",t:"Deliver",d:"Turn calculations into coordinated drawings."},{n:"03",t:"Command the tools",d:"Use software critically and efficiently."}].map(item=><div key={item.n} className="card p-5"><p className="text-xs font-black tracking-widest text-amber">LEVEL {item.n}</p><h3 className="mt-3 font-extrabold">{item.t}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.d}</p></div>)}</div>
    </section>

    <section className="border-y border-white/10 bg-[#09182a]"><div className="container grid items-center gap-10 py-20 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow">The drawing library</p><h2 className="section-title mt-3">Learn from clear, organised drawing sets.</h2><p className="muted mt-5 leading-7">Explore a future library of approved structural drawing resources. Contributors can submit their own work for review, while learners can study drawing structure, notation, and presentation.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/marketplace" className="btn-primary">Explore the library <ArrowRight size={16}/></Link><Link href="/instructor" className="btn-secondary">Become a contributor</Link></div><p className="mt-4 text-xs leading-5 text-slate-500">Current cards are sample placeholders. The production marketplace must include licensing terms and professional review.</p></div><div className="grid gap-4 sm:grid-cols-2">{drawings.slice(0,2).map(drawing=><DrawingCard key={drawing.id} drawing={drawing}/>)}</div></div></section>

    <section className="container py-20"><div className="card relative overflow-hidden p-8 sm:p-12"><div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber/10 blur-3xl"/><div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]"><div><p className="eyebrow">Built for practical progress</p><h2 className="section-title mt-3 max-w-2xl">Make every lesson move you closer to the work.</h2><p className="muted mt-4 max-w-2xl leading-7">Start with a free introduction. Choose a focused class when you are ready. Pay once per class, learn at your pace, and build your engineering judgement step by step.</p></div><Link href="/courses" className="btn-primary">Find your first class <ArrowRight size={16}/></Link></div></div></section>
  </main>;
}
