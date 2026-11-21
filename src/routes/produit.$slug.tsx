import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Heart, MessageCircle, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import {
  getCategory,
  getProduct,
  isPurchasable,
  relatedProducts,
  type Intensity,
  type Product,
  type Variant,
} from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import { useFavorites } from "@/lib/store/favorites";
import { clampQty, useCart } from "@/lib/store/cart";
import { siteConfig, whatsappLink } from "@/config/site";
import { ExampleTag } from "@/components/site/ExampleTag";
import { ProductCard } from "@/components/site/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/produit/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const t = p ? (p.seo?.title ?? `${p.name} — Maison Sillombre`) : "Produit — Maison Sillombre";
    const d = p
      ? (p.seo?.description ?? p.tagline ?? p.description)
      : "Fiche produit Maison Sillombre.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "product" },
        ...(p ? [{ property: "og:image", content: p.image }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      // Données structurées pour Google : uniquement pour les vraies fiches, jamais les exemples.
      scripts:
        p && !p.isExample
          ? [{ type: "application/ld+json", children: JSON.stringify(productJsonLd(p)) }]
          : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-lux py-32 text-center">
      <h1 className="text-4xl">Produit introuvable</h1>
      <Link to="/catalogue" search={{}} className="mt-6 inline-block eyebrow link-lux">
        Retour au catalogue
      </Link>
    </div>
  ),
  component: ProductPage,
});

function productJsonLd(p: Product) {
  const offers = p.variants
    .filter((v) => v.priceCents !== null)
    .map((v) => ({
      "@type": "Offer",
      name: v.label,
      price: ((v.priceCents ?? 0) / 100).toFixed(2),
      priceCurrency: siteConfig.currency,
      ...(v.stock !== null && {
        availability: v.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      }),
    }));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.tagline ? `${p.tagline} ${p.description}` : p.description,
    image: [p.image, ...(p.gallery ?? [])],
    ...(p.sku && { sku: p.sku }),
    category: getCategory(p.category)?.name,
    ...(p.brand && { brand: { "@type": "Brand", name: p.brand } }),
    ...(offers.length && { offers }),
  };
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  // La clé réinitialise contenance, quantité et galerie quand on passe d'un produit à l'autre.
  return <ProductView key={product.slug} product={product} />;
}

