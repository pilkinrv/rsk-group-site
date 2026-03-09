"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { OKompaniiSidebar, oKompaniiLinks } from "@/components/layout/OKompaniiSidebar";

function Breadcrumbs({ pathname }: { pathname: string }) {
  const subpage = oKompaniiLinks.find((l) => l.href === pathname);

  return (
    <nav
      aria-label="Хлебные крошки"
      className="flex items-center gap-1.5 text-sm text-zinc-400 mb-8 flex-wrap"
    >
      <Link href="/" className="hover:text-amber-700 transition-colors">
        Главная
      </Link>
      <ChevronRight size={14} className="shrink-0" />
      {subpage ? (
        <>
          <Link
            href="/o-kompanii"
            className="hover:text-amber-700 transition-colors"
          >
            О компании
          </Link>
          <ChevronRight size={14} className="shrink-0" />
          <span className="text-zinc-700 font-medium">{subpage.label}</span>
        </>
      ) : (
        <span className="text-zinc-700 font-medium">О компании</span>
      )}
    </nav>
  );
}

export default function OKompaniiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHub = pathname === "/o-kompanii";

  return (
    <section className="py-12 bg-white min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs pathname={pathname} />

        {isHub ? (
          children
        ) : (
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <OKompaniiSidebar />
            <div>{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}
