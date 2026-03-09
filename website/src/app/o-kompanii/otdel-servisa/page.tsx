import Link from "next/link";
import { Shield, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Отдел сервиса — РСК ГРУПП",
  description:
    "Отдел сервиса РСК ГРУПП: гарантийное и постгарантийное обслуживание светодиодного освещения. Гарантия 5 лет.",
};

const steps = [
  {
    step: "1",
    title: "Получаем заявку",
    text: "Получаем заявку и связываемся с вами в течение рабочего дня",
  },
  {
    step: "2",
    title: "Уточняем информацию",
    text: "Уточняем информацию и составляем план дальнейшей работы",
  },
  {
    step: "3",
    title: "Демонтаж оборудования",
    text: "Демонтируем и забираем неисправное оборудование или элемент",
  },
  {
    step: "4",
    title: "Диагностика и ремонт",
    text: "Проводим диагностику и устраняем неполадки",
  },
  {
    step: "5",
    title: "Доставка и установка",
    text: "Доставляем оборудование обратно на объект и устанавливаем",
  },
];

export default function OtdelServisaPage() {
  return (
    <>
      {/* Hero */}
      <section className="mb-14">
        <div className="section-label mb-4">Сервис</div>
        <h1 className="text-4xl font-extrabold mb-4 text-zinc-900">
          Отдел сервиса
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl">
          Полная поддержка на протяжении всего срока эксплуатации нашего
          оборудования — от гарантийного обслуживания до постгарантийного
          ремонта.
        </p>
      </section>

      {/* Steps */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-8 text-zinc-900">
          Как мы работаем
        </h2>
        <div className="space-y-4 max-w-2xl">
          {steps.map((s) => (
            <div key={s.step} className="light-card p-5 flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                <span className="text-amber-700 text-sm font-bold">
                  {s.step}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-[0.95rem] text-zinc-900 mb-1">
                  {s.title}
                </h3>
                <p className="text-zinc-500 text-sm">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact person */}
      <section className="mb-14">
        <div className="light-card p-6 max-w-lg">
          <h2 className="font-semibold text-lg mb-4 text-zinc-900">
            Руководитель отдела сервиса
          </h2>
          <p className="text-zinc-800 font-medium mb-3">Еремеева Эльвина</p>
          <div className="space-y-2.5 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-600" />
              <a
                href="tel:+79655841629"
                className="text-zinc-600 hover:text-amber-700 transition-colors"
              >
                8 965 584 16 29
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-600" />
              <a
                href="mailto:client-service@rsc-groupp.ru"
                className="text-zinc-600 hover:text-amber-700 transition-colors"
              >
                client-service@rsc-groupp.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty / Post-warranty */}
      <section className="mb-14 grid sm:grid-cols-2 gap-5">
        <div className="light-card p-7">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-4">
            <Shield className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="font-bold text-lg mb-3 text-zinc-900">
            Гарантийное обслуживание
          </h2>
          <ul className="space-y-2.5 text-zinc-500 text-[0.95rem]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
              Гарантия действует в течение <strong className="text-zinc-700">5 лет</strong> при
              соблюдении условий эксплуатации
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
              В гарантийном случае все работы проводим{" "}
              <strong className="text-zinc-700">абсолютно бесплатно</strong>
            </li>
          </ul>
        </div>

        <div className="light-card p-7">
          <div className="w-11 h-11 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center mb-4">
            <Clock className="w-5 h-5 text-zinc-500" />
          </div>
          <h2 className="font-bold text-lg mb-3 text-zinc-900">
            Постгарантийное обслуживание
          </h2>
          <ul className="space-y-2.5 text-zinc-500 text-[0.95rem]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2" />
              После устранения неисправности — гарантия{" "}
              <strong className="text-zinc-700">1 год</strong> на выполненную работу
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2" />
              Стоимость рассчитывается индивидуально по результатам диагностики
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2" />
              Полная техническая поддержка по истечении гарантийного срока
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section>
        <p className="text-zinc-500 mb-4">
          По техническим вопросам, связанным с установкой и эксплуатацией нашего
          оборудования, обращайтесь в отдел сервиса.
        </p>
        <Link
          href="/kontakty"
          className="inline-flex px-6 py-3 rounded-xl text-sm font-semibold outline-btn"
        >
          Связаться с отделом сервиса
        </Link>
      </section>
    </>
  );
}
