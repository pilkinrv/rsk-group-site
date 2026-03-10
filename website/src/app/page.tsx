import Link from "next/link";
import Image from "next/image";
import { Shield, Clock, Home, Activity } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop&q=80";
const FOCUS_IMGS = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&auto=format&fit=crop&q=70",
];
const PRODUCTION_IMG =
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=900&auto=format&fit=crop&q=80";
const PROJECT_IMGS = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=600&auto=format&fit=crop&q=70",
];

const focusCards = [
  {
    label: "Наружное освещение",
    title: "Уличные и дорожные светильники",
    desc: "RSC GLOBE, ASTRA, NUR — для городской инфраструктуры",
    cta: "8 продуктов",
    href: "/proektirovshchikam/katalog",
    alt: "Наружное светодиодное освещение РСК ГРУПП",
  },
  {
    label: "Внутреннее освещение",
    title: "Промышленные светильники",
    desc: "RSC OFFICE, PROM, COMFORT — для офисов и производств",
    cta: "4 продукта",
    href: "/proektirovshchikam/katalog",
    alt: "Внутреннее промышленное освещение РСК ГРУПП",
  },
  {
    label: "Производство",
    title: "Собственный завод в Казани",
    desc: "4 000 м² площади, полный цикл",
    cta: "Подробнее",
    href: "/o-kompanii",
    alt: "Собственное производство РСК ГРУПП в Казани",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "5 лет гарантии",
    desc: "Расширенная гарантия на всё оборудование. Документальные обязательства.",
  },
  {
    icon: Clock,
    title: "Производство от 21 дня",
    desc: "Собственная логистика и контроль на каждом этапе.",
  },
  {
    icon: Home,
    title: "Полный цикл в России",
    desc: "Разработка, производство, испытания — всё на нашем заводе в Казани.",
  },
  {
    icon: Activity,
    title: "Техподдержка проектов",
    desc: "BIM-модели, IES-файлы, расчёты освещения для проектировщиков.",
  },
];

const productionBullets = [
  "Оптика и термоменеджмент собственной разработки",
  "Первичные и финальные испытания на заводе",
  "Индивидуальные решения по ТЗ заказчика",
  "Соответствие ГОСТ и техническим регламентам",
];

