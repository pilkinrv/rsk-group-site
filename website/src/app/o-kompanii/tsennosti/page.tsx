import { Clock, Award, TrendingUp, Handshake } from "lucide-react";

export const metadata = {
  title: "Ценности — РСК ГРУПП",
  description:
    "Ценности компании РСК ГРУПП: время, качество, развитие и партнёрство. Производим освещение с заботой о каждом клиенте.",
};

const values = [
  {
    icon: Clock,
    title: "Ценим время",
    text: "Мы ценим время наших клиентов, поэтому поставляем светильники, готовые к установке. Наша команда решит все вопросы: от светорасчёта до доставки.",
    accent: "Готовое к установке",
  },
  {
    icon: Award,
    title: "Ценим качество",
    text: "Наша продукция создана для долгих лет эксплуатации, поэтому мы используем только качественные комплектующие: горячеоцинкованную сталь, электрические компоненты мировых брендов.",
    accent: "Горячеоцинкованная сталь",
  },
  {
    icon: TrendingUp,
    title: "Ценим развитие",
    text: "Мы развиваемся для создания лучшего будущего: опережая вызовы завтрашнего дня, всегда ищем передовые идеи, знания и технологии, чтобы иметь решение сегодня.",
    accent: "Передовые технологии",
  },
  {
    icon: Handshake,
    title: "Ценим партнёрство",
    text: "Открытые партнёрские отношения с нашими клиентами, построенные на уважении и понимании стоящих перед нами вызовов — ценность нашей компании. Совместная работа обеспечивает общий долгосрочный рост.",
    accent: "Долгосрочный рост",
  },
];

export default function TsennostiPage() {
  return (
    <>
      <section className="mb-14">
        <div className="section-label mb-4">Ценности</div>
        <h1 className="text-4xl font-extrabold mb-4 text-zinc-900">
          Ценности
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl">
          Четыре принципа, которые определяют подход РСК ГРУПП к работе и
          формируют культуру компании.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 gap-6">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div key={v.title} className="light-card p-7">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-5">
                <Icon className="w-[22px] h-[22px] text-amber-600" />
              </div>
              <h2 className="font-bold text-lg mb-3 text-zinc-900">
                {v.title}
              </h2>
              <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-4">
                {v.text}
              </p>
              <span className="inline-block px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-semibold">
                {v.accent}
              </span>
            </div>
          );
        })}
      </section>
    </>
  );
}
