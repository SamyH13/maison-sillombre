import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-flacon.jpg";
import { categories, products, type CategorySlug } from "@/data/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { ExampleTag } from "@/components/site/ExampleTag";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Sillombre — Parfumerie confidentielle" },
      { name: "description", content: "Parfums Lattafa, Volaré et Loui Martin, coffrets et soins capillaires IMP’HAIR, sélectionnés par une maison indépendante." },
      { property: "og:title", content: "Maison Sillombre — Parfumerie confidentielle" },
      { property: "og:description", content: "Parfums Lattafa, Volaré et Loui Martin, coffrets et soins capillaires IMP’HAIR, sélectionnés par une maison indépendante." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const trios = products.filter((p) => p.range);
  // Un parfum par collection (Khamrah, Yara, Kenzie…) pour montrer l'étendue de la sélection.
  const parfums = products
    .filter((p) => p.category === "parfums")
    .filter((p, i, all) => all.findIndex((o) => o.brand === p.brand && o.collection === p.collection) === i)
    .slice(0, 8);
  const orient = products.find((p) => p.slug === "lattafa-oud-mood-100ml");
  return (
    <>
      <section className="relative -mt-16 md:-mt-20 h-[100svh] min-h-[560px] overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt="Flacon de parfum sur pierre ivoire dans une lumière dorée" width={1920} height={1088} className="absolute inset-0 size-full object-cover object-[60%_center] animate-slowzoom opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="relative container-lux flex h-full flex-col justify-end pb-16 md:pb-24">
          <p className="eyebrow text-champagne animate-rise">Maison de parfumerie</p>
          <h1 className="mt-5 max-w-3xl text-[2.8rem] leading-[0.95] md:text-7xl font-bold uppercase animate-rise [animation-delay:150ms]">
            L'ombre <em className="text-champagne">d'un</em> sillage.
          </h1>
          <p className="mt-6 max-w-md text-ink-foreground/75 leading-relaxed animate-rise [animation-delay:300ms]">
            Parfums, coffrets et soins capillaires, choisis un à un pour celles et ceux qui préfèrent la confidence à l'évidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-rise [animation-delay:450ms]">
            <Link to="/catalogue" search={{}} className="btn-lux-outline">Découvrir le catalogue <ArrowRight className="size-4" strokeWidth={1.25} /></Link>
          </div>
        </div>
      </section>

      <section className="container-lux py-24 md:py-36 grid md:grid-cols-12 gap-10">
        <p className="eyebrow text-muted-foreground md:col-span-3">La Maison</p>
        <div className="md:col-span-8">
          <h2 className="text-3xl md:text-5xl leading-[1.1]">Un parfum ne s'annonce pas. <span className="italic text-muted-foreground">Il se devine</span>, il s'attarde, il reste.</h2>
          <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">Maison Sillombre réunit des fragrances et des soins sélectionnés par un commerçant indépendant. Le texte de présentation définitif de la maison sera rédigé avec vous.</p>
          <Link to="/maison" className="mt-8 inline-block eyebrow link-lux">Notre histoire</Link>
        </div>
      </section>

      <section className="container-lux">
        <div className="flex items-end justify-between mb-10">
          <div><p className="eyebrow text-muted-foreground">Univers</p><h2 className="mt-2 text-2xl md:text-3xl uppercase">Explorer par univers</h2></div>
        </div>
        <div className="-mx-5 px-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2">
          {categories.map((c) => (
            <Link key={c.slug} to="/catalogue" search={{ cat: c.slug }} className={`group relative shrink-0 w-[72%] sm:w-[45%] md:w-auto snap-start overflow-hidden`}>
              <div className="aspect-square overflow-hidden bg-muted"><img src={c.image} alt="" loading="lazy" width={768} height={1024} className="size-full object-cover img-zoom group-hover:scale-105" /></div>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/85 to-transparent text-ink-foreground">
                <h3 className="text-xl font-semibold uppercase">{c.name}</h3>
                <p className="mt-1 text-xs text-ink-foreground/70">{c.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Showcase title="Rituels capillaires" eyebrow="IMP’HAIR Professionnel · en trio" list={trios} cat="soins-capillaires" cols={3} />

      <section className="mt-24 md:mt-36 bg-ink text-ink-foreground">
        <div className="container-lux grid md:grid-cols-2 items-center gap-12 py-20 md:py-0">
          <div className="md:py-28">
            <p className="eyebrow text-champagne">Essences d'Orient</p>
            <h2 className="mt-3 text-4xl md:text-5xl uppercase leading-[1.02]">Oud, ambre <br /><em>&amp; safran.</em></h2>
            <p className="mt-6 max-w-md text-ink-foreground/70 leading-relaxed">Une part de la maison est dédiée aux compositions orientales : profondes, chaudes, enveloppantes.</p>
            <Link to="/catalogue" search={{ q: "oriental" }} className="mt-9 btn-lux-outline">Voir les parfums orientaux</Link>
          </div>
          <img src={orient?.image} alt={orient ? `${orient.brand} ${orient.name}` : ""} loading="lazy" width={768} height={1024} className="w-full aspect-square object-cover" />
        </div>
      </section>

      <Showcase title="Parfums" eyebrow="Lattafa · Volaré · Loui Martin" list={parfums} cat="parfums" />

      <section className="container-lux mt-24 md:mt-32">
        <div className="border border-dashed border-champagne p-8 md:p-12 text-center">
          <ExampleTag label="Section à confirmer" />
          <h2 className="mt-5 text-3xl md:text-4xl">Nos engagements</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed">Livraison, retours, échantillons, conseil… Cette section n'affichera que les avantages réellement proposés, une fois confirmés par le commerçant.</p>
        </div>
      </section>
    </>
  );
}

function Showcase({ title, eyebrow, list, cat, cols = 4 }: { title: string; eyebrow: string; list: typeof products; cat: CategorySlug; cols?: 3 | 4 }) {
  return (
    <section className="container-lux mt-24 md:mt-36">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div><p className="eyebrow text-muted-foreground">{eyebrow}</p><h2 className="mt-2 text-2xl md:text-3xl uppercase">{title}</h2></div>
        <Link to="/catalogue" search={{ cat }} className="eyebrow link-lux">Tout voir</Link>
      </div>
      <div className={`grid grid-cols-2 ${cols === 3 ? "md:grid-cols-3" : "lg:grid-cols-4"} gap-x-4 gap-y-10 md:gap-x-6`}>
        {list.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </section>
  );
}
