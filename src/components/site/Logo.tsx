import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Mille et Un Sillages — accueil" className={`inline-flex items-baseline gap-1.5 leading-none ${className}`}>
      <span className="text-[0.6rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Mille et un</span>
      <span className="text-lg md:text-2xl font-bold uppercase tracking-[0.1em]">Sillages</span>
    </Link>
  );
}
