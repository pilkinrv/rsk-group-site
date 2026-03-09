import Link from "next/link";
import Image from "next/image";
import { Shield, Clock, Factory, CheckCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Заказчику — РСК ГРУПП. Производство полного цикла",
  description:
    "Светодиодное освещение от производителя. Гарантия 5 лет, изготовление от 21 дня. Для застройщиков, муниципалитетов, объектов благоустройства.",
};

const advantages = [
  {
    icon: Shield,
    title: "Гарантия 5 лет",
    text: "Полная гарантия качества на всю продукцию собственного производства. Отдел сервиса обеспечивает поддержку на протяжении всего срока гарантии.",
  },
  {
    icon: Clock,
    title: "Изготовление от 21 дня",
    text: "Оперативные сроки для стандартных изделий. Индивидуальные заказы — по согласованию. Контролируем каждый этап производства.",
  },
  {
    icon: Factory,
    title: "Собственное производство",
    text: "Завод полного цикла в Казани: от проектирования до отгрузки. Не зависим от сторонних поставщиков — вся цепочка под нашим контролем.",
  },
];

const processSteps = [
  { step: "01", title: "Заявка", text: "Вы оставляете заявку или звоните. Наш менеджер выясняет задачу, объект и требования." },
  { step: "02", title: "Проектирование", text: "Конструкторы разрабатывают техническое решение под ваши условия. Расчёт освещённости, подбор оптики." },
  { step: "03", title: "Производство", text: "Изготовление на собственном заводе. Входной контроль материалов, ОТК на каждом этапе." },
  { step: "04", title: "Поставка", text: "Упаковка, логистика и доставка на объект. Сопроводительная документация в комплекте." },
];

const projects = [
  { name: "Экстрим парк «Урам»", category: "Парки и скверы" },
  { name: "ЖК «Весна»", category: "Жилые комплексы" },
  { name: "ЖК «Яркий»", category: "Жилые комплексы" },
];

const technologies = [
  "Светодиодные источники света высокой надёжности",
  "Оптические системы с КПД до 95%",
  "Интеллектуальные системы управления освещением",
  "Антивандальные и пылевлагозащищённые корпуса",
  "Совместимость с системами «умный город»",
  "Сертификация по ГОСТ и ТУ",
];

const HERO_IMG =
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920";

export default function ZakazchikuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={HERO_IMG}
            alt="Производство полного цикла — РСК ГРУПП"
            fill
            className="object-cover opacity-30"
            priority
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Для заказчика</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-zinc-900">
              Производство{" "}
              <span className="text-amber-600">полного цикла</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-8">
              От концепции до реализации — светодиодное освещение для городской
              инфраструктуры, жилых комплексов и общественных пространств.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakty"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base amber-btn"
              >
                <Phone size={16} />
                Получить консультацию
              </Link>
              <Link
                href="/proektirovshchikam/katalog"
                className="px-6 py-3 rounded-xl text-base outline-btn inline-block"
              >
                Каталог продукции
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12 text-zinc-900">
            Почему выбирают РСК ГРУПП
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div key={adv.title} className="light-card rounded-2xl p-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(217,119,6,0.08)" }}
                  >
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-zinc-900">
                    {adv.title}
                  </h3>
                  <p className="text-zinc-500">{adv.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Производственный процесс */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-12 text-zinc-900">
            Производственный процесс
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative light-card rounded-2xl p-6">
                <div className="text-4xl font-bold text-amber-600 mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-zinc-900">
                  {s.title}
                </h3>
                <p className="text-zinc-500 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl aspect-video light-card flex items-center justify-center">
            <div className="text-center text-zinc-500">
              <Factory size={64} className="mx-auto mb-3 text-zinc-400" />
              <p>Фото / видео производственного цеха</p>
            </div>
          </div>
        </div>
      </section>

      {/* Технологии */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-zinc-900">
                Технологии и возможности
              </h2>
              <p className="text-zinc-600 mb-8">
                Собственный конструкторский отдел разрабатывает решения под
                конкретные объекты. Используем передовые технологии в области
                светодиодного освещения.
              </p>
              <ul className="space-y-3">
                {technologies.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-zinc-600">
                    <CheckCircle
                      size={18}
                      className="text-amber-600 shrink-0 mt-0.5"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl aspect-square light-card flex items-center justify-center">
              <div className="text-center text-zinc-500">
                <p>Фото оборудования / завода</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-2xl font-bold text-zinc-900">
              Выполненные проекты
            </h2>
            <Link
              href="/portfolio"
              className="text-zinc-600 hover:text-amber-700 transition text-sm"
            >
              Смотреть все →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.name} className="light-card rounded-2xl overflow-hidden">
                <div className="aspect-video bg-zinc-100 flex items-center justify-center text-zinc-500 text-sm">
                  Фото проекта
                </div>
                <div className="p-5">
                  <p className="text-xs text-amber-700 mb-1 uppercase tracking-wider font-semibold">
                    {p.category}
                  </p>
                  <h3 className="font-semibold text-zinc-900">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative rounded-[24px] p-8 sm:p-[60px] overflow-hidden bg-[#18181b]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(217,119,6,0.12) 0%, transparent 60%)",
            }}
          />
          <div className="relative text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Обсудим ваш проект?
            </h2>
            <p className="text-zinc-400 mb-8">
              Позвоните нам или оставьте заявку — рассчитаем стоимость и сроки.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+79600796853"
                className="px-6 py-3 rounded-xl text-base font-semibold bg-amber-600 text-white hover:bg-amber-500 transition-colors"
              >
                +7 960 079-68-53
              </a>
              <Link
                href="/kontakty"
                className="px-6 py-3 rounded-xl text-base font-semibold border border-white/20 text-white hover:border-amber-500/60 hover:text-amber-400 transition-colors"
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
