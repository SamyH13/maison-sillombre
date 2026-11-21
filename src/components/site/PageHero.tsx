import type { ReactNode } from "react";

export function PageHero({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="container-lux pt-10 md:pt-16 pb-8 md:pb-12">
      <h1 className="text-5xl md:text-7xl">{title}</h1>
      {children && <div className="mt-5 max-w-xl text-lg text-ink-soft leading-relaxed">{children}</div>}
    </section>
  );
}
