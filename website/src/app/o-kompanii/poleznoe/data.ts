export interface Article {
  slug: string;
  date: string;
  title: string;
  desc: string;
  image: string;
}

const IMG = "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads";

export const articles: Article[] = [
  {
    slug: "stepen-zashhity-ulichnyh-svetilnikov",
    date: "29.08.2024",
    title:
      "Как выбрать правильную степень защиты для уличных светильников?",
    desc: "Разбираем классы IP и помогаем подобрать оптимальную степень защиты для разных условий эксплуатации.",
    image: `${IMG}/2024/04/RSC_Tsarevo_006-jpg.webp`,
  },
  {
    slug: "torshernye-parkovye-svetilniki",
    date: "29.08.2024",
    title: "Торшерные парковые светильники: где применяются и как выбрать",
    desc: "Обзор типов парковых торшерных светильников, их особенности и критерии выбора для разных задач.",
    image: `${IMG}/2021/01/RSC_Kamskoe-Uste_12.jpg`,
  },
  {
    slug: "rasstoyanie-mezhdu-svetilnikami",
    date: "29.08.2024",
    title: "На каком расстоянии должны находиться уличные светильники?",
    desc: "Нормативы и рекомендации по расстоянию между опорами и светильниками для разных типов дорог и территорий.",
    image: `${IMG}/2021/06/RSC_Park_Grenada_004.jpg`,
  },
  {
    slug: "vybor-vysoty-opory",
    date: "29.08.2024",
    title: "От чего зависит выбор высоты опоры?",
    desc: "Факторы, влияющие на выбор высоты осветительной опоры: тип территории, мощность светильника, нормы освещённости.",
    image: `${IMG}/2022/12/RSC_dmg-medklinik01.jpg`,
  },
  {
    slug: "sadovo-parkovoe-osveshhenie",
    date: "29.08.2024",
    title: "Садово-парковое освещение: варианты и выбор светильников",
    desc: "Типы светильников для садов и парков, принципы проектирования и рекомендации по созданию комфортной световой среды.",
    image: `${IMG}/2022/10/RSC_Ext_Park_18-jpg.webp`,
  },
  {
    slug: "ulichnoe-osveshhenie-vo-dvorah",
    date: "12.07.2024",
    title: "Уличное освещение во дворах домов",
    desc: "Требования к дворовому освещению, типы светильников и практические советы по обустройству придомовых территорий.",
    image: `${IMG}/2022/09/Osobnyak-1.jpeg`,
  },
];
