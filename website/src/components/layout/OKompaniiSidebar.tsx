"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const oKompaniiLinks = [
  { href: "/o-kompanii/o-nas", label: "О нас" },
  { href: "/o-kompanii/istoriya", label: "История" },
  { href: "/o-kompanii/tsennosti", label: "Ценности" },
  { href: "/o-kompanii/novosti", label: "Новости" },
  { href: "/o-kompanii/proizvodstvo", label: "Производство" },
  { href: "/o-kompanii/ekskursiya", label: "Экскурсия на производство" },
  { href: "/o-kompanii/otdel-servisa", label: "Отдел сервиса" },
  { href: "/o-kompanii/poleznoe", label: "Полезное" },
];

export function OKompaniiSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <aside>
      {/* Mobile toggle */}
      <button
        type="button"
        className="lg:hidden flex items-center gap-2 text-sm font-medium text-zinc-600 mb-4 w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span>Разделы «О компании»</span>
        <ChevronDown
          size={16}
          className={`ml-auto transition-transform ${mobileOpen ? "rotate-180" : ""}`}
        />
      </button>

      <nav
        aria-label="Навигация раздела"
        className={`${mobileOpen ? "block" : "hidden"} lg:block`}
      >
        <ul className="flex flex-col gap-0.5">
          {oKompaniiLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-amber-50 text-amber-700 font-semibold border-l-[3px] border-amber-600"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
