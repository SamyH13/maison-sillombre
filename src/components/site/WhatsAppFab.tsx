import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

/** Bouton flottant « Une question ? » : n'apparaît qu'une fois le numéro réel configuré. */
export function WhatsAppFab() {
  const href = whatsappLink("Bonjour Mille et Un Sillages, j'aimerais un conseil.");
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Une question ? Écrivez-nous sur WhatsApp"
      className="group fixed bottom-5 left-5 z-40 flex items-center gap-2"
    >
      <span className="grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform group-hover:scale-105">
        <MessageCircle className="size-6" strokeWidth={2} />
      </span>
      <span className="hidden sm:block rounded-lg bg-white px-3 py-1.5 text-sm text-ink shadow-md">Une question ?</span>
    </a>
  );
}
