import oudMoodReminiscence from "@/assets/products/oud-mood-reminiscence.webp";
import oudMood from "@/assets/products/oud-mood.webp";
import muskMood from "@/assets/products/musk-mood.webp";
import yaraFuchsia from "@/assets/products/yara-fuchsia.webp";
import yaraVieuxRose from "@/assets/products/yara-vieux-rose.webp";
import yaraRosePale from "@/assets/products/yara-rose-pale.webp";
import asadElixir from "@/assets/products/asad-elixir.webp";
import asadZanzibar from "@/assets/products/asad-zanzibar.webp";
import confidential from "@/assets/products/confidential-private-gold.webp";
import kenzieMarshmallow from "@/assets/products/kenzie-marshmallow-dream.webp";
import kenzieVanilla from "@/assets/products/kenzie-vanilla-70.webp";
import kenziePistachio from "@/assets/products/kenzie-classic-pistachio.webp";
import kenzieLychee from "@/assets/products/kenzie-amber-lychee.webp";
import kenzieApple from "@/assets/products/kenzie-exotic-apple-crush.webp";
import kenzieMystique from "@/assets/products/kenzie-mystique-fleur.webp";
import kenzieSilk from "@/assets/products/kenzie-silk-serenity.webp";
import kenzieOud from "@/assets/products/kenzie-oud-blend.webp";
import impRituel from "@/assets/products/imphair-rituel-coreen.webp";
import impGlossy from "@/assets/products/imphair-glossy.webp";
import impHydratant from "@/assets/products/imphair-hydratant.webp";

/**
 * Catalogue Phase 1 : produits réels fournis par le commerçant (visuels dans
 * src/assets/products). Seul ce qui est lisible sur les visuels est renseigné ;
 * prix, stocks et notes olfactives restent null / vides jusqu'à confirmation.
 * La forme des types est prévue pour être remplacée par une base de données.
 */
export type CategorySlug = "lattafa" | "mood" | "kenzie" | "imphair";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Ce que contient la collection, uniquement des faits visibles. */
  tagline: string;
  image: string;
}

export interface Variant {
  id: string;
  label: string; // ex. "Shampoing 500 ml"
  priceCents: number | null;
  stock: number | null; // null = non renseigné
}

export interface Product {
  slug: string;
  name: string;
  /** Marque telle qu'imprimée sur le flacon, null si absente du visuel. */
  brand: string | null;
  category: CategorySlug;
  kind: "parfum" | "soin-cheveux";
  /** Teinte du flacon, utile pour distinguer les déclinaisons d'un même parfum. */
  shade?: string;
  /** Nom à confirmer par le commerçant (déclinaison identifiée seulement par sa couleur). */
  nameToConfirm?: boolean;
  /** Notes officielles : vides tant que le commerçant ne les a pas confirmées. */
  notes: { top: string[]; heart: string[]; base: string[] };
  /** null = description pas encore rédigée par le commerçant. */
  description: string | null;
  image: string;
  /** Mot-clé décrivant le visuel, pour le texte alternatif. */
  alt: string;
  variants: Variant[];
  isNew?: boolean;
  isFavorite?: boolean;
}

export const categories: Category[] = [
  { slug: "lattafa", name: "Lattafa", tagline: "Yara, Asad, Confidential", image: yaraVieuxRose },
  { slug: "mood", name: "Oud Mood & Musk Mood", tagline: "Oud Mood, Réminiscence, Musk Mood", image: oudMoodReminiscence },
  { slug: "kenzie", name: "Kenzie par Volaré", tagline: "Huit eaux de parfum", image: kenzieVanilla },
  { slug: "imphair", name: "IMP'hair Professionnel", tagline: "Trois gammes de soins capillaires", image: impRituel },
];

const none = { top: [], heart: [], base: [] };
const noVariants: Variant[] = [];
const imphairSet = (id: string): Variant[] =>
  (
    [
      ["Shampoing 500 ml", "shampoing"],
      ["Sérum 100 ml", "serum"],
      ["Masque 500 ml", "masque"],
    ] as const
  ).map(([label, key]) => ({ id: `${id}-${key}`, label, priceCents: null, stock: null }));

