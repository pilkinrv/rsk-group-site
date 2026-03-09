import Link from "next/link";
import {
  Sun,
  Lightbulb,
  TreePine,
  Sparkles,
  FileCheck,
  Target,
  Crosshair,
} from "lucide-react";

export const metadata = {
  title: "О нас — РСК ГРУПП",
  description:
    "ООО РСК ГРУПП — российский производитель светодиодного освещения. Собственное производство, профессиональные конструкторы и проектанты. Казань, с 2016 года.",
};

const stats = [
  { value: "2016", label: "год основания", sub: "компании" },
  { value: "4 000", label: "м² производства", sub: "площадь завода" },
  { value: "1 000+", label: "реализованных объектов", sub: "парки, ЖК, скверы" },
  { value: "1 000+", label: "изделий/месяц", sub: "производительность" },
  { value: "12+", label: "серий продуктов", sub: "в каталоге" },
];

const directions = [
  {
    icon: Sun,
    title: "Правильный уличный свет",
    desc: "Парковые, консольные и магистральные светильники для городской инфраструктуры",
  },
  {
    icon: Lightbulb,
    title: "Правильный свет внутри",
    desc: "Промышленные, офисные и встраиваемые светильники для любых помещений",
  },
  {
    icon: TreePine,
    title: "Ландшафтное освещение",
    desc: "Грунтовые, прожекторные и акцентные решения для парков и садов",
  },
  {
    icon: Sparkles,
    title: "Креативные решения",
    desc: "Дизайнерские светильники и световые инсталляции по индивидуальному проекту",
  },
];

const certificates = [
  "Сертификат соответствия",
  "Декларация о соответствии",
  "Экспертное заключение",
  "Акт экспертизы",
  "Заключение Моссвет",
];

const applicationAreas = [
  "Парки, лесопарки, сады",
  "Офисы",
  "Улицы и магистрали",
  "Площади, скверы, набережные",
  "Жилые комплексы",
  "Автомойки",
  "Дворы и придомовые территории",
  "Спортивные сооружения",
  "Автопарковки",
  "Места общественного пользования",
  "Торговые и развлекательные заведения",
  "Сельское хозяйство",
  "Школьные и детские учреждения",
  "Заводы и предприятия",
  "Медицинские учреждения",
  "Заведения общепита",
  "Склады и ангары",
  "Ж/д вокзалы",
];

const requisites = [
  ["Полное наименование", "ООО «РСК ГРУПП»"],
  ["ИНН", "1657223686"],
  ["КПП", "168301001"],
  ["ОГРН", "1161690093608"],
  ["Адрес", "420036, г. Казань, Теплично-Комбинатская ул., д. 5В"],
  ["Телефон", "+7 960 079-68-53"],
  ["Email", "mail@rsc-groupp.ru"],
  ["Режим работы", "Пн–Пт 8:00–17:00"],
];

export default function ONasPage() {
  return (
    <>
      {/* Hero */}
      <section className="mb-16">
        <div className="section-label mb-4">О нас</div>
        <h1 className="text-4xl font-extrabold mb-6 text-zinc-900">О нас</h1>
        <div className="max-w-3xl">
          <p className="text-zinc-600 text-lg mb-4">
            ООО «РСК ГРУПП» — компания по производству светодиодного
            осветительного оборудования. Собственное производство,
            профессиональные конструкторы, проектанты и дизайнеры — всё это
            позволяет нам отвечать даже самым высоким требованиям Заказчика.
          </p>
          <p className="text-zinc-500">
            У нас собственный отдел продаж, который профессионально
            проконсультирует и поможет подобрать нужные вам решения для освещения
            любых пространств.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16 bg-[#f9fafb] -mx-4 px-4 sm:-mx-6 sm:px-6 py-10 rounded-2xl border border-black/5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="stat-num">{s.value}</div>
              <div className="text-amber-700 text-[0.7rem] font-semibold tracking-[0.12em] uppercase mt-1.5">
                {s.label}
              </div>
              <div className="text-zinc-400 text-[0.8rem] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mb-16 grid sm:grid-cols-2 gap-5">
        <div className="light-card p-7">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-4">
            <Target className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="font-bold text-lg mb-3 text-zinc-900">Наша цель</h2>
          <p className="text-zinc-500 text-[0.95rem] leading-relaxed">
            Сделать общественное пространство комфортной и безопасной средой.
          </p>
        </div>
        <div className="light-card p-7">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-4">
            <Crosshair className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="font-bold text-lg mb-3 text-zinc-900">Наш замысел</h2>
          <p className="text-zinc-500 text-[0.95rem] leading-relaxed">
            Производить уникальные устройства освещения, используя только
            качественные комплектующие и индивидуальную технологию сборки.
            Предоставлять оперативный сервис специалистами, обученными стандартам
            и технологиям компании.
          </p>
        </div>
      </section>

      {/* Directions */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-zinc-900">
          Мы делаем правильное освещение любого пространства
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {directions.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="light-card p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-[0.95rem] mb-1.5 text-zinc-900">
                  {d.title}
                </h3>
                <p className="text-zinc-500 text-sm">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-zinc-900">
          Наши сертификаты
        </h2>
        <div className="flex flex-wrap gap-3">
          {certificates.map((cert) => (
            <div
              key={cert}
              className="light-card px-5 py-4 flex items-center gap-3"
            >
              <FileCheck className="w-5 h-5 text-amber-600 shrink-0" />
              <span className="text-sm font-medium text-zinc-700">{cert}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-6">
          <div className="light-card px-5 py-3">
            <span className="text-amber-700 font-bold text-sm">
              Гарантия 5 лет
            </span>
          </div>
          <div className="light-card px-5 py-3">
            <span className="text-amber-700 font-bold text-sm">
              Срок службы 100 000 часов
            </span>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-zinc-900">
          Области применения
        </h2>
        <div className="flex flex-wrap gap-2">
          {applicationAreas.map((area) => (
            <span
              key={area}
              className="px-3.5 py-2 rounded-lg bg-zinc-50 border border-zinc-200/80 text-sm text-zinc-600"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Requisites */}
      <section className="mb-16">
        <div className="light-card rounded-2xl p-8 max-w-xl">
          <h2 className="text-lg font-semibold mb-6 text-zinc-900">
            Реквизиты
          </h2>
          <div className="space-y-3 text-sm">
            {requisites.map(([label, val]) => (
              <div key={label} className="flex gap-4">
                <span className="text-zinc-400 shrink-0 w-44">{label}</span>
                <span className="text-zinc-600">{val}</span>
              </div>
            ))}
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
            Давайте сотрудничать
          </h2>
          <p className="text-zinc-400 mb-6 max-w-lg">
            Наши специалисты бесплатно проведут расчёты освещения и подберут
            оптимальное решение. Оставьте заявку — свяжемся в ближайшее время.
          </p>
          <Link
            href="/kontakty"
            className="inline-flex px-7 py-3.5 rounded-xl text-base font-semibold bg-amber-600 text-white hover:bg-amber-500 transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
}
