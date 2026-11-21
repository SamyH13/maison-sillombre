/**
 * Paramètres du commerçant. Tant qu'une valeur vaut null, l'interface affiche
 * un message honnête au lieu d'une information inventée.
 */
export const siteConfig = {
  name: "Maison Sillombre",
  currency: "EUR" as const,
  locale: "fr-FR",
  /** Numéro WhatsApp au format international sans "+" ni espaces, ex. "33612345678". */
  whatsappNumber: null as string | null,
  contactEmail: null as string | null,
  /**
   * Marchés où se tient le stand. null = pas encore communiqués : l'accueil
   * l'indique honnêtement au lieu d'inventer des lieux ou des horaires.
   * Exemple : [{ place: "Marché de …", city: "…", schedule: "Samedi, 8 h – 13 h" }]
   */
  markets: null as { place: string; city: string; schedule: string }[] | null,
  /** Activé seulement une fois paiement et commandes branchés côté serveur. */
  commerceEnabled: false,
};

export function whatsappLink(message: string): string | null {
  if (!siteConfig.whatsappNumber) return null;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
