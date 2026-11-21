# Maison Sillombre — règles du projet

Ce dépôt a été importé depuis un projet Lovable (template TanStack Start). Il n'est
pas synchronisé avec Lovable : il est développé directement ici.

## Project rules
- Merchant settings (WhatsApp, email, commerce on/off) live in `src/config/site.ts`; UI hides or labels features whose setting is null — never show invented business data.
- Phase 1 catalog is static data in `src/data/catalog.ts` (real merchant products; only facts visible on the photos are filled in) with typed shapes meant to be swapped for database queries; prices are integer cents, null = not set.
- Custom look ("riad" world: tadelakt plaster, arched niches, emerald zellige for actions) uses utilities in `src/styles.css` (`tadelakt`, `tadelakt-terracotta`, `niche`, `zellige-band`, `btn-lux`, `btn-lux-outline`, `link-lux`, `container-lux`, `example-tag`) instead of ad hoc styles. `niche` masks a 3/4 box: keep that aspect. DESIGN.md documents the system; no uppercase labels above headings.
- Product photos live in `src/assets/products/` as 900 px WebP.
- Ne jamais mettre de clé secrète (Stripe, Supabase service role…) dans le dépôt.
