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
    expect(filterProducts(products, { cat: "orientaux" }).every((p) => p.category === "orientaux")).toBe(true);
  });
  it("toutes les fiches de démonstration sont marquées comme exemples", () => {
    expect(products.every((p) => p.isExample && p.variants.every((v) => v.priceCents === null))).toBe(true);
  });
});

import { getVariant, isPurchasable, minPrice, relatedProducts, type Product } from "@/data/catalog";
import { clampQty, MAX_QTY } from "@/lib/store/cart";

const make = (slug: string, prices: (number | null)[]): Product => ({
  slug, name: slug, category: "femme", family: "Floral", notes: { top: [], heart: [], base: [] },
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
