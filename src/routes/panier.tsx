import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/format";
import { clampQty, useCart } from "@/lib/store/cart";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/panier")({
  head: () => ({
    meta: [
      { title: "Panier — Mille et Un Sillages" },
      { name: "description", content: "Votre panier Mille et Un Sillages." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Panier — Mille et Un Sillages" },
      { property: "og:description", content: "Votre panier Mille et Un Sillages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Panier,
});

function Panier() {
  const cart = useCart();
  // Le panier vit dans le navigateur : on attend le montage pour éviter un « panier vide » trompeur au premier rendu.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (!ready) return <PageHero eyebrow="Panier" title="Votre panier" />;

  if (cart.lines.length === 0) {
    return (
      <>
        <PageHero eyebrow="Panier" title="Votre panier est vide">
          Parcourez nos fragrances et ajoutez celles qui vous ressemblent.
        </PageHero>
        <div className="text-center">
          <Link to="/catalogue" search={{}} className="btn-lux">
            Découvrir le catalogue
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="Panier" title="Votre panier">
        {cart.count} article{cart.count > 1 ? "s" : ""}
      </PageHero>
      <div className="container-lux grid lg:grid-cols-[1fr_22rem] gap-12 lg:gap-16 items-start">
        <ul className="border-t border-border">
          {cart.lines.map(({ variantId, qty, product, variant }) => (
            <li
              key={variantId}
              className="grid grid-cols-[5.5rem_1fr_auto] md:grid-cols-[7rem_1fr_auto] gap-4 md:gap-6 border-b border-border py-6"
            >
              <Link
                to="/produit/$slug"
                params={{ slug: product.slug }}
                className="block aspect-square overflow-hidden bg-muted"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </Link>
              <div className="min-w-0">
                <Link
                  to="/produit/$slug"
                  params={{ slug: product.slug }}
                  className="font-serif text-xl md:text-2xl link-lux"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-sm text-muted-foreground">{variant.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {formatPrice(variant.priceCents)} l'unité
                </p>
                <div
                  className="mt-4 inline-flex items-center border border-border"
                  role="group"
                  aria-label={`Quantité pour ${product.name}`}
                >
                  <button
                    type="button"
                    onClick={() => cart.setQty(variantId, qty - 1)}
                    aria-label="Diminuer la quantité"
                    className="grid size-9 place-items-center"
                  >
                    <Minus className="size-3.5" strokeWidth={1.5} />
                  </button>
                  <span className="w-6 text-center text-sm tabular-nums">{qty}</span>
                  <button
                    type="button"
                    onClick={() => cart.setQty(variantId, qty + 1)}
                    disabled={clampQty(variantId, qty + 1) <= qty}
                    aria-label="Augmenter la quantité"
                    className="grid size-9 place-items-center disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Plus className="size-3.5" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  type="button"
                  onClick={() => cart.remove(variantId)}
                  aria-label={`Retirer ${product.name} du panier`}
                  className="p-1 -mr-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="size-4" strokeWidth={1.5} />
                </button>
                <p className="tabular-nums">{formatPrice((variant.priceCents ?? 0) * qty)}</p>
              </div>
            </li>
          ))}
        </ul>

        <aside className="lg:sticky lg:top-28 border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl">Récapitulatif</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Sous-total</dt>
              <dd className="tabular-nums">{formatPrice(cart.subtotalCents)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Livraison</dt>
              <dd className="text-muted-foreground">Calculée à l'étape suivante</dd>
            </div>
          </dl>
          <div className="mt-6 flex justify-between border-t border-border pt-5">
            <span className="font-serif text-xl">Total</span>
            <span className="font-serif text-xl tabular-nums">
              {formatPrice(cart.subtotalCents)}
            </span>
          </div>
          <button
            type="button"
            disabled={!siteConfig.commerceEnabled}
            className="btn-lux mt-6 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-ink disabled:hover:text-ink-foreground"
          >
            Passer commande
          </button>
          {!siteConfig.commerceEnabled && (
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              Le paiement en ligne ouvre très bientôt. Votre panier reste enregistré sur cet
              appareil.
            </p>
          )}
          <Link to="/catalogue" search={{}} className="mt-6 inline-block eyebrow link-lux">
            Continuer mes achats
          </Link>
        </aside>
      </div>
    </>
  );
}
