import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Product } from "@/data/catalog";
import { displayName, getCategory } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import { useFavorites } from "@/lib/store/favorites";

export function ProductCard({ product }: { product: Product }) {
  const fav = useFavorites();
  const liked = fav.has(product.slug);
  const price = product.variants[0]?.priceCents ?? null;
  return (
    <article className="group">
      <Link to="/produit/$slug" params={{ slug: product.slug }} className="block rounded-sm focus-visible:outline-offset-4">
        <div className="niche">
          <img src={product.image} alt={product.alt} loading="lazy" width={900} height={1200}
            className="size-full object-cover img-zoom group-hover:scale-[1.04]" />
        </div>
      </Link>
      <div className="mt-4 flex items-start justify-between gap-2">
        <Link to="/produit/$slug" params={{ slug: product.slug }} className="min-w-0">
          <p className="eyebrow truncate">{product.brand ?? getCategory(product.category)?.name}</p>
          <h3 className="mt-0.5 text-xl md:text-2xl group-hover:text-zellige transition-colors">{displayName(product)}</h3>
          <p className="mt-1 text-sm text-ink-soft">{formatPrice(price)}</p>
        </Link>
        <button onClick={() => fav.toggle(product.slug)} aria-pressed={liked}
          aria-label={liked ? `Retirer ${displayName(product)} des favoris` : `Ajouter ${displayName(product)} aux favoris`}
          className="-mr-2 grid size-11 shrink-0 place-items-center text-ink-soft hover:text-foreground transition-colors">
          <Heart className={`size-5 ${liked ? "fill-zellige text-zellige" : ""}`} strokeWidth={1.5} />
        </button>
      </div>
    </article>
  );
}
