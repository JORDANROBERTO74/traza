import type { Step } from "@/i18n/dictionaries/en";

export function Process({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="relative bg-arena p-7 md:p-9">
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-4xl text-terracotta md:text-5xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-line" aria-hidden="true" />
          </div>
          <h3 className="mt-6 font-serif text-2xl leading-tight tracking-tight">
            {step.title}
          </h3>
          <p className="mt-3 text-[13px] leading-6 text-stone">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
