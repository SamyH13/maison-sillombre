import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { categories } from "@/data/catalog";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-[0_6px_18px_-12px_oklch(0.25_0.04_40/0.6)]" : "bg-transparent"}`}>
      <div className="container-lux flex h-16 md:h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <button className="md:hidden -ml-2 grid size-11 place-items-center" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu className="size-5" strokeWidth={1.5} /></button>
          <Logo />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[0.95rem]" aria-label="Navigation principale">
          <Link to="/catalogue" search={{}} className="hover:text-zellige transition-colors" activeProps={{ className: "text-zellige" }}>Catalogue</Link>
          <Link to="/maison" className="hover:text-zellige transition-colors" activeProps={{ className: "text-zellige" }}>La Maison</Link>
          <Link to="/contact" className="hover:text-zellige transition-colors" activeProps={{ className: "text-zellige" }}>Contact</Link>
        </nav>
        <div className="flex items-center justify-end -mr-2">
          <Link to="/catalogue" search={{}} aria-label="Rechercher un produit" className="grid size-11 place-items-center"><Search className="size-5" strokeWidth={1.5} /></Link>
          <Link to="/favoris" aria-label="Mes favoris" className="grid size-11 place-items-center"><Heart className="size-5" strokeWidth={1.5} /></Link>
          {siteConfig.commerceEnabled && (
            <Link to="/panier" aria-label="Panier" className="grid size-11 place-items-center"><ShoppingBag className="size-5" strokeWidth={1.5} /></Link>
          )}
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cedar text-cedar-foreground animate-rise md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container-lux flex h-16 items-center justify-between">
            <span className="font-serif text-2xl font-semibold">Sillombre</span>
            <button aria-label="Fermer le menu" className="-mr-2 grid size-11 place-items-center" onClick={() => setOpen(false)}><X className="size-5" strokeWidth={1.5} /></button>
          </div>
          <nav className="container-lux mt-6 flex flex-col gap-1" aria-label="Menu mobile" onClick={() => setOpen(false)}>
            <Link to="/catalogue" search={{}} className="py-2 font-serif text-4xl">Tout le catalogue</Link>
            {categories.map((c) => (
              <Link key={c.slug} to="/catalogue" search={{ cat: c.slug }} className="py-2 font-serif text-2xl text-cedar-foreground/80">{c.name}</Link>
            ))}
            <div className="my-6 h-px bg-cedar-foreground/15" />
            <Link to="/maison" className="py-2 text-lg">La Maison</Link>
            <Link to="/contact" className="py-2 text-lg">Contact</Link>
            <Link to="/favoris" className="py-2 text-lg">Mes favoris</Link>
          </nav>
          <div className="zellige-band mt-auto h-12" aria-hidden="true" />
        </div>
      )}
    </header>
  );
}
