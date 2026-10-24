import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";

const paths = ["", "about", "services"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.url}/${locale}${path ? `/${path}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path ? 0.8 : 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [
            code,
            `${site.url}/${code}${path ? `/${path}` : ""}`,
          ]),
        ),
      },
    })),
  );
}
