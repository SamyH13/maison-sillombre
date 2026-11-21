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

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  family: string; // famille olfactive
  notes: { top: string[]; heart: string[]; base: string[] };
  description: string;
  image: string;
  variants: Variant[];
  isExample: true;
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

export type SortKey = "pertinence" | "nom";

export function filterProducts(list: Product[], opts: { q?: string; cat?: CategorySlug; sort?: SortKey }): Product[] {
  const q = opts.q?.trim().toLowerCase();
  let out = list.filter((p) => (!opts.cat || p.category === opts.cat) &&
    (!q || `${p.name} ${p.family} ${p.description}`.toLowerCase().includes(q)));
  if (opts.sort === "nom") out = [...out].sort((a, b) => a.name.localeCompare(b.name, "fr"));
  return out;
}

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
