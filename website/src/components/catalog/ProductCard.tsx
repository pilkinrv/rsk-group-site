import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/catalog";

function getPowerFromSpecs(specs: Product["specs"]): string | null {
  const spec = specs.find((s) => s.label.toLowerCase().includes("мощность"));
  return spec?.value ?? null;
}

function getIpFromSpecs(specs: Product["specs"]): string | null {
  const spec = specs.find((s) =>
    s.label.toLowerCase().includes("степень защиты")
  );
  if (!spec) return null;
  const match = spec.value.match(/IP\d+/i);
  return match ? match[0].toUpperCase() : null;
}

function getProductTypeLabel(categorySlug: string): string {
  return categorySlug === "naruzhnoe-osveshhenie"
    ? "Наружный"
    : "Внутренний";
}

export function ProductCard({
  product,
  categorySlug,
}: {
  product: Product;
  categorySlug: string;
}) {
  const power = getPowerFromSpecs(product.specs);
  const ip = getIpFromSpecs(product.specs);
  const typeLabel = getProductTypeLabel(categorySlug);
  const shortDesc =
    product.description.length > 80
      ? product.description.slice(0, 80).trim() + "…"
      : product.description;

  return (
    <Link
      href={`/proektirovshchikam/katalog/${categorySlug}/${product.slug}`}
      className="prod-card block bg-white"
    >
      <div
        className="relative h-[200px] overflow-hidden bg-zinc-100"
        style={{ minHeight: "200px" }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="prod-img object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm">
            Фото продукта
          </div>
        )}
        {ip && (
          <span
            className="prod-badge absolute top-2.5 right-2.5"
            style={{
              background: "rgba(217,119,6,0.1)",
              color: "#b45309",
            }}
          >
            {ip}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="text-[0.7rem] text-zinc-400 uppercase tracking-wider mb-1">
          {typeLabel}
        </div>
        <h3 className="font-bold text-[0.9375rem] text-zinc-900 mb-1.5">
          {product.name}
        </h3>
        <p className="text-zinc-500 text-[0.8rem] leading-snug mb-2.5 line-clamp-2">
          {shortDesc}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[0.8rem] text-zinc-400">{power ?? "—"}</span>
          <span className="text-amber-600 text-[0.8rem] font-semibold">
            Подробнее →
          </span>
        </div>
      </div>
    </Link>
  );
}
