import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Sillombre" },
      { name: "description", content: "Contactez Maison Sillombre pour un conseil parfum." },
      { property: "og:title", content: "Contact — Maison Sillombre" },
      { property: "og:description", content: "Contactez Maison Sillombre pour un conseil parfum." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const wa = whatsappLink("Bonjour Maison Sillombre, j'aimerais un conseil.");
  return (
    <>
      <PageHero title="Parlons parfum">Un conseil, une note recherchée, une question sur un flacon : écrivez-nous.</PageHero>
      <div className="container-lux grid md:grid-cols-2 gap-4 max-w-4xl">
        <Card icon={<MessageCircle className="size-6" strokeWidth={1.1} />} title="WhatsApp">
          {wa ? <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-lux mt-6">Écrire sur WhatsApp</a>
            : <p className="mt-4 text-sm text-ink-soft">Numéro bientôt disponible.</p>}
        </Card>
        <Card icon={<Mail className="size-6" strokeWidth={1.1} />} title="E-mail">
          {siteConfig.contactEmail ? <a href={`mailto:${siteConfig.contactEmail}`} className="mt-4 inline-block link-lux">{siteConfig.contactEmail}</a>
            : <p className="mt-4 text-sm text-ink-soft">Adresse bientôt disponible.</p>}
        </Card>
      </div>
    </>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return <div className="rounded-sm border border-border bg-card/60 p-8 md:p-10 flex flex-col items-start">{icon}<h2 className="mt-5 text-3xl">{title}</h2>{children}</div>;
}
