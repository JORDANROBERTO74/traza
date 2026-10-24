import { SectionHead } from "@/components/shared/section-head";
import { Process as ProcessSteps } from "@/components/shared/process";
import type { Dictionary } from "@/i18n/get-dictionary";

export function ServicesProcess({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHead
          label={dict.servicesPage.process.label}
          title={dict.servicesPage.process.title}
          intro={dict.servicesPage.process.intro}
        />

        <div className="mt-12">
          <ProcessSteps steps={dict.steps} />
        </div>
      </div>
    </section>
  );
}
