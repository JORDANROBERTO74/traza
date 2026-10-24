import { SectionHead } from "@/components/shared/section-head";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Team({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHead
          label={dict.about.team.label}
          title={dict.about.team.title}
          intro={dict.about.team.intro}
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {dict.people.map((person) => (
            <article key={person.name} className="bg-arena p-8 md:p-9">
              <h3 className="font-serif text-2xl leading-tight tracking-tight">
                {person.name}
              </h3>
              <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.16em] text-terracotta">
                {person.role}
              </p>
              <p className="mt-4 text-[13px] leading-6 text-stone">
                {person.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
