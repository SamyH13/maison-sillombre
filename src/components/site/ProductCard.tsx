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
  const name = displayName(product);
  return (
    <article className="group">
      <Link to="/produit/$slug" params={{ slug: product.slug }} className="block" tabIndex={-1} aria-hidden="true">
        <div className="niche">
          <img src={product.image} alt="" loading="lazy" width={900} height={1200} className="object-cover" />
        </div>
      </Link>
      <div className="niche-sill" aria-hidden="true" />
      <div className="mt-3 flex items-start justify-between gap-2">
        <Link to="/produit/$slug" params={{ slug: product.slug }} className="min-w-0">
          <h3 className="text-xl md:text-2xl group-hover:text-zellige transition-colors">{name}</h3>
          <p className="mt-1 truncate text-sm text-ink-soft">{product.brand ?? getCategory(product.category)?.name}</p>
          <p className="text-sm text-ink-soft">{formatPrice(price)}</p>
        </Link>
        <button onClick={() => fav.toggle(product.slug)} aria-pressed={liked}
          aria-label={liked ? `Retirer ${name} des favoris` : `Ajouter ${name} aux favoris`}
          className="-mr-2 grid size-11 shrink-0 place-items-center text-ink-soft hover:text-foreground transition-colors">
          <Heart className={`size-5 ${liked ? "fill-zellige text-zellige" : ""}`} strokeWidth={1.5} />
        </button>
      </div>
    </article>
  );
}
