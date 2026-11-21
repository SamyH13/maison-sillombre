import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { getCategory, getProduct, products } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import { useFavorites } from "@/lib/store/favorites";
import { whatsappLink } from "@/config/site";
import { ExampleTag } from "@/components/site/ExampleTag";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/produit/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.product.name} — Maison Sillombre` : "Produit — Maison Sillombre";
    const d = loaderData?.product.description ?? "Fiche produit Maison Sillombre.";
    return { meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "product" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  notFoundComponent: () => (
    <div className="container-lux py-32 text-center"><h1 className="text-4xl">Produit introuvable</h1><Link to="/catalogue" search={{}} className="mt-6 inline-block eyebrow link-lux">Retour au catalogue</Link></div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [variantId, setVariantId] = useState(product.variants[0]?.id);
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const fav = useFavorites();
  const liked = fav.has(product.slug);
  const wa = whatsappLink(`Bonjour, je souhaite un renseignement sur « ${product.name} »${variant ? ` (${variant.label})` : ""}.`);
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const notes = [["Tête", product.notes.top], ["Cœur", product.notes.heart], ["Fond", product.notes.base]] as const;
  return (
    <>
      <div className="container-lux pt-6 md:pt-10">
        <nav aria-label="Fil d'Ariane" className="text-xs text-muted-foreground">
          <Link to="/catalogue" search={{}} className="link-lux">Catalogue</Link> <span className="mx-2">/</span>
          <Link to="/catalogue" search={{ cat: product.category }} className="link-lux">{getCategory(product.category)?.name}</Link>
        </nav>
      </div>
      <section className="container-lux mt-6 grid md:grid-cols-2 gap-10 md:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted md:sticky md:top-24 self-start">
          <img src={product.image} alt="" width={768} height={1024} className="size-full object-cover animate-slowzoom" />
          <div className="absolute left-4 top-4"><ExampleTag /></div>
        </div>
        <div className="md:py-10 animate-rise">
          <p className="eyebrow text-muted-foreground">{product.family}</p>
          <h1 className="mt-3 text-5xl md:text-6xl leading-[1]">{product.name}</h1>
          <p className="mt-5 text-lg">{formatPrice(variant?.priceCents ?? null)}</p>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">{product.description}</p>

          {product.variants.length > 0 && (
            <fieldset className="mt-10">
              <legend className="eyebrow text-muted-foreground mb-3">Contenance</legend>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button key={v.id} onClick={() => setVariantId(v.id)} aria-pressed={v.id === variant?.id}
                    className={`min-w-20 border px-4 py-3 text-sm transition-colors ${v.id === variant?.id ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`}>{v.label}</button>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Disponibilité : non renseignée</p>
            </fieldset>
          )}

          <div className="mt-8 flex gap-3">
            <button disabled className="btn-lux flex-1 opacity-50 cursor-not-allowed" aria-describedby="achat-info">Ajouter au panier</button>
            <button onClick={() => fav.toggle(product.slug)} aria-pressed={liked} aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"} className="grid w-14 place-items-center border border-border hover:border-foreground transition-colors">
              <Heart className={`size-5 ${liked ? "fill-foreground" : ""}`} strokeWidth={1.25} />
            </button>
          </div>
          <p id="achat-info" className="mt-3 text-xs text-muted-foreground">La vente en ligne n'est pas encore ouverte.</p>
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm link-lux"><MessageCircle className="size-4" strokeWidth={1.25} /> Une question sur ce parfum ? Écrivez-nous</a>}

          {product.notes.top.length > 0 && (
            <div className="mt-14 border-t border-border">
              <p className="eyebrow text-muted-foreground pt-6 mb-2">Pyramide olfactive</p>
              {notes.map(([label, list]) => (
                <div key={label} className="flex justify-between border-b border-border py-4"><span className="font-serif text-xl">{label}</span><span className="text-sm text-muted-foreground">{list.join(", ")}</span></div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="container-lux mt-24">
        <h2 className="text-3xl md:text-4xl mb-8">Vous aimerez aussi</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">{others.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      </section>
    </>
  );
}
