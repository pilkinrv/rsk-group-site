"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MapPin } from "lucide-react";

const IMG_BASE = "/images/portfolio";

const projects = [
  {
    id: "uram",
    name: "Экстрим-парк «Урам»",
    category: "parks",
    categoryName: "Парки и скверы",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_Ext_Park_16.jpg",
    city: "Казань",
    year: "2021",
    description:
      "Комплексное освещение экстрим-парка «Урам» — крупнейшего скейт-парка в России. Установлены осветительные комплексы RSC GLOBE и торшерные светильники RSC NUR для создания безопасной и комфортной среды в вечернее время.",
    products: ["RSC GLOBE", "RSC NUR 108М"],
  },
  {
    id: "yarkiy",
    name: "ЖК «Яркий»",
    category: "zhk",
    categoryName: "Жилые комплексы",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2023/04/RSC_Yarkiy_001.jpg",
    city: "Казань",
    year: "2023",
    description:
      "Освещение дворовых территорий и пешеходных зон жилого комплекса «Яркий». Применены парковые осветительные комплексы серии ASTRA, обеспечивающие равномерное и комфортное освещение.",
    products: ["RSC ASTRA V"],
  },
  {
    id: "naberezhnaya-kazanki",
    name: "Набережная Казанки",
    category: "public",
    categoryName: "Общественные пространства",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_Nab_Kazanki_08.jpg",
    city: "Казань",
    year: "2021",
    description:
      "Освещение Кремлёвской набережной реки Казанки. Установлены осветительные комплексы RSC GLOBE HAN в классическом стиле, гармонирующие с архитектурным окружением исторического центра города.",
    products: ["RSC GLOBE HAN"],
  },
  {
    id: "vesna",
    name: "ЖК «Весна»",
    category: "zhk",
    categoryName: "Жилые комплексы",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_Oduvanchiki_009.jpg",
    city: "Казань",
    year: "2021",
    description:
      "Комплексное наружное освещение жилого комплекса «Весна»: дворовые территории, пешеходные дорожки, детские площадки. Использованы комплексы RSC ASTRA V и торшерные светильники RSC NUR.",
    products: ["RSC ASTRA V", "RSC NUR 108М"],
  },
  {
    id: "grenada",
    name: "Парк «Гренада»",
    category: "parks",
    categoryName: "Парки и скверы",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_Park_Grenada_009.jpg",
    city: "Казань",
    year: "2021",
    description:
      "Освещение парковых зон и прогулочных аллей парка «Гренада». Парковые светильники обеспечивают безопасность и создают комфортную атмосферу для вечерних прогулок.",
    products: ["RSC GLOBE"],
  },
  {
    id: "shervud",
    name: "ЖК «Шервуд»",
    category: "zhk",
    categoryName: "Жилые комплексы",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_Sherwood_08.jpg",
    city: "Казань",
    year: "2021",
    description:
      "Наружное освещение территории жилого комплекса «Шервуд». Осветительные комплексы RSC GLOBE вписаны в ландшафтный дизайн придомовой территории.",
    products: ["RSC GLOBE"],
  },
  {
    id: "sad-u-doma",
    name: "Сквер «Сад у дома»",
    category: "parks",
    categoryName: "Парки и скверы",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_Sad_y_Doma_009.jpg",
    city: "Казань",
    year: "2021",
    description:
      "Благоустройство и освещение сквера «Сад у дома». Парковые осветительные комплексы RSC GLOBE создают уютное и безопасное пространство для отдыха жителей.",
    products: ["RSC GLOBE"],
  },
  {
    id: "kamskoe-uste",
    name: "Набережная «Камское устье»",
    category: "public",
    categoryName: "Общественные пространства",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/01/RSC_Kamskoe-Uste_01.jpg",
    city: "Татарстан",
    year: "2021",
    description:
      "Освещение благоустроенной набережной в посёлке Камское Устье. Установлены осветительные комплексы, обеспечивающие безопасное и комфортное пребывание в вечернее время.",
    products: ["RSC GLOBE"],
  },
  {
    id: "merkuriy",
    name: "ЖК «Меркурий»",
    category: "zhk",
    categoryName: "Жилые комплексы",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_Mer_003.jpg",
    city: "Казань",
    year: "2021",
    description:
      "Парковые фонари для жилого комплекса «Меркурий». Осветительные комплексы интегрированы в общую концепцию благоустройства территории.",
    products: ["RSC GLOBE"],
  },
  {
    id: "laishevo",
    name: "Лазаревский парк культуры",
    category: "parks",
    categoryName: "Парки и скверы",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_Laishevo_18.jpg",
    city: "Лаишево",
    year: "2021",
    description:
      "Освещение Лазаревского парка культуры и отдыха в Лаишево. Комплексное решение для аллей, площадок и зон отдыха с использованием парковых осветительных комплексов.",
    products: ["RSC GLOBE"],
  },
  {
    id: "park-bk",
    name: "Парк у БК",
    category: "parks",
    categoryName: "Парки и скверы",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/04/BK_Park2-11-1.jpg",
    city: "Казань",
    year: "2021",
    description:
      "Освещение парковой зоны. Установлены осветительные комплексы для создания безопасной среды в вечернее и ночное время.",
    products: ["RSC GLOBE"],
  },
  {
    id: "al-mardzhani",
    name: "Мечеть «Аль-Марджани»",
    category: "public",
    categoryName: "Общественные пространства",
    image: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_AD_001.jpg",
    city: "Казань",
    year: "2021",
    description:
      "Архитектурная подсветка и наружное освещение территории мечети «Аль-Марджани». Деликатное освещение подчёркивает архитектуру исторического здания.",
    products: ["RSC FLASH Q"],
  },
];

const filterCategories = [
  { id: "all", name: "Все объекты" },
  { id: "parks", name: "Парки и скверы" },
  { id: "zhk", name: "Жилые комплексы" },
  { id: "public", name: "Общественные пространства" },
];

export function PortfolioClient() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 rounded-full text-sm transition ${
              active === cat.id
                ? "bg-amber-600 text-white font-semibold shadow-lg shadow-amber-600/25"
                : "light-card text-zinc-600 hover:text-zinc-900 border border-zinc-200"
            }`}
          >
            {cat.name}
            <span className="ml-1.5 text-xs opacity-70">
              {cat.id === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSelected(p)}
            className="group block light-card rounded-2xl overflow-hidden text-left w-full"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                unoptimized
              />
            </div>
            <div className="p-5">
              <p className="text-xs text-amber-600 mb-1">{p.categoryName}</p>
              <h2 className="font-semibold text-zinc-900">{p.name}</h2>
              <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                <MapPin size={12} />
                {p.city}, {p.year}
              </p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-zinc-500 text-center py-12">Нет объектов в этой категории</p>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-cover rounded-t-2xl"
                unoptimized
              />
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition"
                aria-label="Закрыть"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="section-label">{selected.categoryName}</span>
                <span className="text-xs text-zinc-400 flex items-center gap-1">
                  <MapPin size={12} />
                  {selected.city}, {selected.year}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-zinc-900 mb-4">{selected.name}</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">{selected.description}</p>
              {selected.products.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                    Использованное оборудование
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.products.map((prod) => (
                      <span
                        key={prod}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
