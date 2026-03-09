export interface NewsItem {
  slug: string;
  date: string;
  title: string;
  desc: string;
  image: string;
}

const IMG = "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads";

export const news: NewsItem[] = [
  {
    slug: "rsk-grupp-aktivnyj-uchastnik-x-vserossijskogo-foruma-razvitie-malyh-gorodov",
    date: "22.08.2025",
    title:
      "РСК ГРУПП — Активный Участник X Всероссийского Форума «Развитие Малых Городов»",
    desc: "С 19 по 21 августа 2025 года в МВЦ «Казань Экспо» прошёл X Всероссийский форум «Развитие малых городов и исторических поселений».",
    image: `${IMG}/2025/08/5280655311566403858-jpg.webp`,
  },
  {
    slug: "pozdravlyaem-s-nastupayushhim-novym-2025-godom",
    date: "18.12.2024",
    title: "Поздравляем с наступающим новым 2025 годом!",
    desc: "Поздравление от команды РСК ГРУПП с наступающим Новым 2025 годом.",
    image: `${IMG}/2024/12/photo_2024-12-18_09-57-57-jpg.webp`,
  },
  {
    slug: "rsc-han-r-po-staroj-tsene",
    date: "13.12.2024",
    title: "RSC HAN R по старой цене!",
    desc: "Парковый осветительный комплекс RSC HAN R доступен по прежней цене.",
    image: `${IMG}/2024/12/RSC-HAN-R-910h720-jpg.webp`,
  },
  {
    slug: "s-dnyom-stroiteliya",
    date: "12.08.2024",
    title: "С Днём строителя",
    desc: "Поздравление партнёров с профессиональным праздником — Днём строителя.",
    image: `${IMG}/2024/08/Dobavit-podzagolovok-3.png`,
  },
  {
    slug: "proizveli-svetilniki-i-svetovye-kompleksy-dlya-novogo-zhk-otkrytie",
    date: "05.08.2024",
    title:
      "Произвели светильники и световые комплексы для нового ЖК Открытие",
    desc: "Современные светильники и система трёхзонного освещения для территории внутреннего двора ЖК «Открытие».",
    image: `${IMG}/2024/08/Dobavit-podzagolovok.png`,
  },
  {
    slug: "nasha-novaya-svetovaya-installyatsiya-geksaoktaedr-v-luzhnikah",
    date: "22.07.2024",
    title: "Наша новая световая инсталляция ГЕКСАОКТАЭДР в Лужниках!",
    desc: "Световая инсталляция ГЕКСАОКТАЭДР высотой 1,5 метра установлена на входе в ледовую арену «Кристалл» в Лужниках.",
    image: `${IMG}/2024/07/Dobavit-podzagolovok-1.png`,
  },
  {
    slug: "novinka-svetilnik-rsc-han-rv-150",
    date: "28.06.2024",
    title: "Новинка — светильник RSC HAN RV 150",
    desc: "Новая модель светильника RSC HAN RV 150 для акцентного освещения архитектурных форм и ландшафта.",
    image: `${IMG}/2024/06/Dobavit-podzagolovok-2.png`,
  },
  {
    slug: "preobrazhajte-dvor-ili-parkovuyu-territoriyu-s-novymi-svetilnikam-ot-kompanii-rsk-grupp",
    date: "21.06.2024",
    title:
      "Преображайте двор или парковую территорию с новыми светильниками от РСК",
    desc: "Элегантные и функциональные светильники для создания уникальных световых акцентов в ландшафте.",
    image: `${IMG}/2024/06/4-3.png`,
  },
  {
    slug: "novye-svetilniki-ot-rsk-grupp-ustanovleny-na-kurorte-chernomorskogo-poberezhya",
    date: "27.05.2024",
    title:
      "Новые светильники от РСК ГРУПП установлены на курорте Чёрного моря",
    desc: "Светильники RSC HAN R установлены на новой набережной реки Псезупапсе в Лазаревском.",
    image: `${IMG}/2024/05/photo1714027616-81-jpg.webp`,
  },
  {
    slug: "besplatnaya-ekskursiya-na-nashe-proizvodstvo",
    date: "24.04.2024",
    title: "Бесплатная экскурсия на наше производство",
    desc: "Приглашаем на бесплатную экскурсию на производство РСК ГРУПП — узнайте больше о технологиях и качестве.",
    image: `${IMG}/2024/04/Frejm.png`,
  },
  {
    slug: "sdelaem-besplatnuyu-optimizatsiyu-vashego-proekta-osveshheniya",
    date: "29.02.2024",
    title: "Сделаем бесплатную оптимизацию вашего проекта освещения!",
    desc: "Специалисты РСК ГРУПП изучат ваш проект и предложат оптимизацию для экономии без ущерба качеству.",
    image: `${IMG}/2024/02/1.png`,
  },
];
