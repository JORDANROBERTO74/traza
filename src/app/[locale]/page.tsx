import { notFound } from "next/navigation";
import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { Metrics } from "@/components/home/metrics";
import { Process } from "@/components/home/process";
import { Projects } from "@/components/home/projects";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { Values } from "@/components/home/values";
import { site } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    description: dict.meta.description,
    url: `${site.url}/${locale}`,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1204 East Cesar Chavez St",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78702",
      addressCountry: "US",
    },
    areaServed: "Austin, Texas",
    foundingDate: "2012",
  };

  return (
    <>
      <main id="main">
        <Hero dict={dict} />
        <Metrics dict={dict} />
        <Services dict={dict} locale={locale} />
        <Process dict={dict} />
        <Values dict={dict} />
        <Projects dict={dict} />
        <Testimonials dict={dict} />
        <Contact dict={dict} />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
