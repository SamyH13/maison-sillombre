import { Link } from "@tanstack/react-router";
import { categories } from "@/data/catalog";
import { siteConfig } from "@/config/site";

/** Pied de page : le soubassement de zellige, puis le bois de cèdre. */
export function SiteFooter() {
  return (
    <footer className="mt-28 md:mt-36">
      <div className="zellige-band h-14 md:h-[4.5rem] border-y-4 border-cedar" aria-hidden="true" />
      <div className="bg-cedar text-cedar-foreground">
        <div className="container-lux py-14 md:py-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 max-w-sm">
            <p className="font-serif text-4xl font-semibold">Sillombre</p>
            <p className="mt-5 leading-relaxed text-cedar-foreground/75">Parfums d'Orient et soins capillaires, vendus sur les marchés par un commerçant indépendant.</p>
          </div>
          <div className="md:col-span-4">
            <h2 className="font-sans text-sm font-normal text-cedar-foreground/60 mb-4">Collections</h2>
            <ul className="space-y-2.5">
              {categories.map((c) => <li key={c.slug}><Link to="/catalogue" search={{ cat: c.slug }} className="link-lux">{c.name}</Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-sans text-sm font-normal text-cedar-foreground/60 mb-4">Informations</h2>
            <ul className="space-y-2.5">
              <li><Link to="/maison" className="link-lux">La Maison</Link></li>
              <li><Link to="/contact" className="link-lux">Contact</Link></li>
              <li><Link to="/mentions-legales" className="link-lux">Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="link-lux">Confidentialité</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cedar-foreground/10">
          <div className="container-lux py-6 flex flex-col md:flex-row gap-2 justify-between text-sm text-cedar-foreground/60">
            <p>© {new Date().getFullYear()} Maison Sillombre</p>
            {!siteConfig.commerceEnabled && <p>La vente en ligne n'est pas encore ouverte.</p>}
          </div>
        </div>
      </div>
    </footer>
  );
}
