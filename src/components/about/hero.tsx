import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

export function AboutHero({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-terracotta">
            {dict.about.hero.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-[clamp(2.75rem,5.5vw,5rem)] leading-[0.95] tracking-tight text-balance">
            {dict.about.hero.title}
          </h1>
          <p className="mt-8 max-w-[46ch] text-[15px] leading-7 text-stone">
            {dict.about.hero.intro}
          </p>
        </div>

        <figure className="lg:col-span-6">
          <div className="relative aspect-[16/11] overflow-hidden bg-sand">
            <Image
              src="/images/about-hero.webp"
              alt={dict.about.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
