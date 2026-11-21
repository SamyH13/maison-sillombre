import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { categories } from "@/data/catalog";
import { useCart } from "@/lib/store/cart";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-40 bg-ink text-ink-foreground transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/10" : ""}`}>
      <div className="container-lux grid h-16 md:h-20 grid-cols-[1fr_auto_1fr] items-center">
        <div className="flex items-center gap-6">
          <button className="md:hidden -ml-2 p-2" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu className="size-5" strokeWidth={1.25} /></button>
          <nav className="hidden md:flex gap-7 text-[0.8rem] font-semibold uppercase tracking-wide" aria-label="Navigation principale">
            <Link to="/catalogue" search={{ cat: "parfums" }} className="hover:text-champagne transition-colors" activeProps={{ className: "text-champagne" }} activeOptions={{ includeSearch: true }}>Parfums</Link>
            <Link to="/catalogue" search={{ cat: "soins-capillaires" }} className="hover:text-champagne transition-colors" activeProps={{ className: "text-champagne" }} activeOptions={{ includeSearch: true }}>Soins capillaires</Link>
            <Link to="/maison" className="hover:text-champagne transition-colors" activeProps={{ className: "text-champagne" }}>La Maison</Link>
          </nav>
        </div>
        <Logo />
        <div className="flex items-center justify-end gap-1 md:gap-3">
          <Link to="/catalogue" search={{}} aria-label="Rechercher" className="p-2"><Search className="size-5" strokeWidth={1.25} /></Link>
          <Link to="/favoris" aria-label="Favoris" className="p-2"><Heart className="size-5" strokeWidth={1.25} /></Link>
          <Link to="/panier" aria-label={count ? `Panier, ${count} article${count > 1 ? "s" : ""}` : "Panier"} className="relative p-2 -mr-2">
            <ShoppingBag className="size-5" strokeWidth={1.25} />
            {count > 0 && <span className="absolute right-0 top-0.5 grid min-w-4 h-4 place-items-center rounded-full bg-champagne px-1 text-[0.6rem] font-semibold text-white tabular-nums">{count}</span>}
          </Link>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-ink text-ink-foreground animate-rise md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container-lux flex h-16 items-center justify-between">
            <span className="eyebrow">Menu</span>
            <button aria-label="Fermer le menu" className="p-2 -mr-2" onClick={() => setOpen(false)}><X className="size-5" strokeWidth={1.25} /></button>
          </div>
          <nav className="container-lux mt-8 flex flex-col gap-5" onClick={() => setOpen(false)}>
            <Link to="/catalogue" search={{}} className="text-3xl font-bold uppercase">Tout le catalogue</Link>
            {categories.map((c) => (
              <Link key={c.slug} to="/catalogue" search={{ cat: c.slug }} className="text-2xl font-semibold uppercase text-ink-foreground/80 hover:text-champagne">{c.name}</Link>
            ))}
            <div className="mt-6 h-px bg-ink-foreground/15" />
            <Link to="/maison" className="eyebrow">La Maison</Link>
            <Link to="/contact" className="eyebrow">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
