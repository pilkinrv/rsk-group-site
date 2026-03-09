import { BookOpen, Calendar } from "lucide-react";

export const metadata = {
  title: "Полезное — РСК ГРУПП",
  description:
    "Статьи и рекомендации по выбору и эксплуатации светодиодного освещения от специалистов РСК ГРУПП.",
};

const articles = [
  {
    date: "29.08.2024",
    title: "Как выбрать правильную степень защиты для уличных светильников?",
    desc: "Разбираем классы IP и помогаем подобрать оптимальную степень защиты для разных условий эксплуатации.",
  },
  {
    date: "29.08.2024",
    title: "Торшерные парковые светильники: где применяются и как выбрать",
    desc: "Обзор типов парковых торшерных светильников, их особенности и критерии выбора для разных задач.",
  },
  {
    date: "29.08.2024",
    title: "На каком расстоянии должны находиться уличные светильники?",
    desc: "Нормативы и рекомендации по расстоянию между опорами и светильниками для разных типов дорог и территорий.",
  },
  {
    date: "29.08.2024",
    title: "От чего зависит выбор высоты опоры?",
    desc: "Факторы, влияющие на выбор высоты осветительной опоры: тип территории, мощность светильника, нормы освещённости.",
  },
  {
    date: "29.08.2024",
    title: "Садово-парковое освещение: варианты и выбор светильников",
    desc: "Типы светильников для садов и парков, принципы проектирования и рекомендации по созданию комфортной световой среды.",
  },
  {
    date: "12.07.2024",
    title: "Уличное освещение во дворах домов",
    desc: "Требования к дворовому освещению, типы светильников и практические советы по обустройству придомовых территорий.",
  },
];

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
          <article
            key={article.title}
            className="light-card p-6 flex flex-col"
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
            <h2 className="font-semibold text-[0.95rem] mb-2 text-zinc-900 leading-snug">
              {article.title}
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed flex-1">
              {article.desc}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
