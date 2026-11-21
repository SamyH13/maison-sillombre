import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Search } from "lucide-react";
import hero from "@/assets/hero-flacon.jpg";
import {
  brands,
  categories,
  filterProducts,
  products,
  sortKeys,
  type CategorySlug,
  type SortKey,
} from "@/data/catalog";
import { ProductCard } from "@/components/site/ProductCard";

type S = { cat?: CategorySlug; marque?: string; q?: string; sort?: SortKey };

export const Route = createFileRoute("/catalogue")({
  validateSearch: (s: Record<string, unknown>): S => {
    const out: S = {};
    if (typeof s["cat"] === "string" && categories.some((c) => c.slug === s["cat"]))
      out.cat = s["cat"] as CategorySlug;
    if (typeof s["marque"] === "string" && brands.includes(s["marque"])) out.marque = s["marque"];
    if (typeof s["q"] === "string" && s["q"]) out.q = s["q"];
    if (
      typeof s["sort"] === "string" &&
      s["sort"] !== "pertinence" &&
      sortKeys.includes(s["sort"] as SortKey)
    )
      out.sort = s["sort"] as SortKey;
    return out;
  },
  head: () => ({
    meta: [
      { title: "Catalogue — Maison Sillombre" },
      {
        name: "description",
        content:
          "Parfums Lattafa, Volaré et Loui Martin, coffrets et soins capillaires IMP’HAIR chez Maison Sillombre.",
      },
      { property: "og:title", content: "Catalogue — Maison Sillombre" },
      {
        property: "og:description",
        content:
          "Parfums Lattafa, Volaré et Loui Martin, coffrets et soins capillaires IMP’HAIR chez Maison Sillombre.",
      },
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
  const set = (patch: { [K in keyof S]?: S[K] | undefined }) =>
    navigate({
      search: (prev) => {
        const next: S = { ...prev };
        for (const [k, v] of Object.entries(patch)) {
          if (v) (next as Record<string, unknown>)[k] = v;
          else delete (next as Record<string, unknown>)[k];
        }
        return next;
      },
      replace: true,
    });
  const current = categories.find((c) => c.slug === search.cat);
  const title = search.marque ?? current?.name ?? "Tout le catalogue";
  return (
    <>
      {/* Bannière de catégorie : photo en fond, titre à gauche, tri à droite. */}
      <section className="relative overflow-hidden bg-ink text-white">
        <img
          src={current?.image ?? hero}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/20" />
        <div className="relative container-lux flex flex-col md:flex-row items-center md:justify-between gap-4 py-9 md:py-11 text-center md:text-left">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold uppercase">{title}</h1>
            {current?.slug === "soins-capillaires" && (
              <p className="mt-1.5 text-sm text-white/80">
                Shampoing, masque et sérum d’une même couleur, vendus ensemble.
              </p>
            )}
          </div>
          <label className="relative">
            <span className="sr-only">Trier les produits</span>
            <select
              value={search.sort ?? "pertinence"}
              onChange={(e) =>
                set({
                  sort: e.target.value === "pertinence" ? undefined : (e.target.value as SortKey),
                })
              }
              className="appearance-none rounded-full bg-white/15 backdrop-blur border border-white/25 py-2.5 pl-5 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-champagne [&>option]:text-ink"
            >
              <option value="pertinence">Tri par pertinence</option>
              <option value="nom">Tri par nom (A–Z)</option>
              <option value="prix-asc">Tri par prix croissant</option>
              <option value="prix-desc">Tri par prix décroissant</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4"
              strokeWidth={2}
            />
          </label>
        </div>
      </section>

      <div className="container-lux">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 py-5 border-b border-border">
          <label className="relative block lg:w-80 shrink-0">
            <span className="sr-only">Rechercher un produit</span>
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
              strokeWidth={2}
            />
            <input
              defaultValue={search.q ?? ""}
              onChange={(e) => set({ q: e.target.value })}
              placeholder="Rechercher un parfum, une note…"
              className="w-full rounded border border-border bg-background py-2.5 pl-9 pr-3 text-sm placeholder:text-muted-foreground/80 focus:outline-none focus:border-champagne transition-colors"
            />
          </label>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0">
            <Chip
              active={!search.cat && !search.marque}
              onClick={() => set({ cat: undefined, marque: undefined })}
            >
              Tout
            </Chip>
            {categories.map((c) => (
              <Chip
                key={c.slug}
                active={search.cat === c.slug}
                onClick={() => set({ cat: c.slug })}
              >
                {c.name}
              </Chip>
            ))}
            <span className="mx-1 h-5 w-px bg-border shrink-0" aria-hidden />
            {brands.map((b) => (
              <Chip
                key={b}
                active={search.marque === b}
                onClick={() => set({ marque: search.marque === b ? undefined : b })}
              >
                {b}
              </Chip>
            ))}
          </div>
        </div>
        <p className="mt-5 text-xs text-muted-foreground" aria-live="polite">
          {list.length} produit{list.length > 1 ? "s" : ""}
        </p>
        {list.length ? (
          <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-5">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-2xl font-semibold">Aucun résultat</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Essayez une autre note ou une autre marque.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

function Chip({
  active,
  onClick,
  children,
  small,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 rounded-full border ${small ? "px-3 py-1.5" : "px-4 py-2"} text-xs font-medium transition-colors ${active ? "bg-champagne text-white border-champagne" : "border-border hover:border-champagne hover:text-champagne"}`}
    >
      {children}
    </button>
  );
}
