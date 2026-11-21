import { Link } from "@tanstack/react-router";
import { categories } from "@/data/catalog";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground mt-24">
      <div className="container-lux py-16 md:py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <p className="eyebrow text-champagne">Mille et un</p>
          <p className="text-4xl font-bold uppercase tracking-[0.1em] mt-2">Sillages</p>
          <p className="mt-6 text-sm text-ink-foreground/65 leading-relaxed">Parfums, coffrets et soins capillaires, choisis par un commerçant indépendant.</p>
        </div>
        <div>
          <p className="eyebrow text-champagne mb-5">Univers</p>
          <ul className="space-y-3 text-sm text-ink-foreground/75">
            {categories.map((c) => <li key={c.slug}><Link to="/catalogue" search={{ cat: c.slug }} className="link-lux">{c.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-champagne mb-5">Informations</p>
          <ul className="space-y-3 text-sm text-ink-foreground/75">
            <li><Link to="/maison" className="link-lux">La Maison</Link></li>
            <li><Link to="/contact" className="link-lux">Contact</Link></li>
            <li><Link to="/mentions-legales" className="link-lux">Mentions légales</Link></li>
            <li><Link to="/confidentialite" className="link-lux">Confidentialité</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-lux py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-ink-foreground/50">
          <p>© {new Date().getFullYear()} Mille et Un Sillages</p>
          <p>Boutique en préparation — la vente en ligne n'est pas encore ouverte.</p>
        </div>
      </div>
    </footer>
  );
}
