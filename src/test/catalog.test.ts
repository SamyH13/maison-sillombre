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
