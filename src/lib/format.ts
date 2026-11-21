import { siteConfig } from "@/config/site";

/** Prix stockés en centimes. null = prix non encore renseigné par le commerçant. */
export function formatPrice(cents: number | null): string {
  if (cents === null) return "Prix à venir";
  return new Intl.NumberFormat(siteConfig.locale, { style: "currency", currency: siteConfig.currency })
    .format(cents / 100)
    .replace(/ | /g, " ");
}
