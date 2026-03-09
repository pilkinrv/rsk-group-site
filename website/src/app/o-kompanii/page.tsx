import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "О компании — РСК ГРУПП",
  description: "ООО РСК ГРУПП — производитель светодиодного освещения. История, производство, ценности.",
};

const values = [
  { title: "Качество", text: "ОТК на каждом этапе производства. Используем только сертифицированные комплектующие." },
  { title: "Надёжность", text: "Гарантия 5 лет. Собственный отдел сервиса для поддержки в гарантийный и послегарантийный период." },
  { title: "Инновации", text: "Постоянное развитие: внедряем передовые технологии и оптические решения." },
  { title: "Партнёрство", text: "Работаем в долгосрочной перспективе. Индивидуальный подход к каждому заказчику." },
];

export default function OKompaniiPage() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-label mb-4">О компании</div>
          <h1 className="text-4xl font-extrabold mb-6 text-zinc-900">О компании</h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-zinc-600 text-lg mb-4">
                ООО «РСК ГРУПП» — российский производитель светодиодного осветительного
                оборудования. Основан в 2016 году в Казани.
              </p>
              <p className="text-zinc-500 mb-4">
                Собственный завод полного цикла позволяет контролировать каждый этап:
                от проектирования и изготовления до поставки и сервисного обслуживания.
                В штате — профессиональные конструкторы, проектанты и дизайнеры.
              </p>
              <p className="text-zinc-500">
                Продукция применяется в объектах городской инфраструктуры, жилых комплексах,
                парках, промышленных предприятиях по всей России.
              </p>
            </div>
            <div className="light-card rounded-2xl p-8">
              <h2 className="text-lg font-semibold mb-6 text-zinc-900">Реквизиты</h2>
              <div className="space-y-3 text-sm">
                {[
                  ["Полное наименование", "ООО «РСК ГРУПП»"],
                  ["ИНН", "1657223686"],
                  ["КПП", "168301001"],
                  ["ОГРН", "1161690093608"],
                  ["Адрес", "420036, г. Казань, Теплично-Комбинатская ул., д. 5В"],
                  ["Телефон", "+7 960 079-68-53"],
                  ["Email", "mail@rsc-groupp.ru"],
                  ["Режим работы", "Пн–Пт 8:00–17:00"],
                ].map(([label, val]) => (
                  <div key={label} className="flex gap-4">
                    <span className="text-zinc-400 shrink-0 w-40">{label}</span>
                    <span className="text-zinc-600">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/4 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl font-bold mb-12 text-zinc-900">Наши ценности</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="light-card rounded-2xl p-6">
                <CheckCircle size={24} className="text-amber-600 mb-4" />
                <h3 className="font-semibold mb-2 text-zinc-900">{v.title}</h3>
                <p className="text-zinc-500 text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
