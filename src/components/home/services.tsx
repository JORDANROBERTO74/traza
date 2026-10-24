import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/shared/section-head";
import { ServiceGrid } from "@/components/shared/service-grid";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Services({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section id="services" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHead
          label={dict.home.services.label}
          title={dict.home.services.title}
          intro={dict.home.services.intro}
        />

        <div className="mt-12">
          <ServiceGrid items={dict.services} />
        </div>

        <Link
          href={`/${locale}/services`}
          className="group mt-10 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-graphite"
        >
          {dict.home.services.link}
          <span className="h-px w-5 bg-terracotta transition-all group-hover:w-8" />
          <ArrowRight className="size-3.5 text-terracotta" />
        </Link>
      </div>
    </section>
  );
}
