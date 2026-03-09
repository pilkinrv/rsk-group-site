"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Download,
  FileText,
  ArrowRight,
  Box,
  ChevronRight,
} from "lucide-react";
import type { Product, Category } from "@/types/catalog";

const SPEC_GROUPS: Record<string, string[]> = {
  "Электрические параметры": [
    "Мощность",
    "Напряжение",
    "Частота",
    "Коэффициент мощности",
    "THD",
  ],
  "Световые параметры": [
    "Световая отдача",
    "Световой поток",
    "Цветовая температура",
    "CRI",
    "CRI (Ra)",
    "Ресурс",
  ],
  "Механика и защита": [
    "Степень защиты",
    "Ударостойкость",
    "Материал",
    "Диаметр трубы",
    "Макс. высота",
  ],
  Климат: [
    "Рабочая температура",
    "Влажность",
    "Ветровая нагрузка",
    "Исполнение",
  ],
};

function groupSpecs(specs: { label: string; value: string }[]) {
  const groups: Record<string, { label: string; value: string }[]> = {};
  for (const key of Object.keys(SPEC_GROUPS)) {
    groups[key] = [];
  }
  const matchedLabels = new Set<string>();
  for (const spec of specs) {
    for (const [groupName, labels] of Object.entries(SPEC_GROUPS)) {
      if (labels.some((l) => spec.label.toLowerCase().includes(l.toLowerCase()))) {
        groups[groupName].push(spec);
        matchedLabels.add(spec.label);
        break;
      }
    }
  }
  const unmatched = specs.filter((s) => !matchedLabels.has(s.label));
  if (unmatched.length > 0) {
    groups["Электрические параметры"].push(...unmatched);
  }
  return groups;
}

function parsePowerChips(specs: { label: string; value: string }[]) {
  const chips: { text: string; amber: boolean }[] = [];
  const powerSpec = specs.find((s) =>
    s.label.toLowerCase().includes("мощность")
  );
  const ipSpec = specs.find(
    (s) =>
      s.label.toLowerCase().includes("степень защиты") ||
      s.label.toLowerCase().includes("ip")
  );
  const flowSpec = specs.find(
    (s) =>
      s.label.toLowerCase().includes("световой поток") ||
      s.label.toLowerCase().includes("световая отдача")
  );
  const lifespanSpec = specs.find((s) =>
    s.label.toLowerCase().includes("ресурс")
  );
  const tempSpec = specs.find((s) =>
    s.label.toLowerCase().includes("температура") &&
    !s.label.toLowerCase().includes("цветовая")
  );

  if (powerSpec) chips.push({ text: powerSpec.value, amber: true });
  if (ipSpec) chips.push({ text: ipSpec.value, amber: false });
  if (flowSpec) chips.push({ text: flowSpec.value, amber: false });
  if (lifespanSpec) chips.push({ text: lifespanSpec.value, amber: false });
  else chips.push({ text: "50 000 ч", amber: false });
  if (tempSpec) chips.push({ text: tempSpec.value, amber: false });
  else chips.push({ text: "-60...+50 °C", amber: false });

  return chips;
}

function parseModifications(specs: { label: string; value: string }[]) {
  const powerSpec = specs.find((s) =>
    s.label.toLowerCase().includes("мощность")
  );
  const flowSpec = specs.find(
    (s) =>
      s.label.toLowerCase().includes("световой поток") ||
      s.label.toLowerCase().includes("световая отдача")
  );
  if (!powerSpec) return [];
  const parts = powerSpec.value
    .split(/[\/]/)
    .map((p) => p.trim())
    .filter((p) => /\d/.test(p))
    .slice(0, 3);
  if (parts.length === 0) return [];
  const flowMatch = flowSpec?.value.match(/(\d[\d\s]*)/);
  const baseFlow = flowMatch
    ? parseInt(flowMatch[1].replace(/\s/g, ""), 10)
    : 5000;
  return parts.map((p, i) => ({
    power: p,
    flow: flowSpec
      ? `${Math.round(
          (baseFlow * (i + 1)) / parts.length
        ).toLocaleString()} лм`
      : "—",
  }));
}

interface ProductDetailClientProps {
  product: Product;
  category: Category;
  similarProducts: Product[];
}

