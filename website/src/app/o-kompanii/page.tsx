import Link from "next/link";
import {
  Users,
  History,
  Heart,
  Newspaper,
  Factory,
  MapPin,
  Wrench,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "О компании — РСК ГРУПП",
  description:
    "ООО РСК ГРУПП — российский производитель светодиодного освещения. О нас, история, ценности, производство, экскурсии, сервис.",
};

const sections = [
  {
    href: "/o-kompanii/o-nas",
    icon: Users,
    title: "О нас",
    desc: "Компания, команда, сертификаты, области применения и реквизиты",
  },
  {
    href: "/o-kompanii/istoriya",
    icon: History,
    title: "История",
    desc: "Путь от стартапа до федерального производителя с 2016 года",
  },
  {
    href: "/o-kompanii/tsennosti",
    icon: Heart,
    title: "Ценности",
    desc: "Время, качество, развитие и партнёрство — основа нашей работы",
  },
  {
    href: "/o-kompanii/novosti",
    icon: Newspaper,
    title: "Новости",
    desc: "События, новинки продукции, участие в выставках и форумах",
  },
  {
    href: "/o-kompanii/proizvodstvo",
    icon: Factory,
    title: "Производство",
    desc: "Полный цикл на собственном заводе в Казани: от лазерной резки до упаковки",
  },
  {
    href: "/o-kompanii/ekskursiya",
    icon: MapPin,
    title: "Экскурсия на производство",
    desc: "Посетите наш завод, познакомьтесь с технологиями и командой",
  },
  {
    href: "/o-kompanii/otdel-servisa",
    icon: Wrench,
    title: "Отдел сервиса",
    desc: "Гарантийное и постгарантийное обслуживание, техподдержка",
  },
  {
    href: "/o-kompanii/poleznoe",
    icon: BookOpen,
    title: "Полезное",
    desc: "Статьи и рекомендации по выбору и эксплуатации освещения",
  },
];

export default function OKompaniiHubPage() {
  return (
    <>
      <div className="section-label mb-4">О компании</div>
      <h1 className="text-4xl font-extrabold mb-3 text-zinc-900">
        О компании РСК ГРУПП
      </h1>
      <p className="text-zinc-500 text-lg mb-12 max-w-2xl">
        Российский производитель светодиодного осветительного оборудования.
        Собственный завод полного цикла в Казани с 2016 года.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.href}
              href={s.href}
              className="light-card p-6 group flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="font-bold text-[0.95rem] mb-2 text-zinc-900 group-hover:text-amber-700 transition-colors">
                {s.title}
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                {s.desc}
              </p>
              <span className="text-amber-600 text-sm font-semibold mt-4 inline-flex items-center gap-1">
                Подробнее <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
