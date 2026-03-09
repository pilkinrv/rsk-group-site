import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Контакты — РСК ГРУПП",
  description:
    "Контакты ООО РСК ГРУПП. Телефон +7 960 079-68-53, email mail@rsc-groupp.ru, адрес в Казани.",
};

const contacts = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 960 079-68-53",
    href: "tel:+79600796853",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mail@rsc-groupp.ru",
    href: "mailto:mail@rsc-groupp.ru",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "420036, г. Казань, Теплично-Комбинатская ул., д. 5В",
    href: "https://yandex.ru/maps/?text=Казань+Теплично-Комбинатская+5В",
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн–Пт 8:00–17:00",
    href: undefined,
  },
];

export default function KontaktyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="relative z-10">
        <div className="section-label mb-4">Контакты</div>
        <h1 className="text-4xl font-extrabold mb-4 text-zinc-900">Контакты</h1>
        <p className="text-zinc-500 mb-12 max-w-xl">
          Позвоните или напишите нам — специалисты бесплатно проконсультируют и
          помогут подобрать оборудование для вашего проекта.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <address className="not-italic space-y-6 mb-10">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-zinc-900 hover:text-amber-600 transition"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-zinc-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </address>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { name: "ВКонтакте", url: "https://vk.com/rscgroupp" },
                { name: "Telegram", url: "https://t.me/rscgroupp" },
                { name: "YouTube", url: "https://www.youtube.com/@rscgroupp" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 outline-btn rounded-xl text-sm"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right column: form */}
          <div className="light-card rounded-2xl p-6 sm:p-8">
            <h2 className="font-semibold text-zinc-900 text-lg mb-1">Написать нам</h2>
            <p className="text-zinc-500 text-sm mb-6">
              Ответим в течение рабочего дня
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 light-card rounded-2xl overflow-hidden h-64 flex items-center justify-center">
          <a
            href="https://yandex.ru/maps/?text=Казань+Теплично-Комбинатская+5В"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-amber-600 transition"
          >
            <MapPin size={32} />
            <span>Открыть на Яндекс.Картах →</span>
            <span className="text-xs text-zinc-500">
              Казань, Теплично-Комбинатская ул., д. 5В
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
