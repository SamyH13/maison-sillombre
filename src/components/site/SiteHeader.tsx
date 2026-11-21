import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { categories } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/store/cart";

const navLink = "hover:text-champagne transition-colors";
const active = { className: "text-champagne" };

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, subtotalCents } = useCart();
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const cartLabel = count
    ? `Panier, ${count} article${count > 1 ? "s" : ""}, ${formatPrice(subtotalCents)}`
    : "Panier vide";

  return (
    <header
      className={`sticky top-0 z-40 bg-ink text-ink-foreground transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/20" : ""}`}
    >
      <div className="container-lux flex h-16 md:h-20 items-center gap-4 md:gap-10">
        {/* Mobile : bouton menu rond rose à gauche */}
        <button
          className="md:hidden grid size-9 shrink-0 place-items-center rounded-full bg-champagne text-white"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="size-4" strokeWidth={2} />
        </button>

        <Logo className="mx-auto md:mx-0 shrink-0" />

        <nav
          className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 text-[0.8rem] font-semibold uppercase tracking-wide"
          aria-label="Navigation principale"
        >
          <Link to="/" className={navLink} activeProps={active} activeOptions={{ exact: true }}>
            Accueil
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/catalogue"
              search={{ cat: c.slug }}
              className={navLink}
              activeProps={active}
              activeOptions={{ includeSearch: true }}
            >
              {c.name}
            </Link>
          ))}
          <Link to="/contact" className={navLink} activeProps={active}>
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-1 md:gap-3">
          <Link
            to="/catalogue"
            search={{}}
            aria-label="Rechercher"
            className="hidden md:grid size-9 place-items-center rounded border border-ink-foreground/40 hover:border-champagne hover:text-champagne transition-colors"
          >
            <Search className="size-4" strokeWidth={2} />
          </Link>
          <Link
            to="/favoris"
            aria-label="Favoris"
            className="hidden md:grid size-9 place-items-center rounded-full bg-champagne text-white hover:opacity-90 transition-opacity"
          >
            <Heart className="size-4" strokeWidth={2} />
          </Link>
          <Link
            to="/panier"
            aria-label={cartLabel}
            className="relative inline-flex h-9 items-center gap-2 rounded bg-champagne px-2.5 md:px-3 text-xs font-bold text-white hover:opacity-90 transition-opacity"
          >
            <span className="hidden md:inline tabular-nums">{formatPrice(subtotalCents)}</span>
            <ShoppingBag className="size-4" strokeWidth={2} />
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 grid min-w-4 h-4 place-items-center rounded-full bg-white px-1 text-[0.6rem] font-bold text-ink tabular-nums">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-ink text-ink-foreground animate-rise md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="container-lux flex h-16 items-center justify-between">
            <Logo />
            <button
              aria-label="Fermer le menu"
              className="grid size-9 place-items-center rounded-full bg-champagne text-white"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" strokeWidth={2} />
            </button>
          </div>
          <nav
            className="container-lux mt-6 flex flex-col divide-y divide-ink-foreground/10 text-lg font-semibold uppercase"
            onClick={() => setOpen(false)}
          >
            <Link to="/" className="py-4 hover:text-champagne">
              Accueil
            </Link>
            <Link to="/catalogue" search={{}} className="py-4 hover:text-champagne">
              Tout le catalogue
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/catalogue"
                search={{ cat: c.slug }}
                className="py-4 hover:text-champagne"
              >
                {c.name}
              </Link>
            ))}
            <Link to="/favoris" className="py-4 hover:text-champagne">
              Mes favoris
            </Link>
            <Link to="/maison" className="py-4 hover:text-champagne">
              La Maison
            </Link>
            <Link to="/contact" className="py-4 hover:text-champagne">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
