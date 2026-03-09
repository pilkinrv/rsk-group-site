import Link from "next/link";
import { Lock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Регистрация проектировщика — РСК ГРУПП",
  description:
    "Зарегистрируйтесь как проектировщик и получите доступ к BIM-моделям, IES-файлам и чату с техническими специалистами.",
};

const benefits = [
  "Скачивание BIM-моделей Revit (.rfa)",
  "Скачивание IES-файлов светораспределения",
  "Чат с техническими специалистами в Telegram",
  "Габаритные чертежи и техническая документация",
];

const inputClass =
  "w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 transition";

export default function RegistraciyaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
              <Lock size={22} className="text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-zinc-900">Регистрация проектировщика</h1>
          </div>
          <p className="text-zinc-600 mb-8">
            После регистрации и подтверждения email вы получите бесплатный доступ
            к профессиональным материалам для проектирования.
          </p>

          <h2 className="text-lg font-semibold mb-4 text-zinc-900">Что открывается после регистрации:</h2>
          <ul className="space-y-3 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-zinc-600">
                <CheckCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="light-card rounded-xl p-5 text-sm text-zinc-600">
            <p className="mb-2">
              Уже зарегистрированы?{" "}
              <Link href="/proektirovshchikam/katalog" className="text-amber-600 hover:text-amber-700 transition">
                Перейти в каталог
              </Link>
            </p>
            <p>
              Вопросы?{" "}
              <a href="tel:+79600796853" className="text-amber-600 hover:text-amber-700 transition">
                +7 960 079-68-53
              </a>
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="light-card rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6 text-zinc-900">Данные для регистрации</h2>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-600 mb-1">
                  Фамилия <span className="text-red-400">*</span>
                </label>
                <input type="text" required placeholder="Иванов" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm text-zinc-600 mb-1">
                  Имя <span className="text-red-400">*</span>
                </label>
                <input type="text" required placeholder="Иван" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="block text-sm text-zinc-600 mb-1">Отчество</label>
              <input type="text" placeholder="Иванович" className={inputClass} />
            </div>

            <div>
              <label className="block text-sm text-zinc-600 mb-1">
                Компания / Организация <span className="text-red-400">*</span>
              </label>
              <input type="text" required placeholder="ООО «Проект»" className={inputClass} />
            </div>

            <div>
              <label className="block text-sm text-zinc-600 mb-1">Должность</label>
              <input type="text" placeholder="Инженер-проектировщик" className={inputClass} />
            </div>

            <div>
              <label className="block text-sm text-zinc-600 mb-1">
                Email <span className="text-red-400">*</span>
              </label>
              <input type="email" required placeholder="ivan@company.ru" className={inputClass} />
            </div>

            <div>
              <label className="block text-sm text-zinc-600 mb-1">
                Телефон <span className="text-red-400">*</span>
              </label>
              <input type="tel" required placeholder="+7 000 000-00-00" className={inputClass} />
            </div>

            <button
              type="submit"
              className="w-full py-3 amber-btn rounded-xl transition mt-2 shadow-lg shadow-amber-600/25"
            >
              Зарегистрироваться
            </button>

            <p className="text-xs text-zinc-500 text-center">
              На email будет отправлено письмо для подтверждения.
              Нажимая кнопку, вы соглашаетесь с{" "}
              <Link href="/politika-konfidentsialnosti" className="text-amber-600 hover:text-amber-700 transition">
                политикой конфиденциальности
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
