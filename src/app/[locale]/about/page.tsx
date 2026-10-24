import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Approach } from "@/components/about/approach";
import { Expertise } from "@/components/about/expertise";
import { AboutHero } from "@/components/about/hero";
import { Story } from "@/components/about/story";
import { Team } from "@/components/about/team";
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
    path: "about",
    title: `${dict.about.hero.title} — ${site.name}`,
    description: dict.about.hero.intro,
  });
}

export default async function AboutPage({
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
      <AboutHero dict={dict} />
      <Story dict={dict} />
      <Approach dict={dict} />
      <Expertise dict={dict} />
      <Team dict={dict} />
      <CtaBand dict={dict} />
    </main>
  );
}
