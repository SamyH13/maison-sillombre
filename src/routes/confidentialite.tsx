import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ExampleTag } from "@/components/site/ExampleTag";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Mille et Un Sillages" },
      { name: "description", content: "Politique de confidentialité de Mille et Un Sillages." },
      { property: "og:title", content: "Politique de confidentialité — Mille et Un Sillages" },
      { property: "og:description", content: "Politique de confidentialité de Mille et Un Sillages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Informations légales" title="Politique de confidentialité" />
      <div className="container-lux max-w-2xl text-center"><ExampleTag label="À compléter" /><p className="mt-6 text-muted-foreground leading-relaxed">Données collectées, finalités, durées de conservation, droits RGPD et cookies — à compléter avant l'ouverture de la boutique.</p></div>
    </>
  ),
});
