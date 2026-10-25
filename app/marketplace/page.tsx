import type { Metadata } from "next";
import DrawingCard from "@/components/DrawingCard";
import { drawings } from "@/lib/data";
import { Search, FileCheck2, ShieldCheck } from "lucide-react";
export const metadata: Metadata = { title: "Drawing Library" };
export default function MarketplacePage() {
  return <main className="container min-h-[70vh] py-16"><p className="eyebrow">The drawing library</p><h1 className="section-title mt-3 max-w-3xl">Structural drawing resources, organised for learning.</h1><p className="muted mt-4 max-w-2xl leading-7">A planned marketplace for approved drawing sets from verified contributors. Review scope, file formats, licensing, and intended use before purchasing.</p>
    <div className="mt-8 grid gap-3 md:grid-cols-3">{[{icon:FileCheck2,title:"Reviewed submissions",text:"Drawings must pass an admin review before publication."},{icon:ShieldCheck,title:"Clear usage rights",text:"Every listing needs explicit licence and usage terms."},{icon:Search,title:"Useful metadata",text:"Filter by drawing type, format, and intended learning use."}].map(item=><div key={item.title} className="card flex gap-3 p-4"><item.icon className="mt-1 shrink-0 text-amber"/><div><p className="font-bold">{item.title}</p><p className="mt-1 text-sm leading-5 text-slate-400">{item.text}</p></div></div>)}</div>
    <div className="mt-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><h2 className="text-2xl font-extrabold">Featured resources</h2><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">Demo catalogue · not for construction use</span></div>
    <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{drawings.map(drawing=><DrawingCard key={drawing.id} drawing={drawing}/>)}</div>
    <div className="mt-10 rounded-xl border border-amber/20 bg-amber/5 p-5"><p className="font-bold text-amber">Marketplace launch requirement</p><p className="mt-2 text-sm leading-6 text-slate-300">The sample listings are illustrative placeholders. Before sales begin, replace them with authorised original files, add licence terms, build secure downloads, define refund and takedown procedures, and implement the approved contributor revenue split.</p></div>
  </main>;
}
