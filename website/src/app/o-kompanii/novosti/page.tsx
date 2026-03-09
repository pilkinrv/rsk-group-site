import { Calendar } from "lucide-react";

export const metadata = {
  title: "Новости — РСК ГРУПП",
  description:
    "Новости компании РСК ГРУПП: события, новинки продукции, участие в выставках и форумах.",
};

const news = [
  {
    date: "22.08.2025",
    title: "РСК ГРУПП — Активный Участник X Всероссийского Форума «Развитие Малых Городов»",
  },
  {
    date: "18.12.2024",
    title: "Поздравляем с наступающим новым 2025 годом!",
  },
  {
    date: "13.12.2024",
    title: "RSC HAN R по старой цене!",
  },
  {
    date: "12.08.2024",
    title: "С Днём строителя",
  },
  {
    date: "05.08.2024",
    title: "Произвели светильники и световые комплексы для нового ЖК Открытие",
  },
  {
    date: "22.07.2024",
    title: "Наша новая световая инсталляция ГЕКСАОКТАЭДР в Лужниках!",
  },
  {
    date: "28.06.2024",
    title: "Новинка — светильник RSC HAN RV 150",
  },
  {
    date: "21.06.2024",
    title: "Преображайте двор или парковую территорию с новыми светильниками от РСК",
  },
  {
    date: "27.05.2024",
    title: "Новые светильники от РСК ГРУПП установлены на курорте Чёрного моря",
  },
  {
    date: "24.04.2024",
    title: "Бесплатная экскурсия на наше производство",
  },
  {
    date: "29.02.2024",
    title: "Сделаем бесплатную оптимизацию вашего проекта освещения!",
  },
];

export default function NovostiPage() {
  return (
    <>
      <section className="mb-10">
        <div className="section-label mb-4">Новости</div>
        <h1 className="text-4xl font-extrabold mb-4 text-zinc-900">
          Новости
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl">
          События компании, новинки продукции, участие в форумах и выставках.
        </p>
      </section>

      <section className="space-y-4">
        {news.map((item) => (
          <article
            key={item.date + item.title}
            className="light-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
          >
            <div className="flex items-center gap-2 shrink-0">
              <Calendar size={16} className="text-amber-600" />
              <time className="text-sm font-semibold text-amber-700 tabular-nums whitespace-nowrap">
                {item.date}
              </time>
            </div>
            <h2 className="text-[0.95rem] font-medium text-zinc-800 leading-snug">
              {item.title}
            </h2>
          </article>
        ))}
      </section>
    </>
  );
}
