import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

export function CtaBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-graphite text-arena">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 px-5 py-16 md:px-8 md:py-24 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <h2 className="font-serif text-4xl leading-[1.02] tracking-tight text-balance md:text-6xl">
            {dict.cta.title.lead}{" "}
            <em className="italic text-terracotta">
              {dict.cta.title.accent}
            </em>
          </h2>
          <p className="mt-5 max-w-[44ch] text-[15px] leading-7 text-arena/70">
            {dict.cta.text}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-2 bg-terracotta px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.14em] text-arena transition hover:bg-terracotta-deep"
          >
            {dict.cta.primary}
            <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center justify-center gap-2 border border-arena/25 px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.14em] text-arena transition hover:border-arena/50"
          >
            {dict.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
