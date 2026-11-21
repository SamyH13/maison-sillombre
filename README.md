# Maison Sillombre

Boutique en ligne de parfums (dont parfums orientaux et de Dubaï) et cosmétiques.

Code importé depuis le projet Lovable « Maison Sillombre » (TanStack Start, React, TypeScript, Tailwind CSS).

## État actuel (Phase 1)

Vitrine uniquement : catalogue de démonstration, favoris locaux, pages de contact et légales.
Le panier, le paiement, la base de données et l'administration restent à construire.

## Notes d'import depuis Lovable

- Les photos d'origine (`src/assets/*.jpg`) n'ont pas pu être exportées : elles sont
  remplacées par des visuels provisoires sobres, en attendant les vraies photos produits.
- Les composants shadcn/ui inutilisés par le site (sidebar, chart, carousel, menus, etc.)
  n'ont pas été recopiés ; ils peuvent être réinstallés à la demande avec la CLI shadcn.

## Développement

```sh
npm i
npm run dev
npm test
```
