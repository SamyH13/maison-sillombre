import type { ReactNode } from "react";
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="container-lux pt-14 md:pt-24 pb-10 md:pb-14 text-center animate-rise">
      <p className="eyebrow text-muted-foreground">{eyebrow}</p>
      <h1 className="mt-4 text-5xl md:text-7xl">{title}</h1>
      {children && <div className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">{children}</div>}
    </section>
  );
}
