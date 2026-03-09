import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  Lightbulb,
  ShieldCheck,
  Factory,
  Wrench,
  Users,
  Lamp,
  MapPin,
  Leaf,
} from "lucide-react";

export const metadata = {
  title: "Экскурсия на производство — РСК ГРУПП",
  description:
    "Бесплатная экскурсия по заводу РСК ГРУПП в Казани. Увидьте производство светодиодного освещения полного цикла, познакомьтесь с командой.",
};

const highlights = [
  {
    icon: Eye,
    title: "Технологические процессы",
    text: "Каждый этап производства светодиодных, уличных, торшерных и консольных светильников — от разработки дизайна до сборки готового изделия.",
  },
  {
    icon: Lightbulb,
    title: "Инновации и дизайн",
    text: "Последние тренды в светотехнике, новейшие материалы и дизайн осветительных приборов. Сочетание функциональности и эстетики.",
  },
  {
    icon: ShieldCheck,
    title: "Качество продукции",
    text: "Как мы следим за качеством каждого этапа — от выбора материалов до контроля готовой продукции.",
  },
];

const reasons = [
  {
    icon: Factory,
    title: "Увидеть вживую качество производства светильников",
  },
  {
    icon: Wrench,
    title: "Посмотреть, как и из каких материалов собираются светильники",
  },
  {
    icon: Users,
    title: "Пообщаться лично с инженерами, которые придумывают новые модели",
  },
  {
    icon: Lamp,
    title: "Посетить шоурум светильников и посмотреть, как они работают",
  },
];

const program = [
  "Встреча гостей. Инструктаж по технике безопасности",
  "Знакомство с деятельностью компании",
  "Экскурсия по основным цехам производства",
  "Показ имеющихся образцов",
];

const ecoStandards = [
  "Минимальные промышленные отходы",
  "Экологически безопасная продукция",
  "Современное оборудование",
  "Система экологического менеджмента",
  "Нет выбросов опасных загрязняющих веществ",
  "Мероприятия по энергосбережению",
];

const HERO_IMG =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80";

export default function EkskursiyaPage() {
  return (
    <>
      {/* Hero */}
      <section className="mb-14">
        <div className="section-label mb-4">Экскурсия</div>
        <h1 className="text-4xl font-extrabold mb-4 text-zinc-900">
          Экскурсия на завод РСК ГРУПП
        </h1>
        <p className="text-zinc-500 text-lg mb-8 max-w-2xl">
          Приглашаем на экскурсию по заводу полного цикла. Узнайте о нашем
          производстве осветительного оборудования.
        </p>

        <div className="relative rounded-2xl overflow-hidden aspect-video mb-8 max-w-3xl">
          <Image
            src={HERO_IMG}
            alt="Экскурсия по заводу РСК ГРУПП в Казани"
            fill
            className="object-cover"
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,0.8) 0%, transparent 50%)",
            }}
          />
          <div className="absolute bottom-6 left-6">
            <Link
              href="/kontakty"
              className="px-7 py-3.5 rounded-xl text-base font-semibold amber-btn inline-block"
            >
              Записаться на экскурсию
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll see */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-8 text-zinc-900">Что увидите</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.title} className="light-card p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-[0.95rem] mb-2 text-zinc-900">
                  {h.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {h.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4 reasons */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-8 text-zinc-900">
          4 причины посетить производство
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="light-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-zinc-700 text-[0.95rem] font-medium leading-snug pt-2">
                  {r.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Program */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-8 text-zinc-900">
          Программа экскурсии
        </h2>
        <div className="space-y-4 max-w-xl">
          {program.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                <span className="text-amber-700 text-xs font-bold">
                  {i + 1}
                </span>
              </div>
              <p className="text-zinc-700 text-[0.95rem] pt-1">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eco standards */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 text-zinc-900">
          Экологические стандарты
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ecoStandards.map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200/60"
            >
              <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-sm text-emerald-800">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Practical info */}
      <section className="mb-14 light-card p-6 max-w-lg">
        <h2 className="font-semibold text-lg mb-4 text-zinc-900">
          Практическая информация
        </h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="text-zinc-600">
              Казань, Теплично-Комбинатская 5В
            </span>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="text-zinc-600">
              Бесплатно, по предварительной записи
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative rounded-[20px] p-8 sm:p-12 overflow-hidden bg-zinc-900">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(217,119,6,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Запишитесь на экскурсию
          </h2>
          <p className="text-zinc-400 mb-6 max-w-lg">
            Увидьте наше производство своими глазами. Оставьте заявку — мы
            свяжемся и подберём удобную дату.
          </p>
          <Link
            href="/kontakty"
            className="inline-flex px-7 py-3.5 rounded-xl text-base font-semibold bg-amber-600 text-white hover:bg-amber-500 transition-colors"
          >
            Записаться на экскурсию
          </Link>
        </div>
      </section>
    </>
  );
}