function ProductView({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0]?.id);
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const fav = useFavorites();
  const cart = useCart();
  const liked = fav.has(product.slug);
  const purchasable = !!variant && isPurchasable(variant);
  const wa = whatsappLink(
    `Bonjour, je souhaite un renseignement sur « ${product.name} »${variant ? ` (${variant.label})` : ""}.`,
  );
  const category = getCategory(product.category);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 4000);
    return () => clearTimeout(t);
  }, [added]);

  const choose = (v: Variant) => {
    setVariantId(v.id);
    setQty((q) => Math.max(1, clampQty(v.id, q)));
    setAdded(false);
  };
  const addToCart = () => {
    if (variant && cart.add(variant.id, qty)) setAdded(true);
  };

  const notes = [
    ["Tête", product.notes.top],
    ["Cœur", product.notes.heart],
    ["Fond", product.notes.base],
  ] as const;
  const hasNotes = notes.some(([, list]) => list.length > 0);

  return (
    <>
      <div className="container-lux pt-6 md:pt-10">
        <nav aria-label="Fil d'Ariane" className="text-sm uppercase tracking-wide text-muted-foreground">
          <Link to="/catalogue" search={{}} className="link-lux">
            Catalogue
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <Link to="/catalogue" search={{ cat: product.category }} className="link-lux">
            {category?.name}
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span aria-current="page" className="text-foreground">
            {product.name}
          </span>
        </nav>
      </div>

      <section className="container-lux mt-6 grid md:grid-cols-2 gap-10 md:gap-16">
        <Gallery product={product} />

        <div className="md:py-4 animate-rise">
          <p className="eyebrow text-muted-foreground">
            {[product.brand, product.concentration ?? product.collection]
              .filter(Boolean)
              .join(" · ")}
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl leading-tight">{product.name}</h1>
          {product.range && (
            <p className="mt-4 inline-flex items-center gap-2.5 text-sm">
              <span
                className="size-3.5 rounded-full ring-1 ring-border"
                style={{ background: product.range.swatch }}
                aria-hidden
              />
              Gamme {product.range.color} · {product.range.items.length} soins vendus ensemble
            </p>
          )}
          <p className="mt-4 text-3xl font-semibold" aria-live="polite">
            {formatPrice(variant?.priceCents ?? null)}
          </p>
          {product.tagline && (
            <p className="mt-6 text-lg font-medium leading-snug max-w-md">
              {product.tagline}
            </p>
          )}
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
            {product.description}
          </p>
          <p className="mt-4 eyebrow text-muted-foreground">{product.family}</p>

          {product.variants.length > 0 && (
            <fieldset className="mt-10">
              <legend className="eyebrow text-muted-foreground mb-3">Contenance</legend>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => {
                  const active = v.id === variant?.id;
                  const soldOut = v.stock === 0;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => choose(v)}
                      aria-pressed={active}
                      className={`min-w-20 border px-4 py-3 text-sm transition-colors ${active ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"} ${soldOut ? "line-through decoration-1 opacity-60" : ""}`}
                    >
                      {v.label}
                      {v.priceCents !== null && (
                        <span
                          className={`block text-[0.7rem] mt-0.5 ${active ? "text-background/70" : "text-muted-foreground"}`}
                        >
                          {formatPrice(v.priceCents)}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {variant && (
                <p className="mt-3 text-xs text-muted-foreground">{availability(variant)}</p>
              )}
            </fieldset>
          )}

          <div className="mt-8 flex gap-3">
            <QtyStepper
              value={qty}
              max={variant ? Math.max(1, clampQty(variant.id, 99)) : 1}
              disabled={!purchasable}
              onChange={setQty}
            />
            <button
              type="button"
              onClick={addToCart}
              disabled={!purchasable}
              aria-describedby="achat-info"
              className="btn-lux flex-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-ink disabled:hover:text-ink-foreground"
            >
              {added ? (
                <>
                  <Check className="size-4" strokeWidth={1.5} /> Ajouté
                </>
              ) : (
                "Ajouter au panier"
              )}
            </button>
            <button
              type="button"
              onClick={() => fav.toggle(product.slug)}
              aria-pressed={liked}
              aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"}
              className="grid w-14 shrink-0 place-items-center border border-border hover:border-foreground transition-colors"
            >
              <Heart className={`size-5 ${liked ? "fill-champagne text-champagne" : ""}`} strokeWidth={1.25} />
            </button>
          </div>
          <p id="achat-info" className="mt-3 text-xs text-muted-foreground" aria-live="polite">
            {added ? (
              <>
                Ajouté à votre panier.{" "}
                <Link to="/panier" className="link-lux text-foreground">
                  Voir le panier
                </Link>
              </>
            ) : !variant || variant.priceCents === null ? (
              "Le prix de ce produit sera bientôt communiqué."
            ) : variant.stock === 0 ? (
              "Cette contenance est épuisée."
            ) : siteConfig.commerceEnabled ? (
              "Paiement sécurisé."
            ) : (
              "Le paiement en ligne ouvre bientôt : vous pouvez déjà préparer votre panier."
            )}
          </p>
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm link-lux"
            >
              <MessageCircle className="size-4" strokeWidth={1.25} /> Une question sur ce produit ?
              Écrivez-nous
            </a>
          )}

          {(product.longevity || product.sillage || product.occasions?.length) && (
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-6">
              {product.longevity && <Meter label="Tenue" value={product.longevity} />}
              {product.sillage && <Meter label="Sillage" value={product.sillage} />}
              {!!product.occasions?.length && (
                <div className="col-span-2">
                  <p className="eyebrow text-muted-foreground">Moments</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.occasions.map((o) => (
                      <span key={o} className="border border-border px-3 py-1 text-xs">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <Accordion
            type="multiple"
            defaultValue={["notes", "benefits", "contents"]}
            className="mt-12 border-t border-border"
          >
            {hasNotes && (
              <Section value="notes" title="Pyramide olfactive">
                {notes
                  .filter(([, list]) => list.length > 0)
                  .map(([label, list]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-6 border-b border-border/60 py-3 last:border-0"
                    >
                      <span className="font-medium">{label}</span>
                      <span className="text-sm text-muted-foreground text-right">
                        {list.join(", ")}
                      </span>
                    </div>
                  ))}
              </Section>
            )}
            {product.contents && (
              <Section value="contents" title="Contenu du coffret">
                <p className="text-sm text-muted-foreground leading-relaxed">{product.contents}</p>
              </Section>
            )}
            {!!product.benefits?.length && (
              <Section value="benefits" title="Bénéfices">
                <ul className="flex flex-wrap gap-2">
                  {product.benefits.map((b) => (
                    <li key={b} className="border border-border px-3 py-1 text-xs">
                      {b}
                    </li>
                  ))}
                </ul>
              </Section>
            )}
            {product.ingredients && (
              <Section value="ingredients" title="Composition">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.ingredients}
                </p>
              </Section>
            )}
            {product.usage && (
              <Section value="usage" title="Conseils d'utilisation">
                <p className="text-sm text-muted-foreground leading-relaxed">{product.usage}</p>
              </Section>
            )}
          </Accordion>
        </div>
      </section>

      {product.range && <RangeSection range={product.range} />}

      <section className="container-lux mt-24">
        <h2 className="text-2xl md:text-3xl uppercase mb-8">Produits similaires</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {relatedProducts(product).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}

function RangeSection({ range }: { range: NonNullable<Product["range"]> }) {
  return (
    <section className="container-lux mt-24 md:mt-32" aria-labelledby="trio-titre">
      <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
        <div>
          <p className="eyebrow text-muted-foreground">Le rituel en {range.items.length} gestes</p>
          <h2 id="trio-titre" className="mt-2 text-2xl md:text-3xl uppercase">
            Dans le trio
          </h2>
        </div>
        <span
          className="hidden md:block h-1 w-24"
          style={{ background: range.swatch }}
          aria-hidden
        />
      </div>
      <ol className="grid md:grid-cols-3 gap-10 md:gap-8 mt-10">
        {range.items.map((item, i) => (
          <li key={item.sku} className="flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                width={900}
                height={1200}
                className="size-full object-cover"
              />
              <span className="absolute left-3 top-3 grid size-9 place-items-center rounded-full bg-champagne text-white font-bold">
                {i + 1}
              </span>
            </div>
            <p className="mt-5 eyebrow text-muted-foreground">
              {item.type} · {item.volume}
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-snug">{item.name}</h3>
            <p className="mt-2 font-medium leading-snug">{item.tagline}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            {item.benefits.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.benefits.map((b) => (
                  <li key={b} className="border border-border px-2.5 py-0.5 text-[0.7rem]">
                    {b}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed">
              <span className="eyebrow text-muted-foreground block mb-1.5">Utilisation</span>
              {item.usage}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function availability(v: Variant): string {
  if (v.stock === null) return "Disponibilité : non renseignée";
  if (v.stock === 0) return "Épuisé";
  if (v.stock <= 3) return `Plus que ${v.stock} en stock`;
  return "En stock";
}

function Gallery({ product }: { product: Product }) {
  const images = [product.image, ...(product.gallery ?? [])];
  const [index, setIndex] = useState(0);
  return (
    <div className="md:sticky md:top-24 self-start">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          key={index}
          src={images[index]}
          alt={
            product.range?.items[index]?.name ??
            (index === 0 ? product.name : `${product.name}, vue ${index + 1}`)
          }
          width={768}
          height={1024}
          className={`size-full object-cover ${index === 0 ? "animate-slowzoom" : "animate-fade"}`}
        />
        {product.isExample && (
          <div className="absolute left-4 top-4">
            <ExampleTag />
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2" role="group" aria-label="Photos du produit">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Voir la photo ${i + 1}`}
              aria-pressed={i === index}
              className={`aspect-square overflow-hidden bg-muted border transition-colors ${i === index ? "border-foreground" : "border-transparent opacity-70 hover:opacity-100"}`}
            >
              <img src={src} alt="" loading="lazy" className="size-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function QtyStepper({
  value,
  max,
  disabled,
  onChange,
}: {
  value: number;
  max: number;
  disabled: boolean;
  onChange: (n: number) => void;
}) {
  return (
    <div
      className={`flex items-center border border-border ${disabled ? "opacity-50" : ""}`}
      role="group"
      aria-label="Quantité"
    >
      <button
        type="button"
        disabled={disabled || value <= 1}
        onClick={() => onChange(value - 1)}
        aria-label="Diminuer la quantité"
        className="grid h-full w-10 place-items-center disabled:cursor-not-allowed"
      >
        <Minus className="size-3.5" strokeWidth={1.5} />
      </button>
      <span className="w-6 text-center text-sm tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        disabled={disabled || value >= max}
        onClick={() => onChange(value + 1)}
        aria-label="Augmenter la quantité"
        className="grid h-full w-10 place-items-center disabled:cursor-not-allowed"
      >
        <Plus className="size-3.5" strokeWidth={1.5} />
      </button>
    </div>
  );
}

function Meter({ label, value }: { label: string; value: Intensity }) {
  return (
    <div>
      <p className="eyebrow text-muted-foreground">{label}</p>
      <div className="mt-3 flex gap-1" role="img" aria-label={`${label} : ${value} sur 5`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`h-1 flex-1 ${i <= value ? "bg-foreground" : "bg-border"}`} />
        ))}
      </div>
    </div>
  );
}

function Section({
  value,
  title,
  children,
}: {
  value: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem value={value} className="border-border">
      <AccordionTrigger className="py-5 text-sm font-semibold uppercase tracking-wide hover:no-underline hover:text-champagne">
        {title}
      </AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
}