const projectsPreview = [
  { location: "Казань — 2025", title: "Парк культуры и отдыха «Кырлай»" },
  { location: "Казань — 2024", title: "ЖК «Арт Сити»" },
  { location: "Татарстан — 2024", title: "Дорожное освещение М-7" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center -mt-[76px] pt-[76px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={HERO_IMG}
            alt="Производство паркового освещения — РСК ГРУПП"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.3) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 60%, rgba(255,255,255,1) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="max-w-[640px]">
            <div className="section-label mb-5">
              Российский производитель · Казань · с 2016 года
            </div>
            <h1 className="text-[clamp(2.5rem,5vw,4.2rem)] font-extrabold leading-[1.08] mb-6 text-zinc-900">
              Производство паркового освещения{" "}
              <span className="text-amber-600">полного цикла</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-[480px] mb-10">
              Проектируем, производим и поставляем парковое и уличное освещение
              для городской инфраструктуры, промышленности и архитектуры.
              Собственный завод 4 000 м² в Казани.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakty"
                className="px-7 py-3.5 rounded-xl text-base amber-btn inline-block"
              >
                Получить консультацию
              </Link>
              <Link
                href="/proektirovshchikam/katalog"
                className="px-7 py-3.5 rounded-xl text-base outline-btn inline-block"
              >
                Каталог продукции
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
          <span className="text-[0.65rem] tracking-[0.15em] uppercase text-zinc-500">
            Прокрутить
          </span>
          <div
            className="w-px h-9"
            style={{
              background: "linear-gradient(to bottom, #d97706, transparent)",
            }}
          />
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-[#f9fafb] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stat-num">5</div>
              <div className="text-amber-700 text-[0.7rem] font-semibold tracking-[0.12em] uppercase mt-1.5">
                лет гарантии
              </div>
              <div className="text-zinc-400 text-[0.8rem] mt-1">
                на всё оборудование
              </div>
            </div>
            <div className="text-center">
              <div className="stat-num">1 000+</div>
              <div className="text-amber-700 text-[0.7rem] font-semibold tracking-[0.12em] uppercase mt-1.5">
                единиц/месяц
              </div>
              <div className="text-zinc-400 text-[0.8rem] mt-1">
                производительность
              </div>
            </div>
            <div className="text-center">
              <div className="stat-num">4 000</div>
              <div className="text-amber-700 text-[0.7rem] font-semibold tracking-[0.12em] uppercase mt-1.5">
                м² производства
              </div>
              <div className="text-zinc-400 text-[0.8rem] mt-1">
                площадь завода
              </div>
            </div>
            <div className="text-center">
              <div className="stat-num">21</div>
              <div className="text-amber-700 text-[0.7rem] font-semibold tracking-[0.12em] uppercase mt-1.5">
                день от заявки
              </div>
              <div className="text-zinc-400 text-[0.8rem] mt-1">
                до отгрузки
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Focus Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="section-label mb-3">В фокусе</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-zinc-900">
              Направления деятельности
            </h2>
          </div>
          <Link
            href="/proektirovshchikam/katalog"
            className="text-zinc-400 text-sm hover:text-amber-700 transition-colors hidden md:inline-block"
          >
            Смотреть каталог →
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {focusCards.map((card, i) => (
            <Link
              key={card.label}
              href={card.href}
              className="product-card block h-[420px] bg-zinc-50 relative"
            >
              <Image
                src={FOCUS_IMGS[i]}
                alt={card.alt}
                fill
                className="object-cover opacity-80"
                unoptimized
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="section-label mb-2">{card.label}</div>
                <h3 className="text-[1.35rem] font-extrabold text-zinc-900 mb-1.5">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm">{card.desc}</p>
                <div className="flex items-center gap-2 mt-4 text-amber-600 text-sm font-semibold">
                  <span>{card.cta}</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="bg-[#f9fafb] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Преимущества</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-zinc-900">
              Почему выбирают РСК ГРУПП
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="light-card p-7">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-5">
                    <Icon className="w-[22px] h-[22px] text-amber-600" />
                  </div>
                  <h3 className="font-bold text-base mb-2.5 text-zinc-900">
                    {b.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Production Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-[20px] overflow-hidden aspect-4/3">
            <Image
              src={PRODUCTION_IMG}
              alt="Собственное производство РСК ГРУПП — Казань"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-5 left-5 flex gap-2.5">
              <div className="bg-white/92 backdrop-blur-xl rounded-[10px] px-4 py-3 border border-black/5">
                <div className="text-[1.4rem] font-extrabold text-amber-600">
                  IP65
                </div>
                <div className="text-[0.7rem] text-zinc-500 uppercase tracking-wider">
                  Защита
                </div>
              </div>
              <div className="bg-white/92 backdrop-blur-xl rounded-[10px] px-4 py-3 border border-black/5">
                <div className="text-[1.4rem] font-extrabold text-amber-600">
                  IK10
                </div>
                <div className="text-[0.7rem] text-zinc-500 uppercase tracking-wider">
                  Удар
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="section-label mb-4">Производство</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-tight mb-5 text-zinc-900">
              Собственное производство{" "}
              <span className="text-amber-600">полного цикла</span>
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-6">
              На производственной площади 4 000 м² в Казани мы контролируем каждый
              этап: разработку, подбор компонентов, сборку и испытания.
            </p>
            <ul className="space-y-3.5">
              {productionBullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span className="text-zinc-700 text-[0.9375rem]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/o-kompanii"
              className="inline-flex items-center gap-2 mt-8 outline-btn px-6 py-3 rounded-xl text-sm font-medium"
            >
              Подробнее о производстве <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Projects Preview */}
      <section className="bg-[#f9fafb] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="section-label mb-3">Реализованные проекты</div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-zinc-900">
                Наши объекты
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-zinc-400 text-sm hover:text-amber-700 transition-colors hidden md:inline-block"
            >
              1 000+ объектов →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projectsPreview.map((proj, i) => (
              <Link
                key={proj.title}
                href="/portfolio"
                className="product-card block h-[300px] bg-white relative"
              >
                <Image
                  src={PROJECT_IMGS[i]}
                  alt={proj.title}
                  fill
                  className="object-cover opacity-90"
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(255,255,255,0.92) 0%, transparent 55%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[0.7rem] text-amber-700 uppercase tracking-widest mb-1.5">
                    {proj.location}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">
                    {proj.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="relative rounded-[24px] p-8 sm:p-[60px] overflow-hidden bg-zinc-900">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(217,119,6,0.12) 0%, transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-amber-500 mb-3.5">
                Начните проект
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-tight mb-3.5 text-white">
                Готовы обсудить ваш проект?
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                Подберём оптимальное решение, подготовим КП и расчёт освещения.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/kontakty"
                className="px-7 py-4 rounded-xl text-base font-semibold text-center bg-amber-600 text-white hover:bg-amber-500 transition-colors"
              >
                Получить КП
              </Link>
              <Link
                href="/proektirovshchikam/katalog"
                className="px-7 py-4 rounded-xl text-base font-semibold text-center border border-white/20 text-white hover:border-amber-500/60 hover:text-amber-400 transition-colors"
              >
                Каталог →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
