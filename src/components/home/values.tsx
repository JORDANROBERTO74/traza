import { SectionHead } from "@/components/shared/section-head";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Values({ dict }: { dict: Dictionary }) {
  return (
    <section id="values" className="scroll-mt-24 border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHead
          label={dict.home.values.label}
          title={dict.home.values.title}
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {dict.values.map((value, index) => (
            <article key={value.title} className="bg-paper p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                  {value.title}
                </h3>
                <span className="font-serif text-[13px] text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 max-w-[46ch] text-[13px] leading-6 text-stone">
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
