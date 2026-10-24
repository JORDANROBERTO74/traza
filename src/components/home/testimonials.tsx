import type { Dictionary } from "@/i18n/get-dictionary";

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-graphite text-arena">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-arena/60">
          {dict.home.testimonials.label}
        </p>
        <h2 className="mt-4 max-w-[18ch] font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl">
          {dict.home.testimonials.title}
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {dict.testimonials.map((item) => (
            <figure key={item.name} className="flex flex-col">
              <blockquote className="font-serif text-[22px] leading-[1.3] tracking-tight text-balance md:text-[24px]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-arena/20 pt-4 text-[9px] uppercase tracking-[0.16em] text-arena/70">
                {item.name} · {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
