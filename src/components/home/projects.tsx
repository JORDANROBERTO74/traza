import Image from "next/image";
import { SectionHead } from "@/components/shared/section-head";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <SectionHead
          label={dict.home.projects.label}
          title={dict.home.projects.title}
          intro={dict.home.projects.intro}
        />

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {dict.projects.map((project, index) => (
            <article key={project.slug} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-stone">
                    {project.year} · {project.location}
                  </p>
                  <h3 className="mt-1.5 font-serif text-[26px] leading-tight tracking-tight md:text-[30px]">
                    {project.title}
                  </h3>
                </div>
                <span className="mt-1 shrink-0 text-[9px] uppercase tracking-[0.16em] text-terracotta">
                  {project.category}
                </span>
              </div>
              <p className="mt-2 max-w-[52ch] text-[13px] leading-6 text-stone">
                {project.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
