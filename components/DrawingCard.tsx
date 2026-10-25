import { FileText, LockKeyhole, ArrowUpRight } from "lucide-react";
import { Drawing, formatNaira } from "@/lib/data";
export default function DrawingCard({ drawing }: { drawing: Drawing }) {
  return <article className="card overflow-hidden transition hover:border-amber/40">
    <div className="grid-bg relative flex h-44 items-center justify-center overflow-hidden bg-[#0a1b2e]">
      <div className="absolute inset-5 border border-sky-300/25" /><div className="absolute inset-8 border border-sky-300/15" />
      <svg viewBox="0 0 240 125" className="relative h-28 w-56 text-sky-200/80" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M28 20H160V100H28Z M45 35H88V60H45Z M100 35H143V60H100Z M45 72H88V87H45Z M100 72H143V87H100Z M160 20L190 8V88L160 100 M28 20L55 8H190 M55 8V88 M190 8V88" /><path d="M20 110H198 M20 106V114 M198 106V114" stroke="#F5A623" /></svg>
      <span className="absolute left-5 top-4 rounded bg-ink/80 px-2 py-1 text-[9px] font-bold tracking-widest text-amber">{drawing.id}</span>
      <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded bg-ink/85 px-2 py-1 text-[10px] text-slate-300"><FileText size={12}/>{drawing.format}</span>
    </div>
    <div className="p-5"><span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-amber">{drawing.category}</span><h3 className="mt-2 text-lg font-extrabold leading-snug">{drawing.title}</h3><p className="mt-2 min-h-[66px] text-sm leading-6 text-slate-400">{drawing.description}</p><div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><span className="font-extrabold">{formatNaira(drawing.price)}</span><span className="flex items-center gap-1.5 text-xs text-slate-400"><LockKeyhole size={13}/> Demo listing</span></div><p className="mt-3 text-xs leading-5 text-slate-500">Illustrative placeholder only. Not for construction use.</p></div>
  </article>;
}