export function ProductDetailClient({
  product,
  category,
  similarProducts,
}: ProductDetailClientProps) {
  const [activeTab, setActiveTab] = useState<"specs" | "dims" | "mods">("specs");
  const [selectedImage, setSelectedImage] = useState(product.image ?? "");

  const images = product.image ? [product.image, product.image, product.image] : [];
  const chips = parsePowerChips(product.specs);
  const specGroups = groupSpecs(product.specs);
  const modifications = parseModifications(product.specs);

  const baseName = product.slug.replace(/-/g, "_").toUpperCase();
  const downloads = [
    {
      title: "BIM-модель (Revit)",
      info: product.bimUrl
        ? `${baseName}_BIM.rfa — 2.4 MB`
        : "Доступно после регистрации",
      url: product.bimUrl,
      icon: Download,
      amber: !!product.bimUrl,
    },
    {
      title: "Фотометрия IES",
      info: product.iesUrl
        ? `${baseName}_100W.ies — 84 KB`
        : "Доступно после регистрации",
      url: product.iesUrl,
      icon: Download,
      amber: !!product.iesUrl,
    },
    {
      title: "Паспорт изделия",
      info: `${baseName}_passport.pdf — 1.2 MB`,
      url: undefined,
      icon: FileText,
      amber: false,
    },
  ];

  const referenceProjects = product.referenceProjects ?? [];
  const placeholderImg =
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format&fit=crop&q=70";
  const refImages = referenceProjects.map(() => product.image ?? placeholderImg);

  return (
    <div className="bg-white text-zinc-900">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <nav
          className="flex items-center gap-2 flex-wrap"
          style={{ fontSize: "0.8rem", color: "#a1a1aa" }}
        >
          <Link href="/" className="hover:text-amber-700 transition-colors">
            Главная
          </Link>
          <span>›</span>
          <Link
            href="/proektirovshchikam/katalog"
            className="hover:text-amber-700 transition-colors"
          >
            Продукция
          </Link>
          <span>›</span>
          <Link
            href={`/proektirovshchikam/katalog/${category.slug}`}
            className="hover:text-amber-700 transition-colors"
          >
            {category.name}
          </Link>
          <span>›</span>
          <span style={{ color: "#52525b" }}>{product.name}</span>
        </nav>
      </div>

      {/* Product main section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div
              className="relative rounded-[20px] overflow-hidden mb-3 border border-black/6"
              style={{
                aspectRatio: "4/3",
                backgroundColor: "#f4f4f5",
              }}
            >
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Box className="text-zinc-400" size={64} />
                </div>
              )}
              {product.bimUrl && (
                <a
                  href={product.bimUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-3.5 py-2.5 rounded-[10px] border border-black/8 transition-colors hover:border-amber-600/30"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Box size={16} className="text-amber-600" strokeWidth={2} />
                  <span
                    className="font-semibold"
                    style={{ fontSize: "0.75rem", color: "#52525b" }}
                  >
                    3D-вьюер
                  </span>
                </a>
              )}
            </div>
            <div className="flex gap-2.5">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className="w-[68px] h-[68px] rounded-[10px] overflow-hidden border-2 transition-colors shrink-0"
                  style={{
                    borderColor:
                      selectedImage === img
                        ? "#d97706"
                        : "transparent",
                  }}
                >
                  <Image
                    src={img}
                    alt=""
                    width={68}
                    height={68}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pt-2">
            <div
              className="mb-3 font-semibold uppercase tracking-[0.15em]"
              style={{ fontSize: "0.7rem", color: "#b45309" }}
            >
              {category.name} — Светильник
            </div>
            <h1
              className="font-black leading-tight mb-4"
              style={{ fontSize: "2.5rem", color: "#18181b" }}
            >
              {product.name}
            </h1>
            <p
              className="mb-7 leading-relaxed"
              style={{ color: "#71717a", fontSize: "1rem" }}
            >
              {product.description}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-7">
              {chips.map((chip) => (
                <span
                  key={chip.text}
                  className="px-3.5 py-1.5 rounded-lg text-[0.8125rem] font-semibold"
                  style={
                    chip.amber
                      ? {
                          background: "rgba(217,119,6,0.08)",
                          border: "1px solid rgba(217,119,6,0.15)",
                          color: "#b45309",
                        }
                      : {
                          background: "#f4f4f5",
                          border: "1px solid rgba(0,0,0,0.06)",
                          color: "#52525b",
                        }
                  }
                >
                  {chip.text}
                </span>
              ))}
            </div>

            {/* Warranty */}
            <div
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl mb-7"
              style={{
                background: "rgba(217,119,6,0.05)",
                border: "1px solid rgba(217,119,6,0.12)",
              }}
            >
              <Shield size={22} className="text-amber-600 shrink-0" />
              <div>
                <div
                  className="font-bold"
                  style={{ fontSize: "0.875rem", color: "#b45309" }}
                >
                  Гарантия 5 лет
                </div>
                <div
                  style={{ fontSize: "0.75rem", color: "#a1a1aa" }}
                >
                  Официальная от производителя
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap mb-8">
              <Link
                href="/kontakty"
                className="flex-1 min-w-[140px] px-7 py-3.5 rounded-xl text-base font-semibold text-center text-white transition-all duration-250 hover:shadow-lg"
                style={{
                  background: "#d97706",
                }}
              >
                Запросить КП
              </Link>
              <Link
                href="/kontakty"
                className="flex-1 min-w-[140px] px-7 py-3.5 rounded-xl text-base font-medium text-center transition-all duration-250 border"
                style={{
                  borderColor: "#d4d4d8",
                  color: "#18181b",
                }}
              >
                Задать вопрос
              </Link>
            </div>

            {/* Downloads */}
            <div>
              <div
                className="uppercase tracking-wider font-semibold mb-3"
                style={{ fontSize: "0.8rem", color: "#a1a1aa" }}
              >
                Документация
              </div>
              <div className="flex flex-col gap-2">
                {downloads.map((d) => {
                  const cardStyle = {
                    background: "#f9fafb",
                    border: "1px solid rgba(0,0,0,0.06)",
                  };
                  const content = (
                    <>
                      <div
                        className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                        style={
                          d.amber
                            ? {
                                background: "rgba(217,119,6,0.08)",
                                border: "1px solid rgba(217,119,6,0.15)",
                              }
                            : {
                                background: "#f4f4f5",
                                border: "1px solid rgba(0,0,0,0.06)",
                              }
                        }
                      >
                        <d.icon
                          size={18}
                          className={d.amber ? "text-amber-600" : "text-zinc-500"}
                          strokeWidth={2}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-semibold"
                          style={{ fontSize: "0.875rem", color: "#18181b" }}
                        >
                          {d.title}
                        </div>
                        <div
                          style={{ fontSize: "0.75rem", color: "#a1a1aa" }}
                        >
                          {d.info}
                        </div>
                      </div>
                      {d.url ? (
                        <ArrowRight
                          size={14}
                          className="text-zinc-400 shrink-0"
                          strokeWidth={2}
                        />
                      ) : d.title !== "Паспорт изделия" ? (
                        <Link
                          href="/proektirovshchikam/registraciya"
                          className="text-xs text-amber-600 hover:text-amber-700 shrink-0"
                        >
                          Зарегистрироваться
                        </Link>
                      ) : (
                        <ArrowRight
                          size={14}
                          className="text-zinc-400 shrink-0"
                          strokeWidth={2}
                        />
                      )}
                    </>
                  );
                  if (d.url) {
                    return (
                      <a
                        key={d.title}
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3.5 px-4 py-4 rounded-xl cursor-pointer transition-all duration-200 hover:border-amber-500/30 hover:bg-amber-500/3"
                        style={cardStyle}
                      >
                        {content}
                      </a>
                    );
                  }
                  return (
                    <div
                      key={d.title}
                      className="flex items-center gap-3.5 px-4 py-4 rounded-xl"
                      style={cardStyle}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs tabs */}
      <section
        className="border-t border-black/4"
        style={{ background: "#f9fafb" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div
            className="inline-flex gap-1.5 mb-8 rounded-xl p-1.5 border border-black/6 bg-white"
          >
            {(
              [
                ["specs", "Характеристики"],
                ["dims", "Габариты"],
                ["mods", "Модификации"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={
                  activeTab === id
                    ? {
                        background: "rgba(217,119,6,0.08)",
                        color: "#b45309",
                        border: "1px solid rgba(217,119,6,0.2)",
                      }
                    : {
                        color: "#a1a1aa",
                        border: "1px solid transparent",
                      }
                }
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === "specs" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Object.entries(specGroups).map(
                ([groupName, specs]) =>
                  specs.length > 0 && (
                    <div key={groupName}>
                      <h3
                        className="uppercase tracking-wider font-bold mb-4"
                        style={{
                          fontSize: "0.75rem",
                          color: "#a1a1aa",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {groupName}
                      </h3>
                      <div className="space-y-0">
                        {specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="flex justify-between py-3 border-b border-black/5 last:border-b-0"
                          >
                            <span
                              className="text-sm"
                              style={{ color: "#71717a" }}
                            >
                              {spec.label}
                            </span>
                            <span
                              className="text-sm font-semibold"
                            >
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          )}

          {activeTab === "dims" && (
            <div
              className="bg-white rounded-2xl p-10 border border-black/6 text-center"
            >
              <div
                className="mb-4"
                style={{ fontSize: "0.875rem", color: "#a1a1aa" }}
              >
                Чертёж с габаритами (мм)
              </div>
              <div
                className="w-full max-w-[600px] mx-auto rounded-xl border border-dashed border-black/10 flex flex-col items-center justify-center gap-2"
                style={{
                  aspectRatio: "16/9",
                  background: "#f9fafb",
                }}
              >
                <Box size={32} className="text-zinc-400" strokeWidth={1.5} />
                <span
                  style={{ fontSize: "0.875rem", color: "#a1a1aa" }}
                >
                  Габаритный чертёж
                </span>
                <span
                  style={{ fontSize: "0.75rem", color: "#d4d4d8" }}
                >
                  680 × 320 × 90 мм
                </span>
              </div>
            </div>
          )}

          {activeTab === "mods" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {modifications.length > 0
                ? modifications.map((mod, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[14px] p-5 border transition-colors"
                      style={{
                        borderColor:
                          i === 1
                            ? "rgba(217,119,6,0.25)"
                            : "rgba(0,0,0,0.06)",
                      }}
                    >
                      {i === 1 ? (
                        <div className="flex justify-between items-center mb-2">
                          <div
                            className="font-bold"
                            style={{ color: "#d97706" }}
                          >
                            {product.name} {mod.power}
                          </div>
                          <span
                            className="text-[0.65rem] font-semibold uppercase px-2 py-0.5 rounded"
                            style={{
                              background: "rgba(217,119,6,0.1)",
                              color: "#b45309",
                            }}
                          >
                            Топ
                          </span>
                        </div>
                      ) : (
                        <div
                          className="font-bold mb-2"
                          style={{ color: "#d97706" }}
                        >
                          {product.name} {mod.power}
                        </div>
                      )}
                      <div className="flex justify-between py-2 border-b border-black/5">
                        <span style={{ fontSize: "0.8125rem", color: "#71717a" }}>
                          Мощность
                        </span>
                        <span style={{ fontSize: "0.8125rem" }}>{mod.power}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-black/5 last:border-b-0">
                        <span style={{ fontSize: "0.8125rem", color: "#71717a" }}>
                          Поток
                        </span>
                        <span style={{ fontSize: "0.8125rem" }}>{mod.flow}</span>
                      </div>
                    </div>
                  ))
                : product.specs.slice(0, 3).map((spec, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[14px] p-5 border border-black/6"
                    >
                      <div
                        className="font-bold mb-2"
                        style={{ color: "#d97706" }}
                      >
                        {product.name}
                      </div>
                      <div className="flex justify-between py-2 border-b border-black/5">
                        <span style={{ fontSize: "0.8125rem", color: "#71717a" }}>
                          {spec.label}
                        </span>
                        <span style={{ fontSize: "0.8125rem" }}>{spec.value}</span>
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </section>

      {/* Related projects */}
      {referenceProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div
                className="mb-2 font-semibold uppercase tracking-wider"
                style={{ fontSize: "0.7rem", color: "#b45309" }}
              >
                Применение
              </div>
              <h2
                className="font-extrabold"
                style={{ fontSize: "1.4rem", color: "#18181b" }}
              >
                Объекты с {product.name}
              </h2>
            </div>
            <Link
              href="/portfolio"
              style={{ fontSize: "0.875rem", color: "#a1a1aa" }}
              className="hover:text-amber-700 transition-colors"
            >
              Все объекты →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {referenceProjects.map((ref, i) => (
              <Link
                key={ref.name}
                href={ref.url ?? "/portfolio"}
                className="block bg-white rounded-[14px] overflow-hidden border border-black/6 transition-all duration-300 hover:border-amber-500/30 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="h-[180px] overflow-hidden relative">
                  <Image
                    src={refImages[i] ?? placeholderImg}
                    alt={ref.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <div
                    className="uppercase tracking-wider mb-1"
                    style={{ fontSize: "0.7rem", color: "#b45309" }}
                  >
                    Объект — 2024
                  </div>
                  <h4
                    className="font-bold"
                    style={{ fontSize: "0.9rem", color: "#18181b" }}
                  >
                    {ref.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Similar products */}
      {similarProducts.length > 0 && (
        <section
          className="border-t border-black/4"
          style={{ background: "#f9fafb" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
            <h2
              className="font-extrabold mb-5"
              style={{ fontSize: "1.3rem", color: "#18181b" }}
            >
              Похожие продукты
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {similarProducts.map((p) => {
                const powerSpec = p.specs.find((s) =>
                  s.label.toLowerCase().includes("мощность")
                );
                const powerRange = powerSpec?.value ?? "—";
                return (
                  <Link
                    key={p.id}
                    href={`/proektirovshchikam/katalog/${p.categorySlug}/${p.slug}`}
                    className="block bg-white rounded-[14px] overflow-hidden border border-black/6 transition-all duration-300 hover:border-amber-500/30 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="h-[140px] relative overflow-hidden">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
                          <Box size={32} className="text-zinc-400" />
                        </div>
                      )}
                    </div>
                    <div className="p-3.5">
                      <div
                        className="font-bold mb-1"
                        style={{ fontSize: "0.875rem", color: "#18181b" }}
                      >
                        {p.name}
                      </div>
                      <div
                        style={{ fontSize: "0.75rem", color: "#a1a1aa" }}
                      >
                        {powerRange}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
