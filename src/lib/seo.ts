import type { Metadata } from "next";
import { site } from "@/config/site";
import { locales, type Locale } from "@/i18n/config";

type MetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
}: MetadataInput): Metadata {
  const slug = path ? `/${path}` : "";
  const canonical = `${site.url}/${locale}${slug}`;
  const languages = Object.fromEntries(
    locales.map((code) => [code, `${site.url}/${code}${slug}`]),
  );

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    applicationName: site.name,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": `${site.url}/en${slug}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      title,
      description,
      url: canonical,
      images: [
        {
          url: `${site.url}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
