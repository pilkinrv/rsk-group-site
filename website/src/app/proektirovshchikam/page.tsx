import Link from "next/link";

export default function ProektirovshchikamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 inline-block">Проектировщикам</h1>
        <p className="text-zinc-600 mb-8">
          Каталог продукции, BIM-модели, IES-файлы, регистрация и чат с техспециалистами.
        </p>
        <Link
          href="/proektirovshchikam/katalog"
          className="inline-block px-6 py-3 amber-btn rounded-xl transition shadow-lg shadow-amber-600/25"
        >
          Перейти в каталог
        </Link>
      </div>
    </div>
  );
}
