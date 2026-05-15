type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group border border-charcoal/10 bg-[#fbf6ec] p-7 shadow-[0_24px_70px_rgba(23,24,20,0.06)] transition-colors hover:border-gold/60">
      <div className="mb-6 h-px w-16 bg-gold transition-all group-hover:w-24" />
      <h3 className="text-xl font-black text-charcoal">{title}</h3>
      <p className="mt-4 text-base leading-8 text-ink-muted">{description}</p>
    </article>
  );
}
