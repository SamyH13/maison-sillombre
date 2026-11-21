import { useCallback, useEffect, useState } from "react";
import { getVariant, isPurchasable } from "@/data/catalog";

/**
 * Panier conservé sur cet appareil (localStorage). Il ne stocke que des
 * identifiants de contenance et des quantités : prix et stock sont toujours
 * relus depuis le catalogue, jamais depuis le navigateur.
 */
export interface CartLine {
  variantId: string;
  qty: number;
}

const KEY = "sillombre:panier";
const EVT = "sillombre:panier-change";
export const MAX_QTY = 10;

/** Une ligne dont le prix a été retiré ou le stock épuisé sort du panier : jamais de total à 0 € inventé. */
function isStillPurchasable(variantId: string): boolean {
  const found = getVariant(variantId);
  return !!found && isPurchasable(found.variant);
}

function read(): CartLine[] {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    if (!Array.isArray(raw)) return [];
    return raw.filter(
      (l): l is CartLine =>
        typeof l?.variantId === "string" &&
        Number.isInteger(l?.qty) &&
        l.qty > 0 &&
        isStillPurchasable(l.variantId),
    );
  } catch {
    return [];
  }
}

function write(lines: CartLine[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* stockage indisponible (navigation privée) : le panier reste en mémoire le temps de la page */
  }
  window.dispatchEvent(new Event(EVT));
}

/** Plafonne une quantité au stock disponible (si suivi) et à MAX_QTY. */
export function clampQty(variantId: string, qty: number): number {
  const found = getVariant(variantId);
  const stock = found?.variant.stock;
  const cap = stock === null || stock === undefined ? MAX_QTY : Math.min(MAX_QTY, stock);
  return Math.max(0, Math.min(cap, Math.floor(qty)));
}

export function useCart() {
  const [lines, setLines] = useState<CartLine[]>([]);
  useEffect(() => {
    const sync = () => setLines(read());
    sync();
    window.addEventListener(EVT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const setQty = useCallback((variantId: string, qty: number) => {
    const n = clampQty(variantId, qty);
    const cur = read();
    const next =
      n === 0
        ? cur.filter((l) => l.variantId !== variantId)
        : cur.some((l) => l.variantId === variantId)
          ? cur.map((l) => (l.variantId === variantId ? { ...l, qty: n } : l))
          : [...cur, { variantId, qty: n }];
    write(next);
  }, []);

  const add = useCallback(
    (variantId: string, qty = 1) => {
      const found = getVariant(variantId);
      if (!found || !isPurchasable(found.variant)) return false;
      const current = read().find((l) => l.variantId === variantId)?.qty ?? 0;
      setQty(variantId, current + qty);
      return true;
    },
    [setQty],
  );

  const remove = useCallback((variantId: string) => setQty(variantId, 0), [setQty]);
  const clear = useCallback(() => write([]), []);

  const detailed = lines.flatMap((l) => {
    const found = getVariant(l.variantId);
    return found ? [{ ...l, ...found }] : [];
  });
  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotalCents = detailed.reduce((sum, l) => sum + (l.variant.priceCents ?? 0) * l.qty, 0);

  return { lines: detailed, count, subtotalCents, add, setQty, remove, clear };
}
