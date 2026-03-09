import { Shield, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Гарантии от производителя — РСК ГРУПП",
  description: "Гарантия 5 лет на продукцию РСК ГРУПП. Условия гарантийного обслуживания.",
};

const conditions = [
  "Гарантия распространяется на все изделия собственного производства",
  "Срок гарантии — 5 лет с даты поставки",
  "При обнаружении дефекта производится замена или ремонт за счёт производителя",
  "Гарантия не распространяется на механические повреждения и нарушения условий эксплуатации",
  "Сервисный отдел работает в режиме Пн–Пт 8:00–17:00",
];

export default function GarantiiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-3xl relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center">
            <Shield size={32} className="text-amber-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">Гарантия 5 лет</h1>
            <p className="text-zinc-600">На всю продукцию собственного производства</p>
          </div>
        </div>

        <p className="text-zinc-600 text-lg mb-10">
          Мы уверены в качестве своей продукции и предоставляем расширенную гарантию — 5 лет.
          Это подтверждение нашей ответственности перед заказчиком.
        </p>

        <h2 className="text-xl font-semibold mb-6 text-zinc-900">Условия гарантии</h2>
        <ul className="space-y-4 mb-10">
          {conditions.map((c) => (
            <li key={c} className="flex items-start gap-3 text-zinc-600">
              <CheckCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <span>{c}</span>
            </li>
          ))}
        </ul>

        <div className="light-card rounded-2xl p-6">
          <p className="text-zinc-600 text-sm">
            По вопросам гарантийного обслуживания:
            <a href="tel:+79600796853" className="text-amber-600 hover:text-amber-700 ml-1 transition">
              +7 960 079-68-53
            </a>{" "}
            или{" "}
            <a href="mailto:mail@rsc-groupp.ru" className="text-amber-600 hover:text-amber-700 transition">
              mail@rsc-groupp.ru
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
