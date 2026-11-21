import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

/** Bouton flottant : n'apparaît qu'une fois le numéro réel configuré. */
export function WhatsAppFab() {
  const href = whatsappLink("Bonjour Maison Sillombre, j'aimerais un conseil.");
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Nous écrire sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-105">
      <MessageCircle className="size-6" strokeWidth={1.5} />
    </a>
  );
}
