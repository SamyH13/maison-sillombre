import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { categories, filterProducts, products, type CategorySlug, type SortKey } from "@/data/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHero } from "@/components/site/PageHero";

type S = { cat?: CategorySlug; q?: string; sort?: SortKey };

export const Route = createFileRoute("/catalogue")({
  validateSearch: (s: Record<string, unknown>): S => {
    const out: S = {};
    if (typeof s["cat"] === "string" && categories.some((c) => c.slug === s["cat"])) out.cat = s["cat"] as CategorySlug;
    if (typeof s["q"] === "string" && s["q"]) out.q = s["q"];
    if (s["sort"] === "nom") out.sort = "nom";
    return out;
  },
  head: () => ({
    meta: [
      { title: "Catalogue — Maison Sillombre" },
      { name: "description", content: "Les parfums Lattafa, Oud Mood, Kenzie par Volaré et les soins IMP'hair de Maison Sillombre." },
      { property: "og:title", content: "Catalogue — Maison Sillombre" },
      { property: "og:description", content: "Les parfums Lattafa, Oud Mood, Kenzie par Volaré et les soins IMP'hair de Maison Sillombre." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalogue,
});

function Catalogue() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/catalogue" });
  const list = filterProducts(products, search);
  const set = (patch: { [K in keyof S]?: S[K] | undefined }) => navigate({ search: (prev) => {
    const next: S = { ...prev };
    for (const [k, v] of Object.entries(patch)) { if (v) (next as Record<string, unknown>)[k] = v; else delete (next as Record<string, unknown>)[k]; }
    return next;
  }, replace: true });
  const current = categories.find((c) => c.slug === search.cat);
  return (
    <>
      <PageHero title={current?.name ?? "Catalogue"}>
        {current ? current.tagline : "Tous les parfums et soins de Maison Sillombre. Les prix seront affichés prochainement."}
      </PageHero>
      <div className="container-lux">
        <div className="sticky top-16 md:top-20 z-30 -mx-4 px-4 md:-mx-10 md:px-10 bg-background/95 backdrop-blur-sm py-4 border-b border-border">
          <label className="relative block max-w-xl">
            <span className="sr-only">Rechercher un produit</span>
            <Search className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 size-5 text-ink-soft" strokeWidth={1.5} />
            <input type="search" value={search.q ?? ""} onChange={(e) => set({ q: e.target.value })} placeholder="Rechercher un parfum, une marque…"
              className="w-full bg-transparent border-b border-ink-soft/50 py-3 pl-8 text-lg placeholder:text-ink-soft/80 focus:outline-none focus:border-zellige transition-colors" />
          </label>
          <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <Chip active={!search.cat} onClick={() => set({ cat: undefined })}>Tout</Chip>
            {categories.map((c) => <Chip key={c.slug} active={search.cat === c.slug} onClick={() => set({ cat: c.slug })}>{c.name}</Chip>)}
            <label className="ml-auto shrink-0 flex items-center gap-2 text-sm text-ink-soft">
              <span className="hidden sm:inline">Trier</span>
              <select value={search.sort ?? "pertinence"} onChange={(e) => set({ sort: e.target.value === "nom" ? "nom" : undefined })}
                className="bg-transparent py-2 text-foreground focus:outline-none">
                <option value="pertinence">Par collection</option><option value="nom">Nom A–Z</option>
              </select>
            </label>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-soft" aria-live="polite">{list.length} produit{list.length > 1 ? "s" : ""}</p>
        {list.length ? (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">{list.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
        ) : (
          <div className="py-20 max-w-md">
            <p className="font-serif text-3xl">Aucun produit ne correspond</p>
            <p className="mt-3 text-ink-soft">Essayez un autre nom ou une autre marque, ou affichez toute la sélection.</p>
            <button onClick={() => set({ q: undefined, cat: undefined })} className="btn-lux-outline mt-6">Voir tous les produits</button>
          </div>
        )}
      </div>
    </>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button onClick={onClick} aria-pressed={active} className={`shrink-0 min-h-10 rounded-sm border px-4 py-2 text-sm transition-colors ${active ? "bg-zellige text-primary-foreground border-zellige" : "border-ink-soft/40 hover:border-foreground"}`}>{children}</button>;
}
