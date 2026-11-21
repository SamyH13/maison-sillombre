import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { categories, displayName, getProduct, products, type Product } from "@/data/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { Rail } from "@/components/site/Rail";
import { siteConfig, whatsappLink } from "@/config/site";

const DESCRIPTION = "Parfums d'Orient (Lattafa, Oud Mood, Kenzie par Volaré) et soins capillaires IMP'hair, vendus sur les marchés par Maison Sillombre.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Sillombre — Parfums d'Orient, vendus au marché" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Maison Sillombre — Parfums d'Orient, vendus au marché" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/** Les trois flacons du mur d'accueil : le centre est la niche haute. */
const wall = ["yara-vieux-rose", "oud-mood-reminiscence", "asad-elixir"]
  .map((s) => getProduct(s))
  .filter((p): p is Product => Boolean(p));

/** Colonnes explicites : le seuil partagé occupe la 2e rangée sans décaler les niches. */
const wallCols = ["md:col-start-1", "md:col-start-2", "md:col-start-3", "md:col-start-4"];

function Index() {
  const parfums = products.filter((p) => p.kind === "parfum");
  return (
    <>
      <section className="relative -mt-16 md:-mt-20 pt-16 md:pt-20 overflow-hidden" aria-labelledby="titre-accueil">
        <div className="container-lux grid md:grid-cols-12 items-end gap-10 md:gap-8 pt-8 md:pt-14">
          <div className="md:col-span-5 md:pb-16 animate-rise">
            <h1 id="titre-accueil" className="text-[2.75rem] leading-[1] sm:text-6xl lg:text-[4.75rem] lg:leading-[0.98] tracking-[-0.02em]">
              Les parfums d'Orient de notre stand
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Oud, musc, vanille, ambre : retrouvez ici les flacons Lattafa, Oud Mood et Kenzie que nous vendons sur les marchés, et les soins IMP'hair.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/catalogue" search={{}} className="btn-lux">Voir les parfums</Link>
              <a href="#marches" className="link-lux py-2">Où nous trouver</a>
            </div>
          </div>
          <div className="md:col-span-7 lg:-mr-6">
            <div className="grid grid-cols-[0.85fr_1.4fr_0.85fr] items-end gap-2 sm:gap-4 lg:gap-5">
              {wall.map((p, i) => (
                <Link key={p.slug} to="/produit/$slug" params={{ slug: p.slug }} className="group block" aria-label={`Voir ${displayName(p)}`}>
                  <div className={`niche animate-niche-light ${i === 1 ? "" : "mb-[8%]"}`} style={{ animationDelay: `${200 + i * 180}ms` }}>
                    <img src={p.image} alt={p.alt} width={900} height={1200} fetchPriority={i === 1 ? "high" : undefined}
                      className="object-cover" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Banquette de terre cuite sur laquelle reposent les niches. */}
        <div className="tadelakt-terracotta mt-0 h-6 md:h-8 shadow-[inset_0_6px_10px_-6px_oklch(0.2_0.04_40/0.5)]" aria-hidden="true" />
      </section>

      <section className="tadelakt-terracotta pb-20 md:pb-28" aria-labelledby="titre-collections">
        <div className="container-lux pt-14 md:pt-20">
          <div className="max-w-2xl">
            <h2 id="titre-collections" className="text-4xl md:text-6xl">Quatre collections</h2>
            <p className="mt-4 text-lg text-ink">Trois gammes de parfums et une gamme de soins pour les cheveux.</p>
          </div>
          {/* Un mur de niches de tailles variées, toutes posées sur le même seuil (sur ordinateur). */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-[1fr_1.3fr_1.15fr_0.9fr] md:grid-rows-[auto_auto_auto] gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-0">
            {categories.map((c, i) => (
              <Link key={c.slug} to="/catalogue" search={{ cat: c.slug }} className={`group flex flex-col ${wallCols[i]} md:row-start-1 md:row-span-3 md:grid md:grid-rows-subgrid`}>
                <div className="niche md:self-end"><img src={c.image} alt="" loading="lazy" width={900} height={1200} className="object-cover" /></div>
                <div className="niche-sill md:invisible" aria-hidden="true" />
                <span className="mt-4 block">
                  <h3 className="text-2xl md:text-3xl group-hover:text-zellige-deep transition-colors">{c.name}</h3>
                  <span className="mt-1 block text-ink">{c.tagline}</span>
                </span>
              </Link>
            ))}
            <div className="niche-sill hidden md:block md:col-span-4 md:row-start-2 md:col-start-1" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="container-lux pt-20 md:pt-28" aria-labelledby="titre-parfums">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="titre-parfums" className="text-4xl md:text-6xl">Tous nos parfums</h2>
          <Link to="/catalogue" search={{}} className="link-lux py-2">Voir le catalogue complet</Link>
        </div>
        <div className="mt-8">
          <Rail label={`${parfums.length} parfums, faire défiler horizontalement`}>
            {parfums.map((p) => (
              <div key={p.slug} className="w-[62%] sm:w-[38%] md:w-[26%] lg:w-[21%] shrink-0 snap-start"><ProductCard product={p} /></div>
            ))}
          </Rail>
        </div>
      </section>

      <Markets />
    </>
  );
}

function Markets() {
  const markets = siteConfig.markets;
  const wa = whatsappLink("Bonjour Maison Sillombre, sur quel marché êtes-vous cette semaine ?");
  return (
    <section id="marches" className="container-lux mt-24 md:mt-32 scroll-mt-24" aria-labelledby="titre-marches">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="niche max-w-sm mx-auto md:mx-0">
            <img src={getProduct("musk-mood")?.image} alt="" loading="lazy" width={900} height={1200} className="object-cover" />
          </div>
        </div>
        <div className="md:col-span-7 order-1 md:order-2">
          <h2 id="titre-marches" className="text-4xl md:text-6xl">Venez nous voir au marché</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Maison Sillombre vend ses parfums et ses soins sur les marchés. C'est là que vous pouvez découvrir les flacons et demander conseil.
          </p>
          {markets && markets.length > 0 ? (
            <ul className="mt-8 divide-y divide-border border-y border-border max-w-xl">
              {markets.map((m) => (
                <li key={`${m.place}-${m.schedule}`} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4">
                  <span><span className="font-serif text-xl">{m.place}</span> <span className="text-ink-soft">{m.city}</span></span>
                  <span className="text-ink-soft">{m.schedule}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 max-w-xl border border-dashed border-ink-soft/60 px-5 py-4 text-ink-soft">
              Les marchés, jours et horaires seront indiqués ici très prochainement.
            </p>
          )}
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-lux mt-8">
              <MessageCircle className="size-5" strokeWidth={1.5} /> Demander sur WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
