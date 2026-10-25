import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import { Course, formatNaira } from "@/lib/data";
export default function CourseCard({ course }: { course: Course }) {
  return <article className="card group overflow-hidden transition hover:-translate-y-1 hover:border-amber/40">
    <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${course.accent} grid-bg p-5`}>
      <div className="absolute right-5 top-4 h-20 w-20 rounded-full border border-white/15" /><div className="absolute right-9 top-8 h-12 w-12 rounded-full border border-amber/40" />
      <span className="relative rounded-full border border-white/15 bg-ink/50 px-3 py-1 text-[10px] font-black tracking-[.16em]">{course.level}</span>
      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between"><span className="text-xs font-bold text-slate-300">{course.tag}</span><BookOpen className="text-amber" size={22}/></div>
    </div>
    <div className="p-5"><h3 className="text-lg font-extrabold leading-snug">{course.title}</h3><p className="mt-2 min-h-[66px] text-sm leading-6 text-slate-400">{course.summary}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400"><span className="flex items-center gap-1.5"><BookOpen size={14}/>{course.lessons} lessons</span><span className="flex items-center gap-1.5"><Clock3 size={14}/>{course.duration}</span></div>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><span className="font-extrabold text-amber">{formatNaira(course.price)} <small className="font-normal text-slate-500">one-time</small></span><Link href={`/courses/${course.slug}`} className="flex items-center gap-1 text-sm font-bold hover:text-amber">Explore <ArrowUpRight size={15}/></Link></div>
    </div>
  </article>;
}
