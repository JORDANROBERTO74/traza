import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesHero } from "@/components/services/hero";
import { ServicesList } from "@/components/services/list";
import { ServicesProcess } from "@/components/services/process";
import { CtaBand } from "@/components/shared/cta-band";
import { site } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo";

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
    path: "services",
    title: `${dict.servicesPage.hero.title} — ${site.name}`,
    description: dict.servicesPage.hero.intro,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <main id="main">
      <ServicesHero dict={dict} />
      <ServicesList dict={dict} />
      <ServicesProcess dict={dict} />
      <CtaBand dict={dict} />
    </main>
  );
}
