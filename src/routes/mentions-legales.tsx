import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ExampleTag } from "@/components/site/ExampleTag";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Mille et Un Sillages" },
      { name: "description", content: "Mentions légales de Mille et Un Sillages." },
      { property: "og:title", content: "Mentions légales — Mille et Un Sillages" },
      { property: "og:description", content: "Mentions légales de Mille et Un Sillages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Informations légales" title="Mentions légales" />
      <div className="container-lux max-w-2xl text-center"><ExampleTag label="À compléter" /><p className="mt-6 text-muted-foreground leading-relaxed">Éditeur, hébergeur, SIRET, TVA et responsable de publication — à compléter avec les informations officielles du commerçant.</p></div>
    </>
  ),
});
