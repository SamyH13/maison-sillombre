import femme from "@/assets/cat-femme.jpg";
import homme from "@/assets/cat-homme.jpg";
import orient from "@/assets/cat-orient.jpg";
import soins from "@/assets/cat-soins.jpg";

/**
 * Catalogue de démonstration (Phase 1). Toutes les fiches sont marquées
 * isExample : aucun nom, prix ni stock réel. À remplacer par la base de
 * données en Phase 2 sans changer la forme des types.
 */
export type CategorySlug = "femme" | "homme" | "unisexe" | "orientaux" | "soins";

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  image: string;
}

export interface Variant {
  id: string;
  label: string; // ex. "50 ml"
  priceCents: number | null;
  stock: number | null; // null = non renseigné
}

export type Intensity = 1 | 2 | 3 | 4 | 5;

export interface Product {
  slug: string;
  name: string;
  /** Marque ou créateur, si différent de la maison. */
  brand?: string;
  /** Ex. "Eau de parfum", "Extrait", "Huile parfumée". */
  concentration?: string;
  category: CategorySlug;
  family: string; // famille olfactive
  notes: { top: string[]; heart: string[]; base: string[] };
  description: string;
  /** Image principale. */
  image: string;
  /** Photos supplémentaires (flacon, packaging, texture…). */
  gallery?: string[];
  /** Tenue et sillage notés de 1 à 5 — affichés seulement si renseignés. */
  longevity?: Intensity;
  sillage?: Intensity;
  /** Moments conseillés, ex. ["Soir", "Hiver"]. */
  occasions?: string[];
  ingredients?: string;
  usage?: string;
  variants: Variant[];
  /** true = fiche de démonstration, signalée comme telle dans l'interface. */
  isExample: boolean;
  isNew?: boolean;
  isFavorite?: boolean;
}

export const categories: Category[] = [
  { slug: "femme", name: "Parfums femme", tagline: "Fleurs blanches, poudres, lumière", image: femme },
  { slug: "homme", name: "Parfums homme", tagline: "Bois, cuirs, épices", image: homme },
  { slug: "orientaux", name: "Parfums orientaux", tagline: "Oud, ambre, safran", image: orient },
  { slug: "unisexe", name: "Unisexe", tagline: "Sillages sans frontière", image: femme },
  { slug: "soins", name: "Soins & cosmétiques", tagline: "Rituels de peau", image: soins },
];

const v = (id: string, labels: string[]): Variant[] =>
  labels.map((label, i) => ({ id: `${id}-${i}`, label, priceCents: null, stock: null }));

export const products: Product[] = [
  {
    slug: "exemple-fleur-blanche", name: "Exemple — Fleur blanche", category: "femme", family: "Floral",
    notes: { top: ["Exemple"], heart: ["Exemple"], base: ["Exemple"] },
    description: "Fiche de démonstration. Description, notes et contenances seront renseignées à partir du catalogue réel.",
    image: femme, variants: v("ffb", ["30 ml", "50 ml", "100 ml"]), isExample: true, isNew: true,
  },
  {
    slug: "exemple-bois-fume", name: "Exemple — Bois fumé", category: "homme", family: "Boisé",
    notes: { top: ["Exemple"], heart: ["Exemple"], base: ["Exemple"] },
    description: "Fiche de démonstration à remplacer par un produit réel.",
    image: homme, variants: v("hbf", ["50 ml", "100 ml"]), isExample: true, isFavorite: true,
  },
  {
    slug: "exemple-ambre-oud", name: "Exemple — Ambre & oud", category: "orientaux", family: "Oriental",
    notes: { top: ["Exemple"], heart: ["Exemple"], base: ["Exemple"] },
    description: "Fiche de démonstration à remplacer par un produit réel.",
    image: orient, variants: v("oao", ["12 ml", "50 ml"]), isExample: true, isNew: true, isFavorite: true,
  },
  {
    slug: "exemple-soin-visage", name: "Exemple — Soin visage", category: "soins", family: "Soin",
    notes: { top: [], heart: [], base: [] },
    description: "Fiche de démonstration à remplacer par un produit réel.",
    image: soins, variants: v("ssv", ["30 ml"]), isExample: true, isNew: true,
  },
  {
    slug: "exemple-sillage-partage", name: "Exemple — Sillage partagé", category: "unisexe", family: "Hespéridé",
    notes: { top: ["Exemple"], heart: ["Exemple"], base: ["Exemple"] },
    description: "Fiche de démonstration à remplacer par un produit réel.",
    image: femme, variants: v("usp", ["50 ml", "100 ml"]), isExample: true, isFavorite: true,
  },
];

const searchText = (p: Product) =>
  [p.name, p.brand, p.concentration, p.family, p.description, ...p.notes.top, ...p.notes.heart, ...p.notes.base]
    .filter(Boolean).join(" ").toLowerCase();

export type SortKey = "pertinence" | "nom" | "prix-asc" | "prix-desc";
export const sortKeys: SortKey[] = ["pertinence", "nom", "prix-asc", "prix-desc"];

export function filterProducts(list: Product[], opts: { q?: string; cat?: CategorySlug; sort?: SortKey }): Product[] {
  const q = opts.q?.trim().toLowerCase();
  let out = list.filter((p) => (!opts.cat || p.category === opts.cat) &&
    (!q || searchText(p).includes(q)));
  if (opts.sort === "nom") out = [...out].sort((a, b) => a.name.localeCompare(b.name, "fr"));
  if (opts.sort === "prix-asc" || opts.sort === "prix-desc") {
    const dir = opts.sort === "prix-asc" ? 1 : -1;
    // Les produits sans prix restent toujours en fin de liste.
    out = [...out].sort((a, b) => {
      const pa = minPrice(a), pb = minPrice(b);
      if (pa === null || pb === null) return (pa === null ? 1 : 0) - (pb === null ? 1 : 0);
      return (pa - pb) * dir;
    });
  }
  return out;
}

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getVariant = (variantId: string) => {
  for (const product of products) {
    const variant = product.variants.find((v) => v.id === variantId);
    if (variant) return { product, variant };
  }
  return undefined;
};

/** Achetable = prix connu et stock non épuisé (stock null = non suivi). */
export const isPurchasable = (v: Variant) => v.priceCents !== null && (v.stock === null || v.stock > 0);

/** Prix le plus bas parmi les contenances renseignées, pour l'affichage « dès … ». */
export function minPrice(p: Product): number | null {
  const prices = p.variants.map((v) => v.priceCents).filter((c): c is number => c !== null);
  return prices.length ? Math.min(...prices) : null;
}

/** Suggestions : même catégorie d'abord, puis même famille, puis le reste. */
export function relatedProducts(p: Product, limit = 4): Product[] {
  const score = (o: Product) => (o.category === p.category ? 2 : 0) + (o.family === p.family ? 1 : 0);
  return products.filter((o) => o.slug !== p.slug).sort((a, b) => score(b) - score(a)).slice(0, limit);
}
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
