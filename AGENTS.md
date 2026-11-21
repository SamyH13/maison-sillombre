# Mille et Un Sillages — règles du projet

Ce dépôt a été importé depuis un projet Lovable (template TanStack Start). Il n'est
pas synchronisé avec Lovable : il est développé directement ici.

## Project rules
- Merchant settings (WhatsApp, email, commerce on/off) live in `src/config/site.ts`; UI hides or labels features whose setting is null — never show invented business data.
- Phase 1 catalog is static demo data in `src/data/catalog.ts` with typed shapes meant to be swapped for database queries; prices are integer cents, null = not set.
- Custom look uses utilities in `src/styles.css` (`btn-lux`, `eyebrow`, `container-lux`, `example-tag`) instead of ad hoc styles.
- Ne jamais mettre de clé secrète (Stripe, Supabase service role…) dans le dépôt.
