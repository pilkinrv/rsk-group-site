import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://рскгрупп.рф";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "РСК ГРУПП — Производство светодиодного освещения",
    template: "%s — РСК ГРУПП",
  },
  description:
    "Светодиодное осветительное оборудование от российского производителя. Производство полного цикла, гарантия 5 лет, изготовление от 21 дня. Казань.",
  keywords: [
    "светодиодные светильники",
    "производство освещения",
    "наружное освещение",
    "парковые светильники",
    "LED освещение",
    "РСК ГРУПП",
    "Казань",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "РСК ГРУПП",
    title: "РСК ГРУПП — Производство светодиодного освещения",
    description:
      "Светодиодное осветительное оборудование от российского производителя. Производство полного цикла, гарантия 5 лет.",
    images: [
      {
        url: "https://xn--c1anqabcet.xn--p1ai/wp-content/uploads/2021/06/RSC_Nab_Kazanki_08.jpg",
        width: 1024,
        height: 728,
        alt: "РСК ГРУПП — освещение набережной Казанки",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ООО «РСК ГРУПП»",
  url: SITE_URL,
  logo: "https://xn--c1anqabcet.xn--p1ai/wp-content/themes/linkci/img/logo.png",
  description:
    "Производитель светодиодного осветительного оборудования. Производство полного цикла в Казани.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Теплично-Комбинатская ул., д. 5В",
    addressLocality: "Казань",
    postalCode: "420036",
    addressCountry: "RU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-960-079-68-53",
    contactType: "sales",
    availableLanguage: "Russian",
    hoursAvailable: "Mo-Fr 08:00-17:00",
  },
  sameAs: [
    "https://vk.com/rscgroupp",
    "https://t.me/rscgroupp",
    "https://www.youtube.com/@rscgroupp",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-white text-zinc-900`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-600 focus:text-white focus:rounded"
        >
          Перейти к контенту
        </a>
        <Header />
        <main id="main-content" className="min-h-screen pt-[76px] pb-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
