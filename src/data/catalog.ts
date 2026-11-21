import { products } from "./products";

export { products };

/**
 * Modèle du catalogue. Les données réelles sont dans ./products.ts ; les types
 * restent stables pour être branchés plus tard sur une base de données.
 */
export type CategorySlug = "parfums" | "coffrets" | "soins-capillaires";

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  image: string;
}

export interface Variant {
  id: string;
  label: string; // ex. "100 ml"
  priceCents: number | null;
  stock: number | null; // null = non renseigné
}

export type Intensity = 1 | 2 | 3 | 4 | 5;

/** Un soin qui fait partie d'une gamme vendue en lot (ex. shampoing du trio bleu). */
export interface RangeItem {
  sku: string;
  type: string; // "Shampoing", "Masque", "Sérum"
  name: string;
  volume: string;
  tagline: string;
  description: string;
  benefits: string[];
  usage: string;
  image: string;
}

export interface Product {
  slug: string;
  sku?: string;
  name: string;
  /** Marque ou créateur. */
  brand?: string;
  /** Ex. "Eau de Parfum", "Extrait de Parfum". */
  concentration?: string;
  category: CategorySlug;
  /** Ligne de la marque, ex. "Khamrah", "Kenzie". */
  collection?: string;
  family: string; // accords principaux / actifs
  notes: { top: string[]; heart: string[]; base: string[] };
  /** Accroche courte. */
  tagline?: string;
  description: string;
  /** Image principale (chemin public). */
  image: string;
  /** Photos supplémentaires. */
  gallery?: string[];
  benefits?: string[];
  /** Contenu d'un coffret. */
  contents?: string;
  /** Lot vendu uniquement ensemble : couleur de la gamme et soins inclus. */
  range?: { color: string; swatch: string; items: RangeItem[] };
  /** Tenue et sillage notés de 1 à 5 — affichés seulement si renseignés. */
  longevity?: Intensity;
  sillage?: Intensity;
  /** Moments conseillés, ex. ["Soir", "Hiver"]. */
  occasions?: string[];
  ingredients?: string;
  usage?: string;
  seo?: { title: string; description: string };
  variants: Variant[];
  /** true = fiche de démonstration, signalée comme telle dans l'interface. */
  isExample: boolean;
  isNew?: boolean;
  isFavorite?: boolean;
}

const firstImage = (cat: CategorySlug, slug?: string) =>
  (slug ? products.find((p) => p.slug === slug) : products.find((p) => p.category === cat))?.image ?? "";

export const categories: Category[] = [
  { slug: "parfums", name: "Parfums", tagline: "Lattafa, Volaré, Loui Martin", image: firstImage("parfums", "lattafa-oud-mood-100ml") },
  { slug: "soins-capillaires", name: "Soins capillaires", tagline: "Trois rituels IMP’HAIR, en trio", image: firstImage("soins-capillaires", "imphair-trio-effet-glossy-restructurant") },
  { slug: "coffrets", name: "Coffrets", tagline: "Parfum, brume et gel douche", image: firstImage("coffrets") },
];

/** Marques présentes au catalogue, dans l'ordre alphabétique. */
export const brands: string[] = [...new Set(products.map((p) => p.brand).filter((b): b is string => !!b))].sort((a, b) =>
  a.localeCompare(b, "fr"),
);

const searchText = (p: Product) =>
  [p.name, p.brand, p.collection, p.concentration, p.family, p.tagline, p.description, p.range?.color, ...p.notes.top, ...p.notes.heart, ...p.notes.base]
    .filter(Boolean).join(" ").toLowerCase();

export type SortKey = "pertinence" | "nom" | "prix-asc" | "prix-desc";
export const sortKeys: SortKey[] = ["pertinence", "nom", "prix-asc", "prix-desc"];

export function filterProducts(
  list: Product[],
  opts: { q?: string; cat?: CategorySlug; marque?: string; sort?: SortKey },
): Product[] {
  const q = opts.q?.trim().toLowerCase();
  let out = list.filter((p) => (!opts.cat || p.category === opts.cat) && (!opts.marque || p.brand === opts.marque) &&
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
