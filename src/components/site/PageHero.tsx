import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-muted mb-8 md:mb-12">
      <div className="container-lux py-10 md:py-14 animate-rise">
        <p className="eyebrow text-champagne">{eyebrow}</p>
        <h1 className="mt-2 text-3xl md:text-5xl uppercase">{title}</h1>
        {children && <div className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">{children}</div>}
      </div>
    </section>
  );
}
