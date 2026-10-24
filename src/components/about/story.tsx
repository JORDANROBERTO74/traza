import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Story({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-terracotta">
              {dict.about.story.label}
            </p>
            <h2 className="mt-4 max-w-[16ch] font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl">
              {dict.about.story.title}
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-7 text-stone">
              {dict.about.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <figure className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src="/images/about-story.webp"
                alt={dict.about.story.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-stone">
              <span>{dict.about.story.imageCaption}</span>
              <span>TR · 02</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
