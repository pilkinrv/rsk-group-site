import Link from "next/link";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { articles } from "./data";

export const metadata = {
  title: "Полезное — РСК ГРУПП",
  description:
    "Статьи и рекомендации по выбору и эксплуатации светодиодного освещения от специалистов РСК ГРУПП.",
};

export default function PoleznoePage() {
  return (
    <>
      <section className="mb-10">
        <div className="section-label mb-4">Полезное</div>
        <h1 className="text-4xl font-extrabold mb-4 text-zinc-900">
          Полезное
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl">
          Статьи и рекомендации по выбору и эксплуатации освещения от
          специалистов РСК ГРУПП.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 gap-5">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/o-kompanii/poleznoe/${article.slug}`}
            className="light-card p-6 flex flex-col group hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
              <div className="flex items-center gap-1.5">
                <Calendar size={13} className="text-zinc-400" />
                <time className="text-xs text-zinc-400 tabular-nums">
                  {article.date}
                </time>
              </div>
            </div>
            <h2 className="font-semibold text-[0.95rem] mb-2 text-zinc-900 leading-snug group-hover:text-amber-700 transition-colors">
              {article.title}
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed flex-1">
              {article.desc}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 group-hover:gap-2 transition-all">
              Читать статью
              <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
