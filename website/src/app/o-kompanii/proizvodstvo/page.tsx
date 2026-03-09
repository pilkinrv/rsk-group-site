import Link from "next/link";
import Image from "next/image";
import { FileCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Производство — РСК ГРУПП",
  description:
    "Собственное производство светодиодного освещения полного цикла. 4000 м², 8 этапов от лазерной резки до упаковки. Казань.",
};

const stages = [
  {
    step: "01",
    title: "Лазерная резка",
    text: "Металлические заготовки разрезаются с использованием высокоточной лазерной технологии. Лазер позволяет вырезать заготовку требуемого формата из стального листа толщиной до 44 мм.",
  },
  {
    step: "02",
    title: "Фрезерный отдел",
    text: "С помощью станков с ЧПУ вырезаются объёмные заготовки. Фрезеровочный станок обрабатывает заготовку в разных направлениях для получения детали нужной конфигурации.",
  },
  {
    step: "03",
    title: "Токарный отдел",
    text: "Заготовки обрабатываются на высокоточном оборудовании с ЧПУ — это обеспечивает высокую точность. Обработанные заготовки проходят промежуточный технический контроль.",
  },
  {
    step: "04",
    title: "Сварочный отдел",
    text: "Металлические детали соединяются друг с другом с помощью электросварки — она даёт прочные ровные швы, рассчитанные на большие механические нагрузки.",
  },
  {
    step: "05",
    title: "Шлифовка",
    text: "Места соединения деталей проходят шлифовку. Поверхность швов и стыков тщательно выравнивается. Используется высокоточное шлифовальное оборудование.",
  },
  {
    step: "06",
    title: "Покраска",
    text: "Собственный покрасочный цех с порошковым окрашиванием. Можно выбрать варианты: шагрень, муар или идеально гладкий ровный слой краски.",
  },
  {
    step: "07",
    title: "Сборка",
    text: "Подготовленные детали поступают в сборочный цех, где собираются в соответствии с технологическими требованиями. Светильники проходят завершающий контроль качества.",
  },
  {
    step: "08",
    title: "Упаковка",
    text: "Светильники заворачиваются в несколько слоёв воздушно-пузырьковой плёнки. Продукция маркируется и отправляется получателю.",
  },
];

const HERO_IMG =
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&auto=format&fit=crop&q=80";

export default function ProizvodstvoPage() {
  return (
    <>
      {/* Hero */}
      <section className="mb-14">
        <div className="section-label mb-4">Производство</div>
        <h1 className="text-4xl font-extrabold mb-6 text-zinc-900">
          Производство
        </h1>

        <div className="relative rounded-2xl overflow-hidden aspect-video mb-8 max-w-3xl">
          <Image
            src={HERO_IMG}
            alt="Производство РСК ГРУПП — Казань"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="max-w-3xl space-y-4">
          <p className="text-zinc-600 text-lg">
            Производственные и складские площади нашей компании расположены в
            Казани — городе с развитой логистикой. Это позволяет доставлять нашу
            продукцию по России и странам СНГ.
          </p>
          <p className="text-zinc-500">
            Наша команда осуществляет весь цикл по изготовлению продукции: от
            воплощения идеи в проект до получения окончательного продукта.
            Отличительная сторона нашей команды в том, что отделы работают
            вместе — производственные площади и офисное здание находятся на одной
            территории и занимают более 4 000 м².
          </p>
          <p className="text-zinc-500">
            Современное оборудование и квалифицированный персонал обеспечивают
            гарантию качества. Производственные площади разделены на участки: цех
            металлообработки, лазерной гравировки, сборочный и покрасочный цехи.
          </p>
        </div>
      </section>

      {/* Certification */}
      <section className="mb-14">
        <div className="light-card p-6 flex flex-col sm:flex-row sm:items-center gap-4 max-w-2xl">
          <FileCheck className="w-8 h-8 text-amber-600 shrink-0" />
          <div>
            <h2 className="font-semibold text-zinc-900 mb-1">
              Продукция сертифицирована
            </h2>
            <p className="text-zinc-500 text-sm">
              Соответствует требованиям ЕЭС. Сертификат соответствия и
              декларация о соответствии в наличии.
            </p>
          </div>
        </div>
      </section>

      {/* Production stages */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-10 text-zinc-900">
          Этапы производства
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {stages.map((s) => (
            <div key={s.step} className="light-card p-6">
              <div className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-2">
                Этап {s.step}
              </div>
              <h3 className="font-bold text-base mb-2 text-zinc-900">
                {s.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 text-zinc-900">Материалы</h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <div className="light-card p-5">
            <h3 className="font-semibold text-sm mb-1 text-zinc-900">
              Сталь и алюминий
            </h3>
            <p className="text-zinc-500 text-sm">
              Основные материалы корпусов и несущих конструкций
            </p>
          </div>
          <div className="light-card p-5">
            <h3 className="font-semibold text-sm mb-1 text-zinc-900">
              Антикоррозийная обработка
            </h3>
            <p className="text-zinc-500 text-sm">
              Гальваническая обработка и горячее цинкование
            </p>
          </div>
        </div>
        <p className="text-zinc-500 text-sm mt-4">
          Производство более 1 000 единиц осветительных комплексов в месяц
          позволяет нам обеспечивать большое количество объектов в срок.
        </p>
      </section>

      {/* CTA */}
      <section>
        <Link
          href="/o-kompanii/ekskursiya"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold outline-btn"
        >
          Записаться на экскурсию по заводу
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
