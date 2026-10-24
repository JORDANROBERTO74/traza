import type { Dictionary } from "@/i18n/get-dictionary";

export function Metrics({ dict }: { dict: Dictionary }) {
  return (
    <section id="metrics" className="scroll-mt-24 bg-graphite text-arena">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-arena/60">
          {dict.home.metrics.label}
        </p>
        <h2 className="mt-4 max-w-[20ch] font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl">
          {dict.home.metrics.title}
        </h2>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-arena/15 bg-arena/15 lg:grid-cols-4">
          {dict.stats.map((stat) => (
            <div key={stat.label} className="bg-graphite p-7 md:p-9">
              <dd className="font-serif text-5xl tracking-tight text-terracotta md:text-6xl">
                {stat.value}
              </dd>
              <dt className="mt-3 text-[10px] uppercase tracking-[0.16em] text-arena/70">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
