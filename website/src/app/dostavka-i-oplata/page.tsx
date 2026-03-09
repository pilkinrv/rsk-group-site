import { Truck, CreditCard, Package } from "lucide-react";

export const metadata = {
  title: "Доставка и оплата — РСК ГРУПП",
  description: "Условия доставки и оплаты продукции РСК ГРУПП по России.",
};

export default function DostavkaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-12 text-zinc-900 inline-block">Доставка и оплата</h1>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Truck,
              title: "Доставка по России",
              text: "Транспортными компаниями (СДЭК, Деловые линии, ПЭК) или собственным транспортом по согласованию. Отгрузка со склада в Казани.",
            },
            {
              icon: CreditCard,
              title: "Оплата",
              text: "Безналичный расчёт. Работаем с юридическими лицами и ИП. Возможна поэтапная оплата по договору.",
            },
            {
              icon: Package,
              title: "Упаковка",
              text: "Надёжная упаковка обеспечивает сохранность при транспортировке. Каждое изделие проходит контроль перед отгрузкой.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="light-card rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                <Icon size={24} className="text-amber-600" />
              </div>
              <h2 className="text-lg font-semibold mb-3 text-zinc-900">{title}</h2>
              <p className="text-zinc-600 text-sm">{text}</p>
            </div>
          ))}
        </div>

        <div className="light-card rounded-2xl p-6">
          <p className="text-zinc-600 text-sm">
            Подробные условия уточняйте у менеджера:{" "}
            <a href="tel:+79600796853" className="text-amber-600 hover:text-amber-700 transition">
              +7 960 079-68-53
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
