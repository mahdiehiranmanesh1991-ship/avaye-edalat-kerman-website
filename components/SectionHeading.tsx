type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-black tracking-[0.18em] text-gold">{eyebrow}</p>
      <h2 className={`text-3xl font-black leading-[1.45] tracking-[-0.04em] md:text-5xl ${light ? "text-ivory" : "text-charcoal"}`}>
        {title}
      </h2>
      {description ? <p className={`mt-5 text-lg ${light ? "text-ivory/70" : "text-ink-muted"}`}>{description}</p> : null}
    </div>
  );
}
