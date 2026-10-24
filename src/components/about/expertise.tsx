import { SectionHead } from "@/components/shared/section-head";
import { ServiceGrid } from "@/components/shared/service-grid";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Expertise({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHead
          label={dict.about.expertise.label}
          title={dict.about.expertise.title}
        />

        <div className="mt-12">
          <ServiceGrid items={dict.services} />
        </div>
      </div>
    </section>
  );
}
