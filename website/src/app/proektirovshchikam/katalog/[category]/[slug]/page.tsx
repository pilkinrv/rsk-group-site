import type { Metadata } from "next";
import { products, categories } from "@/data/catalog";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "./ProductDetailClient";
import type { Product } from "@/types/catalog";

const SITE_URL = "https://рскгрупп.рф";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const product = products.find(
    (p) => p.categorySlug === category && p.slug === slug
  );
  if (!product) return {};
  return {
    title: product.name,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 160),
      images: product.image ? [{ url: product.image }] : [],
    },
  };
}

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

function getSimilarProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) => p.categorySlug === product.categorySlug && p.id !== product.id
    )
    .slice(0, limit);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = products.find(
    (p) => p.categorySlug === category && p.slug === slug
  );
  if (!product) notFound();

  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const similarProducts = getSimilarProducts(product);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { "@type": "Brand", name: "РСК ГРУПП" },
    manufacturer: {
      "@type": "Organization",
      name: "ООО «РСК ГРУПП»",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "RUB",
      seller: { "@type": "Organization", name: "ООО «РСК ГРУПП»" },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Продукция",
        item: `${SITE_URL}/proektirovshchikam/katalog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cat.name,
        item: `${SITE_URL}/proektirovshchikam/katalog/${category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `${SITE_URL}/proektirovshchikam/katalog/${category}/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetailClient
        product={product}
        category={cat}
        similarProducts={similarProducts}
      />
    </>
  );
}
