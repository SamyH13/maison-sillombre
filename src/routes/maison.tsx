import { createFileRoute } from "@tanstack/react-router";
import oudMood from "@/assets/products/oud-mood.webp";
import { PageHero } from "@/components/site/PageHero";
import { ExampleTag } from "@/components/site/ExampleTag";

export const Route = createFileRoute("/maison")({
  head: () => ({
    meta: [
      { title: "La Maison — Maison Sillombre" },
      { name: "description", content: "Maison Sillombre, commerçant indépendant qui vend parfums d'Orient et soins sur les marchés." },
      { property: "og:title", content: "La Maison — Maison Sillombre" },
      { property: "og:description", content: "Maison Sillombre, commerçant indépendant qui vend parfums d'Orient et soins sur les marchés." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero title="La Maison">Un commerçant indépendant, un stand sur les marchés et une sélection de parfums d'Orient.</PageHero>
      <div className="container-lux grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5"><div className="niche max-w-sm"><img src={oudMood} alt="Flacon Oud Mood entouré de rubans noirs, près d'un brûle-parfum en laiton" width={900} height={1200} loading="lazy" className="size-full object-cover" /></div></div>
        <div className="md:col-span-6 md:col-start-7 md:pt-10">
          <ExampleTag label="Texte à rédiger" />
          <p className="mt-6 font-serif text-2xl md:text-3xl leading-snug">L'histoire du commerçant, sa sélection et ses marchés seront racontés ici, avec ses propres mots.</p>
        </div>
      </div>
    </>
  ),
});
