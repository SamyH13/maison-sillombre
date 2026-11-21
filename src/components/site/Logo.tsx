import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Maison Sillombre — accueil" className={`inline-flex items-baseline gap-1.5 leading-none ${className}`}>
      <span className="text-[0.62rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-champagne">Maison</span>
      <span className="text-lg md:text-2xl font-bold uppercase tracking-[0.12em]">Sillombre</span>
    </Link>
  );
}
