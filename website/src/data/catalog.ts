import type { Product, Category } from "@/types/catalog";

const BASE = "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads";

export const categories: Category[] = [
  {
    id: "1",
    slug: "naruzhnoe-osveshhenie",
    name: "Наружное освещение",
    productCount: 8,
    image: `${BASE}/2024/03/narhuznoeosvechenie_.png`,
    description:
      "Осветительные комплексы, торшеры, прожекторы и консольные светильники для дворов, парков, улиц и набережных.",
  },
  {
    id: "2",
    slug: "vnutrennee-osveshhenie",
    name: "Внутреннее освещение",
    productCount: 4,
    image: `${BASE}/2024/03/vnutrennee_.png`,
    description:
      "Офисные, промышленные и интерьерные светодиодные светильники для любых помещений.",
  },
];

export const products: Product[] = [
  // Наружное освещение
  {
    id: "1",
    slug: "rsc-globe",
    name: "Осветительный комплекс RSC GLOBE",
    category: "Наружное освещение",
    categorySlug: "naruzhnoe-osveshhenie",
    image: `${BASE}/2021/05/RSC-GLOBE-1-1-jpg.webp`,
    description:
      "Серия парковых осветительных комплексов с встроенными в опору светильниками. Вторичная оптика обеспечивает желаемую освещённость. Горячее цинкование защищает от коррозии. Применяется для дворов, парков, площадей и набережных.",
    specs: [
      { label: "Мощность", value: "30 / 50 / 110 Вт" },
      { label: "Световой поток", value: "до 150 лм/Вт" },
      { label: "Степень защиты", value: "IP67" },
      { label: "Цветовая температура", value: "2700–6000K" },
      { label: "Макс. высота", value: "8 м" },
    ],
    referenceProjects: [
      { name: "Экстрим-парк «Урам»", url: "/portfolio" },
      { name: "Сквер «Сад у дома»", url: "/portfolio" },
    ],
    bimUrl: `${BASE}/2022/10/BIM_RSC-PARK-133.1.zip`,
    iesUrl: `${BASE}/2022/10/RSC-PARK-133.1-45.zip`,
  },
  {
    id: "2",
    slug: "rsc-astra-v",
    name: "Осветительный комплекс RSC ASTRA V",
    category: "Наружное освещение",
    categorySlug: "naruzhnoe-osveshhenie",
    image: `${BASE}/2021/05/RSC-ASTRA-V.jpg`,
    description:
      "Парковый осветительный комплекс серии ASTRA. Элегантный дизайн, надёжная конструкция из оцинкованной стали. Предназначен для освещения придомовых территорий, парков и пешеходных зон.",
    specs: [
      { label: "Мощность", value: "30 / 50 Вт" },
      { label: "Световой поток", value: "до 140 лм/Вт" },
      { label: "Степень защиты", value: "IP65" },
      { label: "Цветовая температура", value: "3000–5000K" },
    ],
    referenceProjects: [
      { name: "ЖК «Весна»", url: "/portfolio" },
    ],
  },
  {
    id: "3",
    slug: "rsc-astra-t2",
    name: "Осветительный комплекс RSC ASTRA T2",
    category: "Наружное освещение",
    categorySlug: "naruzhnoe-osveshhenie",
    image: `${BASE}/2021/05/RSC-ASTRA-T2.jpg`,
    description:
      "Двухголовый осветительный комплекс серии ASTRA. Обеспечивает равномерное освещение широких территорий, аллей и пешеходных дорожек. Корпус из оцинкованной стали с порошковой покраской.",
    specs: [
      { label: "Мощность", value: "2 × 30 / 2 × 50 Вт" },
      { label: "Световой поток", value: "до 140 лм/Вт" },
      { label: "Степень защиты", value: "IP65" },
      { label: "Цветовая температура", value: "3000–5000K" },
    ],
  },
  {
    id: "4",
    slug: "rsc-nur-108m",
    name: "Торшерный светильник RSC NUR 108М",
    category: "Наружное освещение",
    categorySlug: "naruzhnoe-osveshhenie",
    image: `${BASE}/2022/09/RSC-NUR-108-M-jpg.webp`,
    description:
      "Торшерный светильник для локальной уличной подсветки: задаёт объём пространства, выполняет навигационную функцию, акцентирует зоны отдыха. Основание — нержавеющая сталь AISI304 с полимерно-порошковой покраской. Возможна перфорация на заказ.",
    specs: [
      { label: "Мощность", value: "10 / 15 / 20 / 25 Вт" },
      { label: "Световой поток", value: "до 135 лм/Вт" },
      { label: "Степень защиты", value: "IP67" },
      { label: "Цветовая температура", value: "2700–5000K" },
    ],
    referenceProjects: [
      { name: "Экстрим-парк «Урам»", url: "/portfolio" },
      { name: "ЖК «Весна»", url: "/portfolio" },
    ],
    bimUrl: `${BASE}/2022/09/3d-model-RSC-Nur-108M.zip`,
  },
  {
    id: "5",
    slug: "rsc-nur-159m",
    name: "Торшерный светильник RSC NUR 159М",
    category: "Наружное освещение",
    categorySlug: "naruzhnoe-osveshhenie",
    image: `${BASE}/2022/09/RSC-NUR-159M-jpg.webp`,
    description:
      "Крупный торшерный светильник серии NUR с диаметром корпуса 159 мм. Подходит для широких аллей, площадей и набережных. Нержавеющая сталь, высокая степень защиты.",
    specs: [
      { label: "Мощность", value: "20 / 30 / 40 Вт" },
      { label: "Световой поток", value: "до 135 лм/Вт" },
      { label: "Степень защиты", value: "IP67" },
      { label: "Цветовая температура", value: "2700–5000K" },
    ],
  },
  {
    id: "6",
    slug: "rsc-flash-q",
    name: "Прожектор RSC FLASH Q",
    category: "Наружное освещение",
    categorySlug: "naruzhnoe-osveshhenie",
    image: `${BASE}/2021/04/RSC-FLASH-Q-jpg.webp`,
    description:
      "Светодиодный прожектор для архитектурной и ландшафтной подсветки. Создаёт направленный световой поток, может устанавливаться в любом направлении. Применяется для подсветки фасадов, деревьев, памятников.",
    specs: [
      { label: "Мощность", value: "10 / 20 / 30 Вт" },
      { label: "Степень защиты", value: "IP65" },
      { label: "Цветовая температура", value: "2700–6000K" },
    ],
  },
  {
    id: "7",
    slug: "rsc-flash-tm1",
    name: "Прожектор RSC FLASH TM1",
    category: "Наружное освещение",
    categorySlug: "naruzhnoe-osveshhenie",
    image: `${BASE}/2022/04/RSC-FLASH-TM1-jpg.webp`,
    description:
      "Мощный светодиодный прожектор для освещения спортивных площадок, парковок и промышленных территорий. Высокий световой поток, асимметричная оптика, надёжный алюминиевый корпус.",
    specs: [
      { label: "Мощность", value: "50 / 100 / 150 Вт" },
      { label: "Световой поток", value: "до 150 лм/Вт" },
      { label: "Степень защиты", value: "IP66" },
      { label: "Цветовая температура", value: "4000–6000K" },
    ],
  },
  {
    id: "8",
    slug: "rsc-globe-han",
    name: "Осветительный комплекс RSC GLOBE HAN",
    category: "Наружное освещение",
    categorySlug: "naruzhnoe-osveshhenie",
    image: `${BASE}/2021/05/RSC-GLOBE-HAN-1-jpg.webp`,
    description:
      "Премиальная серия осветительных комплексов с фонарём в исполнении «хан». Классический силуэт сочетается с современной светодиодной начинкой. Идеально для набережных, исторических кварталов, парков.",
    specs: [
      { label: "Мощность", value: "30 / 50 Вт" },
      { label: "Степень защиты", value: "IP65" },
      { label: "Цветовая температура", value: "2700–4000K" },
    ],
    referenceProjects: [
      { name: "Кремлёвская набережная, Казань", url: "/portfolio" },
    ],
  },

  // Внутреннее освещение
  {
    id: "9",
    slug: "rsc-universal-line",
    name: "Светильник RSC UNIVERSAL LINE",
    category: "Внутреннее освещение",
    categorySlug: "vnutrennee-osveshhenie",
    image: `${BASE}/2021/05/RSC-UNIVERSAL-LINE-6.jpg`,
    description:
      "Универсальный линейный светильник для офисов, торговых залов, паркингов и общественных пространств. Равномерное освещение, низкое энергопотребление, простой монтаж.",
    specs: [
      { label: "Мощность", value: "18 / 24 / 36 / 48 Вт" },
      { label: "Световой поток", value: "до 130 лм/Вт" },
      { label: "Степень защиты", value: "IP20" },
      { label: "Цветовая температура", value: "3000–6000K" },
    ],
    referenceProjects: [
      { name: "ЖК «Весна» — освещение паркинга", url: "/portfolio" },
    ],
  },
  {
    id: "10",
    slug: "rsc-office",
    name: "Светильник офисный RSC OFFICE",
    category: "Внутреннее освещение",
    categorySlug: "vnutrennee-osveshhenie",
    image: `${BASE}/2021/05/office-20-2100-2.jpg`,
    description:
      "Потолочный светильник для офисов, учебных и медицинских учреждений. Высокий индекс цветопередачи, отсутствие пульсаций, комфортное освещение рабочего места.",
    specs: [
      { label: "Мощность", value: "20 / 36 / 48 Вт" },
      { label: "Световой поток", value: "до 2100 лм" },
      { label: "Степень защиты", value: "IP20" },
      { label: "CRI", value: ">80" },
    ],
  },
  {
    id: "11",
    slug: "rsc-comfort",
    name: "Светильник RSC COMFORT",
    category: "Внутреннее освещение",
    categorySlug: "vnutrennee-osveshhenie",
    image: `${BASE}/2022/11/01_RSC-Comfort-24-1860.jpg`,
    description:
      "Интерьерный светильник с мягким рассеянным светом. Применяется в жилых домах, гостиницах, ресторанах. Лаконичный дизайн вписывается в любой интерьер.",
    specs: [
      { label: "Мощность", value: "24 Вт" },
      { label: "Световой поток", value: "1860 лм" },
      { label: "Степень защиты", value: "IP20" },
      { label: "Цветовая температура", value: "3000–4000K" },
    ],
  },
  {
    id: "12",
    slug: "rsc-prom",
    name: "Светильник промышленный RSC PROM",
    category: "Внутреннее освещение",
    categorySlug: "vnutrennee-osveshhenie",
    image: `${BASE}/2023/03/RSC-PROM-18-2100LM.jpg`,
    description:
      "Промышленный светодиодный светильник для цехов, складов, логистических центров. Пыле- и влагозащищённый корпус, длительный срок службы, высокий световой поток.",
    specs: [
      { label: "Мощность", value: "18 / 36 / 60 Вт" },
      { label: "Световой поток", value: "до 2100 лм" },
      { label: "Степень защиты", value: "IP65" },
      { label: "Цветовая температура", value: "5000K" },
    ],
  },
];
