import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/panier")({
  head: () => ({
    meta: [
      { title: "Panier — Maison Sillombre" },
      { name: "description", content: "Votre panier Maison Sillombre." },
      { property: "og:title", content: "Panier — Maison Sillombre" },
      { property: "og:description", content: "Votre panier Maison Sillombre." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Panier" title="Votre panier est vide">La boutique en ligne est en préparation : l'ajout au panier et le paiement ne sont pas encore disponibles.</PageHero>
      <div className="text-center"><Link to="/contact" className="btn-lux">Nous contacter</Link></div>
    </>
  ),
});
