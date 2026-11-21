import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Product } from "@/data/catalog";
import { getCategory, minPrice } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import { useFavorites } from "@/lib/store/favorites";
import { ExampleTag } from "./ExampleTag";

export function ProductCard({ product }: { product: Product }) {
  const fav = useFavorites();
  const liked = fav.has(product.slug);
  return (
    <article className="group relative">
      <Link to="/produit/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} loading="lazy" width={768} height={1024} className="size-full object-cover img-zoom group-hover:scale-105" />
          {product.isExample ? <div className="absolute left-3 top-3"><ExampleTag /></div>
            : product.isNew && <span className="absolute left-3 top-3 eyebrow bg-champagne text-white px-2 py-1">Nouveau</span>}
        </div>
        <div className="pt-4 text-center">
          <p className="eyebrow text-muted-foreground flex items-center justify-center gap-2">
            {product.range && <span className="size-2.5 rounded-full shrink-0" style={{ background: product.range.swatch }} aria-hidden />}
            <span className="truncate">{product.range ? `Gamme ${product.range.color}` : product.brand ?? getCategory(product.category)?.name}</span>
          </p>
          <h3 className="mt-1.5 text-[0.95rem] md:text-base font-medium leading-snug group-hover:text-champagne transition-colors">{product.name}</h3>
          <p className="mt-1 text-sm font-semibold">{priceLabel(product)}</p>
        </div>
      </Link>
      <button onClick={() => fav.toggle(product.slug)} aria-pressed={liked}
        aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"}
        className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background/85 backdrop-blur transition hover:bg-background">
        <Heart className={`size-4 ${liked ? "fill-champagne text-champagne" : ""}`} strokeWidth={1.4} />
      </button>
    </article>
  );
}

function priceLabel(p: Product): string {
  const min = minPrice(p);
  const priced = p.variants.filter((v) => v.priceCents !== null).length;
  return min !== null && priced > 1 ? `dès ${formatPrice(min)}` : formatPrice(min);
}
