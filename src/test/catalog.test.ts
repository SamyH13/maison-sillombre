import { describe, expect, it } from "vitest";
import { filterProducts, products } from "@/data/catalog";
import { formatPrice } from "@/lib/format";

describe("catalogue", () => {
  it("n'affiche jamais de prix inventé quand il n'est pas renseigné", () => {
    expect(formatPrice(null)).toBe("Prix à venir");
  });
  it("formate en euros", () => {
    expect(formatPrice(4950)).toBe("49,50 €");
  });
  it("filtre par catégorie", () => {
    const list = filterProducts(products, { cat: "soins-capillaires" });
    expect(list.length).toBe(3);
    expect(list.every((p) => p.category === "soins-capillaires")).toBe(true);
  });
  it("contient le vrai catalogue : 27 parfums, 1 coffret, 3 trios capillaires", () => {
    expect(products.filter((p) => p.category === "parfums")).toHaveLength(27);
    expect(products.filter((p) => p.category === "coffrets")).toHaveLength(1);
    expect(products.every((p) => !p.isExample)).toBe(true);
    expect(new Set(products.map((p) => p.slug)).size).toBe(products.length);
  });
  it("chaque trio réunit shampoing, masque et sérum d'une même gamme", () => {
    const trios = products.filter((p) => p.range);
    expect(trios.map((t) => t.range!.color).sort()).toEqual(["bleue", "rose", "rouge bordeaux"]);
    for (const t of trios) {
      expect(t.range!.items.map((i) => i.type)).toEqual(["Shampoing", "Masque", "Sérum"]);
      expect(t.variants).toHaveLength(1);
    }
  });
  it("n'invente aucun prix ni stock tant qu'ils ne sont pas fournis", () => {
    expect(products.every((p) => p.variants.every((v) => v.priceCents === null && v.stock === null))).toBe(true);
  });
  it("filtre par marque", () => {
    expect(filterProducts(products, { marque: "Loui Martin" }).map((p) => p.name).sort()).toEqual(["Vanilla Powdery", "Vanilla Powdery Elixir"]);
  });
});

import { getVariant, isPurchasable, minPrice, relatedProducts, type Product } from "@/data/catalog";
import { clampQty, MAX_QTY } from "@/lib/store/cart";

const make = (slug: string, prices: (number | null)[]): Product => ({
  slug, name: slug, category: "parfums", family: "Floral", notes: { top: [], heart: [], base: [] },
  description: "", image: "", isExample: false,
  variants: prices.map((priceCents, i) => ({ id: `${slug}-${i}`, label: `${i}`, priceCents, stock: null })),
});

describe("prix et tri", () => {
  it("prend le prix le plus bas renseigné", () => {
    expect(minPrice(make("a", [null, 9000, 6500]))).toBe(6500);
    expect(minPrice(make("b", [null]))).toBeNull();
  });
  it("trie par prix et laisse les produits sans prix à la fin", () => {
    const list = [make("sans", [null]), make("cher", [12000]), make("doux", [3000])];
    expect(filterProducts(list, { sort: "prix-asc" }).map((p) => p.slug)).toEqual(["doux", "cher", "sans"]);
    expect(filterProducts(list, { sort: "prix-desc" }).map((p) => p.slug)).toEqual(["cher", "doux", "sans"]);
  });
  it("recherche aussi dans les notes olfactives", () => {
    const p = { ...make("x", [null]), notes: { top: ["Bergamote"], heart: [], base: [] } };
    expect(filterProducts([p], { q: "bergam" })).toHaveLength(1);
  });
});

describe("panier", () => {
  it("refuse d'acheter sans prix ou sans stock", () => {
    expect(isPurchasable({ id: "x", label: "", priceCents: null, stock: null })).toBe(false);
    expect(isPurchasable({ id: "x", label: "", priceCents: 5000, stock: 0 })).toBe(false);
    expect(isPurchasable({ id: "x", label: "", priceCents: 5000, stock: null })).toBe(true);
  });
  it("plafonne les quantités", () => {
    const id = products[0]!.variants[0]!.id;
    expect(getVariant(id)?.product.slug).toBe(products[0]!.slug);
    expect(clampQty(id, 999)).toBe(MAX_QTY);
    expect(clampQty(id, -3)).toBe(0);
  });
  it("suggère d'abord la même catégorie", () => {
    const p = products[0]!;
    expect(relatedProducts(p).every((o) => o.slug !== p.slug)).toBe(true);
  });
});
