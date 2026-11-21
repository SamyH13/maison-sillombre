import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { displayName, getCategory, getProduct, products } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import { useFavorites } from "@/lib/store/favorites";
import { siteConfig, whatsappLink } from "@/config/site";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/produit/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const t = p ? `${displayName(p)}${p.brand ? ` — ${p.brand}` : ""} | Maison Sillombre` : "Produit | Maison Sillombre";
    const d = p?.description ?? (p ? `${displayName(p)}, en vente sur le stand de Maison Sillombre.` : "Fiche produit Maison Sillombre.");
    return { meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "product" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  notFoundComponent: () => (
    <div className="container-lux py-32 max-w-xl"><h1 className="text-5xl">Produit introuvable</h1><p className="mt-4 text-ink-soft">Ce produit n'existe pas ou n'est plus présenté.</p><Link to="/catalogue" search={{}} className="btn-lux mt-8">Retour au catalogue</Link></div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [variantId, setVariantId] = useState(product.variants[0]?.id);
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const fav = useFavorites();
  const liked = fav.has(product.slug);
  const name = displayName(product);
  const wa = whatsappLink(`Bonjour, je souhaite un renseignement sur « ${name} »${variant ? ` (${variant.label})` : ""}.`);
  const sameCollection = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const others = [...sameCollection, ...products.filter((p) => p.slug !== product.slug && p.category !== product.category && p.kind === product.kind)].slice(0, 4);
  const notes = [["Tête", product.notes.top], ["Cœur", product.notes.heart], ["Fond", product.notes.base]] as const;
  const category = getCategory(product.category);
  return (
    <>
      <div className="container-lux pt-4 md:pt-8">
        <nav aria-label="Fil d'Ariane" className="text-sm text-ink-soft">
          <Link to="/catalogue" search={{}} className="link-lux">Catalogue</Link> <span className="mx-1.5" aria-hidden="true">/</span>
          <Link to="/catalogue" search={{ cat: product.category }} className="link-lux">{category?.name}</Link>
        </nav>
      </div>
      <section className="container-lux mt-6 grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-6 lg:col-span-5 md:sticky md:top-24 self-start">
          <div className="niche animate-niche-light max-w-md mx-auto md:max-w-none">
            <img src={product.image} alt={product.alt} width={900} height={1200} fetchPriority="high" className="size-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-6 lg:col-start-7 md:pt-6">
          {product.brand && <p className="text-ink-soft">{product.brand}</p>}
          <h1 className="mt-2 text-5xl md:text-6xl">{name}</h1>
          <p className="mt-5 text-xl">{formatPrice(variant?.priceCents ?? null)}</p>
          <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">{product.description ?? "La description de ce parfum sera bientôt disponible. En attendant, demandez conseil au stand."}</p>

          {product.variants.length > 0 && (
            <fieldset className="mt-10">
              <legend className="mb-3 text-ink-soft">Format</legend>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button key={v.id} onClick={() => setVariantId(v.id)} aria-pressed={v.id === variant?.id}
                    className={`min-h-11 rounded-sm border px-4 py-2 transition-colors ${v.id === variant?.id ? "border-zellige bg-zellige text-primary-foreground" : "border-ink-soft/40 hover:border-foreground"}`}>{v.label}</button>
                ))}
              </div>
            </fieldset>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-lux"><MessageCircle className="size-5" strokeWidth={1.5} /> Poser une question</a>}
            <button onClick={() => fav.toggle(product.slug)} aria-pressed={liked} className="btn-lux-outline">
              <Heart className={`size-5 ${liked ? "fill-current" : ""}`} strokeWidth={1.5} /> {liked ? "Dans mes favoris" : "Ajouter aux favoris"}
            </button>
          </div>
          {!siteConfig.commerceEnabled && (
            <p className="mt-5 max-w-prose text-sm text-ink-soft">La vente en ligne n'est pas encore ouverte : nos produits se vendent au stand, sur les marchés.</p>
          )}

          {product.notes.top.length > 0 && (
            <div className="mt-14 border-t border-border">
              <h2 className="pt-6 mb-2 font-sans text-base font-normal text-ink-soft">Pyramide olfactive</h2>
              {notes.map(([label, list]) => (
                <div key={label} className="flex justify-between gap-6 border-b border-border py-4"><span className="font-serif text-xl">{label}</span><span className="text-right text-ink-soft">{list.join(", ")}</span></div>
              ))}
            </div>
          )}
        </div>
      </section>
      {others.length > 0 && (
        <section className="container-lux mt-24 md:mt-32">
          <h2 className="text-4xl md:text-5xl mb-10">{others.every((p) => p.category === product.category) ? `Aussi chez ${category?.name}` : "À découvrir aussi"}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">{others.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
        </section>
      )}
    </>
  );
}
