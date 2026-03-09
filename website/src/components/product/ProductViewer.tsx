"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Box } from "lucide-react";

const Product3DViewer = dynamic(
  () => import("./Product3DViewer").then((m) => ({ default: m.Product3DViewer })),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-square glass-card rounded-2xl flex items-center justify-center text-zinc-500 animate-pulse">
        <Box size={40} className="text-zinc-600" />
      </div>
    ),
  }
);

interface ProductViewerProps {
  modelUrl?: string;
  image?: string;
  productName: string;
}

export function ProductViewer({ modelUrl, image, productName }: ProductViewerProps) {
  const [activeTab, setActiveTab] = useState<"photo" | "3d">(
    modelUrl ? "3d" : "photo"
  );

  return (
    <div>
      {modelUrl && image && (
        <div className="flex gap-2 mb-3">
          <button
            type="button"
            onClick={() => setActiveTab("photo")}
            className={`px-4 py-1.5 rounded-full text-sm transition ${
              activeTab === "photo"
                ? "bg-amber-500 text-zinc-950 font-medium shadow-lg shadow-amber-500/20"
                : "glass-card text-zinc-400 hover:text-white"
            }`}
          >
            Фото
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("3d")}
            className={`px-4 py-1.5 rounded-full text-sm transition ${
              activeTab === "3d"
                ? "bg-amber-500 text-zinc-950 font-medium shadow-lg shadow-amber-500/20"
                : "glass-card text-zinc-400 hover:text-white"
            }`}
          >
            3D модель
          </button>
        </div>
      )}
      {activeTab === "3d" && modelUrl ? (
        <Product3DViewer
          modelUrl={modelUrl}
          fallbackImage={image}
          productName={productName}
        />
      ) : (
        <div className="relative aspect-square glass-card rounded-2xl overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={productName}
              fill
              className="object-contain p-6"
              unoptimized
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-500">
              <div className="text-center">
                <Box size={64} className="mx-auto mb-3 text-zinc-600" />
                <p className="text-sm">Фото продукта</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
