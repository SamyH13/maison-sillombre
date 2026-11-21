import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ExampleTag } from "@/components/site/ExampleTag";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Maison Sillombre" },
      { name: "description", content: "Politique de confidentialité de Maison Sillombre." },
      { property: "og:title", content: "Politique de confidentialité — Maison Sillombre" },
      { property: "og:description", content: "Politique de confidentialité de Maison Sillombre." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Politique de confidentialité" />
      <div className="container-lux max-w-2xl"><ExampleTag label="À compléter" /><p className="mt-6 text-ink-soft leading-relaxed">Données collectées, finalités, durées de conservation, droits RGPD et cookies — à compléter avant l'ouverture de la boutique.</p></div>
    </>
  ),
});
