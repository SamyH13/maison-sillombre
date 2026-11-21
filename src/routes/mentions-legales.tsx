import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ExampleTag } from "@/components/site/ExampleTag";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Maison Sillombre" },
      { name: "description", content: "Mentions légales de Maison Sillombre." },
      { property: "og:title", content: "Mentions légales — Maison Sillombre" },
      { property: "og:description", content: "Mentions légales de Maison Sillombre." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Mentions légales" />
      <div className="container-lux max-w-2xl"><ExampleTag label="À compléter" /><p className="mt-6 text-ink-soft leading-relaxed">Éditeur, hébergeur, SIRET, TVA et responsable de publication — à compléter avec les informations officielles du commerçant.</p></div>
    </>
  ),
});
