import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/data/catalog";
import { useFavorites } from "@/lib/store/favorites";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/favoris")({
  head: () => ({
    meta: [
      { title: "Mes favoris — Maison Sillombre" },
      { name: "description", content: "Retrouvez les parfums que vous avez mis de côté." },
      { property: "og:title", content: "Mes favoris — Maison Sillombre" },
      { property: "og:description", content: "Retrouvez les parfums que vous avez mis de côté." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Favoris,
});

function Favoris() {
  const { ids } = useFavorites();
  const list = products.filter((p) => ids.includes(p.slug));
  return (
    <>
      <PageHero eyebrow="Favoris" title="Mes favoris">Vos favoris sont enregistrés sur cet appareil uniquement. Ils seront liés à votre compte lorsque l'espace client ouvrira.</PageHero>
      <div className="container-lux">
        {list.length ? <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6">{list.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
          : <div className="py-16 text-center"><p className="font-serif text-3xl">Aucun favori pour l'instant</p><Link to="/catalogue" search={{}} className="mt-8 btn-lux">Parcourir le catalogue</Link></div>}
      </div>
    </>
  );
}