const parfum = (
  p: Omit<Product, "kind" | "notes" | "variants" | "description"> & { description?: string | null },
): Product => ({ kind: "parfum", notes: none, variants: noVariants, description: null, ...p });

export const products: Product[] = [
  parfum({ slug: "oud-mood-reminiscence", name: "Oud Mood Réminiscence", brand: null, category: "mood", image: oudMoodReminiscence, alt: "Flacon Oud Mood Réminiscence entouré de rubans ivoire, près d'un brûle-parfum en laiton, de bois d'oud et d'une rose rouge", isFavorite: true }),
  parfum({ slug: "oud-mood", name: "Oud Mood", brand: null, category: "mood", image: oudMood, alt: "Flacon Oud Mood entouré de rubans noirs, près d'un brûle-parfum en laiton et de bois d'oud", isFavorite: true }),
  parfum({ slug: "musk-mood", name: "Musk Mood", brand: null, category: "mood", image: muskMood, alt: "Flacon Musk Mood entouré de rubans blancs, avec une rose blanche et des cristaux de musc" }),
  parfum({ slug: "yara-fuchsia", name: "Yara", shade: "fuchsia", nameToConfirm: true, brand: "Lattafa", category: "lattafa", image: yaraFuchsia, alt: "Flacon Yara de Lattafa, fuchsia et doré, avec une rose, des framboises et de la vanille", isNew: true }),
  parfum({ slug: "yara-vieux-rose", name: "Yara", shade: "vieux rose", nameToConfirm: true, brand: "Lattafa", category: "lattafa", image: yaraVieuxRose, alt: "Flacon Yara de Lattafa, vieux rose et or rose, avec une rose, une orchidée et du caramel", isFavorite: true }),
  parfum({ slug: "yara-rose-pale", name: "Yara", shade: "rose pâle", nameToConfirm: true, brand: "Lattafa", category: "lattafa", image: yaraRosePale, alt: "Flacon Yara de Lattafa, rose pâle et argent, avec un lys, une rose et de la vanille" }),
  parfum({ slug: "asad-elixir", name: "Asad Elixir", brand: "Lattafa", category: "lattafa", image: asadElixir, alt: "Flacon Asad Elixir de Lattafa, noir et or rose, avec une rose rouge, de la lavande et du bois", isFavorite: true }),
  parfum({ slug: "asad-zanzibar", name: "Asad Zanzibar", brand: "Lattafa", category: "lattafa", image: asadZanzibar, alt: "Flacon Asad Zanzibar de Lattafa, bleu nuit et argent, avec noix de coco, citron vert et ananas", isNew: true }),
  parfum({ slug: "confidential-private-gold", name: "Confidential Private Gold", brand: "Lattafa", category: "lattafa", image: confidential, alt: "Flacon doré Confidential Private Gold de Lattafa, avec bois, ambre, safran et cardamome" }),
  parfum({ slug: "kenzie-marshmallow-dream", name: "Marshmallow Dream", brand: "Kenzie par Volaré", category: "kenzie", description: "Eau de parfum de la gamme Kenzie, par Volaré.", image: kenzieMarshmallow, alt: "Flacon rose Kenzie Marshmallow Dream avec guimauves, fraises et barbe à papa", isNew: true }),
  parfum({ slug: "kenzie-vanilla-70", name: "Vanilla 70", brand: "Kenzie par Volaré", category: "kenzie", description: "Eau de parfum de la gamme Kenzie, par Volaré.", image: kenzieVanilla, alt: "Flacon ambré Kenzie Vanilla 70 avec gousses de vanille, caramel et fleurs de vanillier" }),
  parfum({ slug: "kenzie-classic-pistachio", name: "Classic Pistachio", brand: "Kenzie par Volaré", category: "kenzie", description: "Eau de parfum de la gamme Kenzie, par Volaré.", image: kenziePistachio, alt: "Flacon vert doré Kenzie Classic Pistachio avec pistaches et gâteau à la pistache", isNew: true }),
  parfum({ slug: "kenzie-amber-lychee", name: "Amber Lychee", brand: "Kenzie par Volaré", category: "kenzie", description: "Eau de parfum de la gamme Kenzie, par Volaré.", image: kenzieLychee, alt: "Flacon orangé Kenzie Amber Lychee avec litchis, fleurs blanches et ambre" }),
  parfum({ slug: "kenzie-oud-blend", name: "Oud Blend", brand: "Kenzie par Volaré", category: "kenzie", description: "Eau de parfum de la gamme Kenzie, par Volaré.", image: kenzieOud, alt: "Flacon brun foncé Kenzie Oud Blend avec poire, safran, noisettes, rose rouge et bois d'oud" }),
  parfum({ slug: "kenzie-exotic-apple-crush", name: "Exotic Apple Crush", brand: "Kenzie par Volaré", category: "kenzie", description: "Eau de parfum de la gamme Kenzie, par Volaré.", image: kenzieApple, alt: "Flacon rouge Kenzie Exotic Apple Crush avec pomme, mangue, fruit de la passion et hibiscus" }),
  parfum({ slug: "kenzie-mystique-fleur", name: "Mystique Fleur", brand: "Kenzie par Volaré", category: "kenzie", description: "Eau de parfum de la gamme Kenzie, par Volaré.", image: kenzieMystique, alt: "Flacon rouge et violet Kenzie Mystique Fleur avec roses, prune et groseilles" }),
  parfum({ slug: "kenzie-silk-serenity", name: "Silk Serenity", brand: "Kenzie par Volaré", category: "kenzie", description: "Eau de parfum de la gamme Kenzie, par Volaré.", image: kenzieSilk, alt: "Flacon pêche étoilé Kenzie Silk Serenity avec poire, rose pâle, fleurs blanches et vanille" }),
  {
    slug: "imphair-rituel-coreen", name: "Rituel coréen", brand: "IMP'hair Professionnel", category: "imphair", kind: "soin-cheveux", notes: none,
    description: "Gamme peptides et céramides : shampoing, sérum et masque.",
    image: impRituel, alt: "Shampoing, sérum et masque IMP'hair Rituel coréen, flacons roses à bouchon rouge", variants: imphairSet("irc"),
  },
  {
    slug: "imphair-glossy", name: "Effet glossy & restructurant", brand: "IMP'hair Professionnel", category: "imphair", kind: "soin-cheveux", notes: none,
    description: "Gamme biotine et acide hyaluronique : shampoing, sérum et masque.",
    image: impGlossy, alt: "Shampoing, sérum et masque IMP'hair Effet glossy, flacons roses à bouchon turquoise", variants: imphairSet("igl"),
  },
  {
    slug: "imphair-hydratant", name: "Hydratant réparateur", brand: "IMP'hair Professionnel", category: "imphair", kind: "soin-cheveux", notes: none,
    description: "Gamme huile de ricin et protéine de soie : shampoing, sérum et masque.",
    image: impHydratant, alt: "Shampoing, sérum et masque IMP'hair Hydratant réparateur, flacons turquoise à bouchon rose", variants: imphairSet("ihy"),
  },
];

/** Nom complet affiché, avec la teinte quand plusieurs déclinaisons partagent un nom. */
export const displayName = (p: Product) => (p.shade ? `${p.name} ${p.shade}` : p.name);

export type SortKey = "pertinence" | "nom";

export function filterProducts(list: Product[], opts: { q?: string; cat?: CategorySlug; sort?: SortKey }): Product[] {
  const q = opts.q?.trim().toLowerCase();
  let out = list.filter((p) => (!opts.cat || p.category === opts.cat) &&
    (!q || `${displayName(p)} ${p.brand ?? ""} ${p.description ?? ""}`.toLowerCase().includes(q)));
  if (opts.sort === "nom") out = [...out].sort((a, b) => displayName(a).localeCompare(displayName(b), "fr"));
  return out;
}

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
