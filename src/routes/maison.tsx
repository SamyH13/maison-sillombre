import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-flacon.jpg";
import { PageHero } from "@/components/site/PageHero";
import { ExampleTag } from "@/components/site/ExampleTag";

export const Route = createFileRoute("/maison")({
  head: () => ({
    meta: [
      { title: "La Maison — Mille et Un Sillages" },
      { name: "description", content: "L'histoire et la sélection de Mille et Un Sillages, parfumerie indépendante." },
      { property: "og:title", content: "La Maison — Mille et Un Sillages" },
      { property: "og:description", content: "L'histoire et la sélection de Mille et Un Sillages, parfumerie indépendante." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="La Maison" title="Une parfumerie confidentielle" />
      <div className="container-lux"><img src={hero} alt="Flacon de parfum dans une lumière dorée" width={1920} height={1088} loading="lazy" className="w-full aspect-[16/8] object-cover" /></div>
      <div className="container-lux max-w-2xl mt-14 text-center">
        <ExampleTag label="Texte à rédiger" />
        <p className="mt-6 font-serif text-2xl leading-relaxed">L'histoire du commerçant, sa sélection et sa présence sur les marchés seront racontées ici avec ses propres mots.</p>
      </div>
    </>
  ),
});
