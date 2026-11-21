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
      { name: "description", content: "Parfums femme, homme, unisexe, orientaux et soins de Maison Sillombre." },
      { property: "og:title", content: "Catalogue — Maison Sillombre" },
      { property: "og:description", content: "Parfums femme, homme, unisexe, orientaux et soins de Maison Sillombre." },
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
      <PageHero eyebrow="Catalogue" title={current?.name ?? "Toutes les fragrances"}>
        Les fiches ci-dessous sont des exemples de présentation ; le catalogue réel sera importé prochainement.
      </PageHero>
      <div className="container-lux">
        <div className="sticky top-16 md:top-20 z-30 -mx-5 px-5 md:mx-0 md:px-0 bg-background/95 backdrop-blur py-4 border-b border-border">
          <label className="relative block max-w-xl mx-auto">
            <span className="sr-only">Rechercher un parfum</span>
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" strokeWidth={1.25} />
            <input defaultValue={search.q ?? ""} onChange={(e) => set({ q: e.target.value })} placeholder="Rechercher une note, une famille, un nom…"
              className="w-full bg-transparent border-b border-border py-3 pl-7 font-serif text-xl placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground transition-colors" />
          </label>
          <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <Chip active={!search.cat} onClick={() => set({ cat: undefined })}>Tout</Chip>
            {categories.map((c) => <Chip key={c.slug} active={search.cat === c.slug} onClick={() => set({ cat: c.slug })}>{c.name}</Chip>)}
            <select aria-label="Trier" value={search.sort ?? "pertinence"} onChange={(e) => set({ sort: e.target.value === "nom" ? "nom" : undefined })}
              className="ml-auto shrink-0 bg-transparent eyebrow py-2 focus:outline-none">
              <option value="pertinence">Pertinence</option><option value="nom">Nom A–Z</option>
            </select>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">{list.length} fiche{list.length > 1 ? "s" : ""} d'exemple</p>
        {list.length ? (
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6">{list.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
        ) : (
          <div className="py-24 text-center"><p className="font-serif text-3xl">Aucun résultat</p><p className="mt-3 text-sm text-muted-foreground">Essayez une autre note ou une autre famille.</p></div>
        )}
      </div>
    </>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button onClick={onClick} aria-pressed={active} className={`shrink-0 border px-4 py-2 text-xs tracking-wide transition-colors ${active ? "bg-ink text-ink-foreground border-ink" : "border-border hover:border-foreground"}`}>{children}</button>;
}
