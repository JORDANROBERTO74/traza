export function SectionHead({
  label,
  title,
  intro,
  invert = false,
}: {
  label: string;
  title: string;
  intro?: string;
  invert?: boolean;
}) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p
          className={
            invert
              ? "text-[10px] font-medium uppercase tracking-[0.2em] text-arena/60"
              : "text-[10px] font-medium uppercase tracking-[0.2em] text-terracotta"
          }
        >
          {label}
        </p>
        <h2
          className={
            invert
              ? "mt-4 max-w-[18ch] font-serif text-4xl leading-[1.02] tracking-tight text-arena md:text-5xl"
              : "mt-4 max-w-[18ch] font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl"
          }
        >
          {title}
        </h2>
      </div>
      {intro ? (
        <p
          className={
            invert
              ? "max-w-[38ch] text-[13px] leading-6 text-arena/70"
              : "max-w-[38ch] text-[13px] leading-6 text-stone"
          }
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
