import { SectionHead } from "@/components/shared/section-head";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Approach({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHead
          label={dict.about.approach.label}
          title={dict.about.approach.title}
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {dict.about.approach.items.map((item, index) => (
            <article key={item.title} className="bg-arena p-8 md:p-9">
              <span className="font-serif text-4xl text-terracotta md:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-serif text-2xl leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-stone">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
