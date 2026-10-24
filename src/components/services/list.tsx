import { SectionHead } from "@/components/shared/section-head";
import { ServiceGrid } from "@/components/shared/service-grid";
import type { Dictionary } from "@/i18n/get-dictionary";

export function ServicesList({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHead
          label={dict.servicesPage.list.label}
          title={dict.servicesPage.list.title}
          intro={dict.servicesPage.list.intro}
        />

        <div className="mt-12">
          <ServiceGrid items={dict.services} />
        </div>
      </div>
    </section>
  );
}
