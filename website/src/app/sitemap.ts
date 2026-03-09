import type { MetadataRoute } from "next";
import { products, categories } from "@/data/catalog";

const BASE_URL = "https://рскгрупп.рф";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/zakazchiku`, priority: 0.9 },
    { url: `${BASE_URL}/proektirovshchikam`, priority: 0.9 },
    { url: `${BASE_URL}/proektirovshchikam/katalog`, priority: 0.9 },
    { url: `${BASE_URL}/portfolio`, priority: 0.8 },
    { url: `${BASE_URL}/o-kompanii`, priority: 0.7 },
    { url: `${BASE_URL}/kontakty`, priority: 0.7 },
    { url: `${BASE_URL}/garantii-ot-proizvoditelya`, priority: 0.6 },
    { url: `${BASE_URL}/dostavka-i-oplata`, priority: 0.6 },
    { url: `${BASE_URL}/proektirovshchikam/registraciya`, priority: 0.7 },
    { url: `${BASE_URL}/politika-konfidentsialnosti`, priority: 0.3 },
  ];

  const categoryPages = categories.map((cat) => ({
    url: `${BASE_URL}/proektirovshchikam/katalog/${cat.slug}`,
    priority: 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${BASE_URL}/proektirovshchikam/katalog/${p.categorySlug}/${p.slug}`,
    priority: 0.7,
  }));

  const now = new Date();

  return [...staticPages, ...categoryPages, ...productPages].map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));
}
