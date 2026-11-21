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
  it("filtre par collection", () => {
    const lattafa = filterProducts(products, { cat: "lattafa" });
    expect(lattafa.length).toBeGreaterThan(0);
    expect(lattafa.every((p) => p.category === "lattafa")).toBe(true);
  });
  it("cherche aussi dans la marque", () => {
    expect(filterProducts(products, { q: "volaré" }).every((p) => p.category === "kenzie")).toBe(true);
  });
  it("n'invente aucun prix ni stock tant que le commerçant ne les a pas fournis", () => {
    expect(products.every((p) => p.variants.every((v) => v.priceCents === null && v.stock === null))).toBe(true);
  });
  it("chaque produit a un identifiant unique et un texte alternatif", () => {
    expect(new Set(products.map((p) => p.slug)).size).toBe(products.length);
    expect(products.every((p) => p.alt.length > 10)).toBe(true);
  });
});
