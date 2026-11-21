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
    <header className={`sticky top-0 z-40 border-b transition-colors duration-500 ${scrolled ? "bg-background/95 backdrop-blur border-border" : "bg-background border-transparent"}`}>
      <div className="container-lux grid h-16 md:h-20 grid-cols-[1fr_auto_1fr] items-center">
        <div className="flex items-center gap-6">
          <button className="md:hidden -ml-2 p-2" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu className="size-5" strokeWidth={1.25} /></button>
          <nav className="hidden md:flex gap-7 eyebrow" aria-label="Navigation principale">
            <Link to="/catalogue" search={{}} className="link-lux">Catalogue</Link>
            <Link to="/catalogue" search={{ cat: "orientaux" }} className="link-lux">Orientaux</Link>
            <Link to="/maison" className="link-lux">La Maison</Link>
          </nav>
        </div>
        <Logo />
        <div className="flex items-center justify-end gap-1 md:gap-3">
          <Link to="/catalogue" search={{}} aria-label="Rechercher" className="p-2"><Search className="size-5" strokeWidth={1.25} /></Link>
          <Link to="/favoris" aria-label="Favoris" className="p-2"><Heart className="size-5" strokeWidth={1.25} /></Link>
          <Link to="/panier" aria-label={count ? `Panier, ${count} article${count > 1 ? "s" : ""}` : "Panier"} className="relative p-2 -mr-2">
            <ShoppingBag className="size-5" strokeWidth={1.25} />
            {count > 0 && <span className="absolute right-0 top-0.5 grid min-w-4 h-4 place-items-center rounded-full bg-ink px-1 text-[0.6rem] text-ink-foreground tabular-nums">{count}</span>}
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
            <Link to="/catalogue" search={{}} className="font-serif text-4xl">Tout le catalogue</Link>
            {categories.map((c) => (
              <Link key={c.slug} to="/catalogue" search={{ cat: c.slug }} className="font-serif text-3xl text-ink-foreground/80">{c.name}</Link>
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
