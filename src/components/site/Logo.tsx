import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Maison Sillombre, accueil" className={`group inline-flex items-baseline gap-2 leading-none ${className}`}>
      <span className="font-sans text-[0.8rem] font-normal text-ink-soft group-hover:text-foreground transition-colors">Maison</span>
      <span className="font-serif text-2xl md:text-[1.75rem] font-semibold tracking-[0.02em]">Sillombre</span>
    </Link>
  );
}
