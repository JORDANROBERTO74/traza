import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
  ];

  return (
    <footer className="border-t border-line bg-arena">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <BrandMark className="size-6 text-terracotta" />
              <p className="font-serif text-2xl leading-none tracking-tight">
                {dict.common.brand}
              </p>
            </div>
            <p className="mt-4 max-w-[34ch] text-[13px] leading-6 text-stone">
              {dict.footer.tagline}
            </p>
          </div>

          <nav
            aria-label={dict.footer.navLabel}
            className="md:col-span-3"
          >
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-stone">
              {dict.footer.navLabel}
            </p>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-graphite transition hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-stone">
              {dict.home.contact.emailLabel}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block text-[13px] text-graphite transition hover:text-terracotta"
            >
              {site.email}
            </a>
            <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.16em] text-stone">
              {dict.home.contact.phoneLabel}
            </p>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="mt-3 block text-[13px] text-graphite transition hover:text-terracotta"
            >
              {site.phone}
            </a>
            <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.16em] text-stone">
              {dict.home.contact.locationLabel}
            </p>
            <p className="mt-3 text-[13px] leading-6 text-stone">
              {dict.footer.address}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] text-stone">{dict.footer.rights}</span>
          <a
            href="#main"
            className="text-[10px] uppercase tracking-[0.14em] text-stone transition hover:text-terracotta"
          >
            {dict.common.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
