import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";
import { news } from "./data";

export const metadata = {
  title: "Новости — РСК ГРУПП",
  description:
    "Новости компании РСК ГРУПП: события, новинки продукции, участие в выставках и форумах.",
};

export default function NovostiPage() {
  return (
    <>
      <section className="mb-10">
        <div className="section-label mb-4">Новости</div>
        <h1 className="text-4xl font-extrabold mb-4 text-zinc-900">
          Новости
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl">
          События компании, новинки продукции, участие в форумах и выставках.
        </p>
      </section>

      <section className="space-y-4">
        {news.map((item) => (
          <Link
            key={item.slug}
            href={`/o-kompanii/novosti/${item.slug}`}
            className="block"
          >
            <article className="light-card overflow-hidden flex flex-col sm:flex-row group hover:border-amber-300 transition-colors cursor-pointer">
              <div className="relative w-full sm:w-48 md:w-56 h-40 sm:h-auto shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 224px"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-center gap-2 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-amber-600 shrink-0" />
                  <time className="text-sm font-semibold text-amber-700 tabular-nums whitespace-nowrap">
                    {item.date}
                  </time>
                </div>
                <h2 className="text-[0.95rem] font-medium text-zinc-800 leading-snug group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
              <ChevronRight
                size={18}
                className="hidden sm:block text-zinc-300 group-hover:text-amber-500 transition-colors shrink-0 self-center mr-5"
              />
            </article>
          </Link>
        ))}
      </section>
    </>
  );
}
