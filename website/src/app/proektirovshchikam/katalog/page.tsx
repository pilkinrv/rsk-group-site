import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/data/catalog";
import { ProductCard } from "@/components/catalog/ProductCard";

export const metadata: Metadata = {
  title: "Каталог продукции — РСК ГРУПП",
  description:
    "12 серий светильников для наружного и внутреннего освещения. Собственное производство, гарантия 5 лет. BIM-модели, IES-файлы для проектировщиков.",
};

export default function KatalogPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <nav className="flex gap-2 items-center mb-5 text-[0.8rem] text-zinc-400">
            <Link href="/" className="hover:text-amber-600 transition-colors">
              Главная
            </Link>
            <span aria-hidden>›</span>
            <span className="text-zinc-500">Продукция</span>
          </nav>

          <div className="section-label mb-4">Каталог</div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-zinc-900">
                Продукция{" "}
                <span className="text-amber-600">РСК ГРУПП</span>
              </h1>
              <p className="text-zinc-500 text-base mt-3 max-w-[480px] leading-relaxed">
                12 серий светильников для наружного и внутреннего освещения.
                Собственное производство, гарантия 5 лет.
              </p>
            </div>
            <Link
              href="/kontakty"
              className="px-6 py-3 rounded-xl text-sm outline-btn shrink-0 inline-block"
            >
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>

      {/* Category cards (BEGA-style) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/proektirovshchikam/katalog/${cat.slug}`}
              className="cat-card block h-[310px] relative"
            >
              {cat.image && (
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                  priority
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top,rgba(255,255,255,0.95) 0%,rgba(255,255,255,0.4) 50%,transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end gap-4">
                <div>
                  <div className="text-[0.7rem] text-amber-700 uppercase tracking-widest font-semibold mb-1.5">
                    {cat.productCount}{" "}
                    {cat.productCount === 1
                      ? "продукт"
                      : cat.productCount < 5
                        ? "продукта"
                        : "продуктов"}
                  </div>
                  <h2 className="text-2xl font-extrabold text-zinc-900 mb-1.5">
                    {cat.name}
                  </h2>
                  <p className="text-zinc-500 text-sm max-w-[300px]">
                    {cat.description}
                  </p>
                </div>
                <div
                  className="cat-arrow shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(217,119,6,0.1)",
                    border: "1px solid rgba(217,119,6,0.3)",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Product grids by category */}
      {categories.map((cat, index) => {
        const categoryProducts = products.filter(
          (p) => p.categorySlug === cat.slug
        );
        if (categoryProducts.length === 0) return null;

        return (
          <section
            key={cat.id}
            id={cat.slug}
            className={
              index % 2 === 1
                ? "bg-zinc-50 border-t border-zinc-200/50"
                : ""
            }
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-7 pb-[18px] border-b border-zinc-200">
                <div>
                  <div className="section-label mb-2">Категория</div>
                  <h2 className="text-2xl font-extrabold text-zinc-900">
                    {cat.name}
                  </h2>
                </div>
                <span className="text-zinc-400 text-sm">
                  {categoryProducts.length}{" "}
                  {categoryProducts.length === 1
                    ? "продукт"
                    : categoryProducts.length < 5
                      ? "продукта"
                      : "продуктов"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categoryProducts.map((product) => (
                  <ProductCard
                  key={product.id}
                  product={product}
                  categorySlug={product.categorySlug}
                />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA for designers */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div
          className="rounded-[20px] p-11 flex flex-wrap justify-between items-center gap-5"
          style={{
            background: "#f9fafb",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div>
            <div className="section-label mb-3">Для проектировщиков</div>
            <h3 className="text-xl font-extrabold text-zinc-900 mb-2">
              Нужны BIM-модели и IES-файлы?
            </h3>
            <p className="text-zinc-500 text-sm max-w-[400px]">
              Зарегистрируйтесь — получите доступ к технической документации.
            </p>
          </div>
          <Link
            href="/proektirovshchikam"
            className="px-6 py-3 rounded-xl text-sm font-semibold outline-btn shrink-0 inline-block"
          >
            Раздел для проектировщиков →
          </Link>
        </div>
      </section>
    </>
  );
}
