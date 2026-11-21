/**
 * Paramètres du commerçant. Tant qu'une valeur vaut null, l'interface affiche
 * un message honnête au lieu d'une information inventée.
 */
export const siteConfig = {
  name: "Mille et Un Sillages",
  currency: "EUR" as const,
  locale: "fr-FR",
  /** Numéro WhatsApp au format international sans "+" ni espaces, ex. "33612345678". */
  whatsappNumber: null as string | null,
  contactEmail: null as string | null,
  /** Activé seulement une fois paiement et commandes branchés côté serveur. */
  commerceEnabled: false,
};

export function whatsappLink(message: string): string | null {
  if (!siteConfig.whatsappNumber) return null;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
