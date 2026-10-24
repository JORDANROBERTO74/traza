import type { Service } from "@/i18n/dictionaries/en";

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, index) => (
        <article key={service.title} className="group bg-arena p-7 md:p-9">
          <span className="font-serif text-[13px] text-terracotta">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 font-serif text-2xl leading-tight tracking-tight">
            {service.title}
          </h3>
          <p className="mt-3 max-w-[40ch] text-[13px] leading-6 text-stone">
            {service.text}
          </p>
        </article>
      ))}
    </div>
  );
}
