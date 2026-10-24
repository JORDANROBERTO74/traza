import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-space",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f1ec",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const active = isLocale(locale) ? locale : "en";
  const dict = getDictionary(active);

  return buildMetadata({
    locale: active,
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-terracotta focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-arena"
        >
          {dict.common.skip}
        </a>
        <SiteHeader dict={dict} locale={locale} />
        {children}
        <SiteFooter dict={dict} locale={locale} />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
