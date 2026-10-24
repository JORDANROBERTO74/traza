import { SectionHead } from "@/components/shared/section-head";
import { Process as ProcessSteps } from "@/components/shared/process";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="process" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHead
          label={dict.home.process.label}
          title={dict.home.process.title}
          intro={dict.home.process.intro}
        />

        <div className="mt-12">
          <ProcessSteps steps={dict.steps} />
        </div>
      </div>
    </section>
  );
}
