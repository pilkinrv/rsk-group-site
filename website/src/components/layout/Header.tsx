"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { CallbackModal } from "@/components/CallbackModal";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/proektirovshchikam/katalog", label: "Продукция" },
  { href: "/zakazchiku", label: "Заказчику" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/portfolio", label: "Наши объекты" },
  { href: "/kontakty", label: "Контакты" },
];

const SCROLL_THRESHOLD = 40;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [mobileMenuOpen]);

  const headerStyles = scrolled
    ? {
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(20px)",
        borderBottomColor: "rgba(0,0,0,0.06)",
      }
    : {
        background: "rgba(255,255,255,0)",
        backdropFilter: "blur(0px)",
        borderBottomColor: "transparent",
      };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-400"
        style={{
          ...headerStyles,
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-white shrink-0"
              style={{
                background: "linear-gradient(135deg, #d97706, #b45309)",
              }}
            >
              РСК
            </div>
            <span className="font-bold text-zinc-900 text-lg tracking-tight">
              РСК ГРУПП
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Основная навигация"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+79600796853"
              className="hidden md:block text-zinc-400 hover:text-zinc-700 text-sm transition-colors"
            >
              +7 960 079-68-53
            </a>
            <button
              type="button"
              onClick={() => setCallbackOpen(true)}
              className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all hover:shadow-lg hover:shadow-amber-600/20"
            >
              Заказать звонок
            </button>

            <button
              type="button"
              className="lg:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 bg-white/95 backdrop-blur-xl">
            <nav
              className="flex flex-col gap-4"
              aria-label="Мобильное меню"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-500 hover:text-zinc-900 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+79600796853"
                className="text-zinc-500 hover:text-zinc-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                +7 960 079-68-53
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCallbackOpen(true);
                }}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all w-fit"
              >
                Заказать звонок
              </button>
            </nav>
          </div>
        )}
      </header>

      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
}
