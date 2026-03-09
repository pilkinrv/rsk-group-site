import { PortfolioClient } from "./PortfolioClient";

export const metadata = {
  title: "Наши объекты — РСК ГРУПП",
  description:
    "Реализованные проекты с освещением РСК ГРУПП: парки, жилые комплексы, общественные пространства по всей России.",
};

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 inline-block">Наши объекты</h1>
        <p className="text-zinc-600 mb-10 max-w-2xl">
          Реализованные проекты по всей России — более 60 объектов: парки, жилые
          комплексы, набережные и общественные пространства.
        </p>
        <PortfolioClient />
      </div>
    </div>
  );
}
