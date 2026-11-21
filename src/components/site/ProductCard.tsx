import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Product } from "@/data/catalog";
import { getCategory } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import { useFavorites } from "@/lib/store/favorites";
import { ExampleTag } from "./ExampleTag";

export function ProductCard({ product }: { product: Product }) {
  const fav = useFavorites();
  const liked = fav.has(product.slug);
  return (
    <article className="group relative">
      <Link to="/produit/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img src={product.image} alt="" loading="lazy" width={768} height={1024} className="size-full object-cover img-zoom group-hover:scale-105" />
          <div className="absolute left-3 top-3"><ExampleTag /></div>
        </div>
        <div className="pt-4">
          <p className="eyebrow text-muted-foreground">{getCategory(product.category)?.name} · {product.family}</p>
          <h3 className="mt-1.5 font-serif text-xl md:text-2xl">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{formatPrice(product.variants[0]?.priceCents ?? null)}</p>
        </div>
      </Link>
      <button onClick={() => fav.toggle(product.slug)} aria-pressed={liked}
        aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"}
        className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background/85 backdrop-blur transition hover:bg-background">
        <Heart className={`size-4 ${liked ? "fill-foreground" : ""}`} strokeWidth={1.4} />
      </button>
    </article>
  );
}
