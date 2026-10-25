import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";
import { GraduationCap } from "lucide-react";
export const metadata: Metadata = { title: "Courses" };
export default function CoursesPage() {
  return <main className="container min-h-[70vh] py-16"><p className="eyebrow">The DEX STRUCTURE academy</p><h1 className="section-title mt-3 max-w-3xl">Choose the skill you want to build next.</h1><p className="muted mt-4 max-w-2xl leading-7">Focused classes designed around structural principles, drawing delivery, and engineering tools. Pricing shown is proposed demo pricing and must be confirmed before launch.</p>
    <div className="mt-8 flex items-center gap-3 rounded-xl border border-amber/20 bg-amber/5 p-4 text-sm text-slate-300"><GraduationCap className="shrink-0 text-amber"/><span>Each listed class is shown at <strong className="text-white">₦2,000 one-time</strong>. No subscription is represented in this demo.</span></div>
    <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{courses.map(course=><CourseCard key={course.slug} course={course}/>)}</div>
  </main>;
}
