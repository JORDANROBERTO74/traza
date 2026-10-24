import { ArrowUpRight } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-terracotta">
              {dict.home.contact.label}
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight text-balance">
              {dict.home.contact.title.lead}{" "}
              <em className="italic text-terracotta">
                {dict.home.contact.title.accent}
              </em>
            </h2>
            <p className="mt-6 max-w-[48ch] text-[15px] leading-7 text-stone">
              {dict.home.contact.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 bg-terracotta px-5 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-arena transition hover:bg-terracotta-deep"
              >
                {dict.home.contact.emailLabel}
                <ArrowUpRight className="size-3.5" />
              </a>
              <CopyEmail
                email={site.email}
                copyLabel={dict.home.contact.copy}
                copiedLabel={dict.home.contact.copied}
              />
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-[0.14em] text-stone">
              {dict.home.contact.availability}
            </p>
            <p className="mt-2 text-[11px] text-stone">
              {dict.home.contact.fees}
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <dl className="border-y border-line">
              <div className="flex justify-between gap-4 border-b border-line py-4">
                <dt className="text-[9px] uppercase tracking-[0.14em] text-stone">
                  {dict.home.contact.phoneLabel}
                </dt>
                <dd className="text-[12.5px] font-medium">
                  <a
                    href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                    className="transition hover:text-terracotta"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line py-4">
                <dt className="text-[9px] uppercase tracking-[0.14em] text-stone">
                  {dict.home.contact.emailLabel}
                </dt>
                <dd className="text-[12.5px] font-medium">
                  <a
                    href={`mailto:${site.email}`}
                    className="transition hover:text-terracotta"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-4">
                <dt className="text-[9px] uppercase tracking-[0.14em] text-stone">
                  {dict.home.contact.locationLabel}
                </dt>
                <dd className="text-right text-[12.5px] font-medium">
                  {dict.footer.address}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
