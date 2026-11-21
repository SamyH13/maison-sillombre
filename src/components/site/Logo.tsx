import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Maison Sillombre — accueil" className={`group inline-flex flex-col items-center leading-none ${className}`}>
      <span className="eyebrow text-[0.55rem] tracking-[0.5em] text-muted-foreground group-hover:text-foreground transition-colors">Maison</span>
      <span className="font-serif text-2xl md:text-[1.7rem] tracking-[0.28em] mt-1">SILLOMBRE</span>
    </Link>
  );
}
