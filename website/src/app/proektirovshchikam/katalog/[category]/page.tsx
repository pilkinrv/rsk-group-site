import type { Metadata } from "next";
import Link from "next/link";
import { products, categories } from "@/data/catalog";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/catalog/ProductCard";

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} — РСК ГРУПП`,
    description:
      cat.description ??
      `Светодиодные светильники серии ${cat.name}. Производство РСК ГРУПП.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const categoryProducts = products.filter((p) => p.categorySlug === category);

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
            <Link
              href="/proektirovshchikam/katalog"
              className="hover:text-amber-600 transition-colors"
            >
              Продукция
            </Link>
            <span aria-hidden>›</span>
            <span className="text-zinc-500">{cat.name}</span>
          </nav>

          <div className="section-label mb-4">Категория</div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-zinc-900">
              {cat.name}
            </h1>
            <span className="text-zinc-400 text-sm shrink-0">
              {categoryProducts.length}{" "}
              {categoryProducts.length === 1
                ? "продукт"
                : categoryProducts.length < 5
                  ? "продукта"
                  : "продуктов"}
            </span>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categorySlug={category}
            />
          ))}
        </div>
      </section>

      {/* Back to catalog */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <Link
          href="/proektirovshchikam/katalog"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
        >
          ← Весь каталог
        </Link>
      </section>
    </>
  );
}
