import Link from "next/link";

const productLinks = [
  { href: "/proektirovshchikam/katalog/naruzhnoe-osveshhenie", label: "Наружное освещение" },
  { href: "/proektirovshchikam/katalog/vnutrennee-osveshhenie", label: "Внутреннее освещение" },
  { href: "/proektirovshchikam/katalog/naruzhnoe-osveshhenie/rsc-globe", label: "RSC GLOBE" },
];

const companyLinks = [
  { href: "/o-kompanii/o-nas", label: "О нас" },
  { href: "/o-kompanii/istoriya", label: "История" },
  { href: "/o-kompanii/proizvodstvo", label: "Производство" },
  { href: "/o-kompanii/tsennosti", label: "Ценности" },
  { href: "/o-kompanii/otdel-servisa", label: "Отдел сервиса" },
  { href: "/o-kompanii/novosti", label: "Новости" },
  { href: "/o-kompanii/poleznoe", label: "Полезное" },
  { href: "/o-kompanii/ekskursiya", label: "Экскурсия" },
];

const socialLinks = [
  { href: "https://vk.com/rscgroupp", label: "ВК" },
  { href: "https://t.me/rscgroupp", label: "TG" },
  { href: "https://youtube.com/@rscgroupp", label: "YT" },
];

export function Footer() {
  return (
    <footer className="bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Logo + tagline + social */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-white"
                style={{ background: "linear-gradient(135deg, #d97706, #b45309)" }}
              >
                РСК
              </div>
              <span className="font-bold text-white text-lg">РСК ГРУПП</span>
            </Link>
            <p className="text-[#71717a] text-sm leading-relaxed mb-5">
              Производитель LED-оборудования полного цикла. Казань, с 2016 года.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label === "ВК" ? "ВКонтакте" : social.label === "TG" ? "Telegram" : "YouTube"}
                  className="w-[34px] h-[34px] rounded-lg bg-[#27272a] flex items-center justify-center text-[#a1a1aa] text-xs font-bold hover:bg-amber-600 hover:text-white transition-all"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Продукция */}
          <div>
            <h4 className="text-white font-semibold text-[0.8rem] uppercase tracking-widest mb-4">
              Продукция
            </h4>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#71717a] text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Компания */}
          <div>
            <h4 className="text-white font-semibold text-[0.8rem] uppercase tracking-widest mb-4">
              Компания
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#71717a] text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Контакты */}
          <div>
            <h4 className="text-white font-semibold text-[0.8rem] uppercase tracking-widest mb-4">
              Контакты
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="text-[#71717a]">
                420036, Казань,
                <br />
                Теплично-Комбинатская, 5В
              </li>
              <li>
                <a
                  href="tel:+79600796853"
                  className="text-[#a1a1aa] hover:text-amber-400 transition-colors"
                >
                  +7 960 079-68-53
                </a>
              </li>
              <li>
                <a
                  href="mailto:mail@rsc-groupp.ru"
                  className="text-[#a1a1aa] hover:text-amber-400 transition-colors"
                >
                  mail@rsc-groupp.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#3f3f46] text-[0.75rem]">
            © {new Date().getFullYear()} ООО «РСК ГРУПП» — ИНН 1657223686
          </p>
          <Link
            href="/politika-konfidentsialnosti"
            className="text-[#3f3f46] text-[0.75rem] hover:text-zinc-400 transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
