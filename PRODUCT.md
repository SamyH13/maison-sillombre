# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Clientèle des marchés où le commerçant tient son stand : des personnes qui ont senti un parfum au stand (ou en ont entendu parler) et veulent retrouver le flacon, voir la gamme avant de venir, ou demander un conseil. Profil précis de la clientèle : non encore confirmé.

## Product Purpose
Site vitrine de Maison Sillombre, un commerçant indépendant qui vend aujourd'hui sur les marchés. Le site présente la sélection (parfums orientaux de marques et soins capillaires) et prolonge le stand en ligne. La vente en ligne n'est pas ouverte (`commerceEnabled: false`).

## Positioning
Une sélection de parfums orientaux et gourmands choisie et vendue en direct par un commerçant de marché, qui fait sentir et conseille en personne, plutôt qu'une parfumerie de chaîne.

## Operating Context
- Vente en personne sur les marchés ; lieux, jours et horaires non encore fournis.
- Contact prévu par WhatsApp et e-mail (`src/config/site.ts`), valeurs non encore fournies.

## Capabilities and Constraints
- Catalogue statique (`src/data/catalog.ts`), prévu pour être remplacé par une base de données (Supabase envisagé).
- Prix en centimes entiers, `null` = non renseigné ; stocks non renseignés.
- Les réglages commerçant à `null` masquent ou étiquettent la fonction : ne jamais inventer d'information commerciale.

## Brand Commitments
- Nom : Maison Sillombre. Langue : français.
- Ambiance voulue par le commerçant : orientale, chaleureuse.

## Evidence on Hand
- Visuels produits fournis par le commerçant (`src/assets/products/`) : Lattafa (Yara ×3 coloris, Asad Elixir, Asad Zanzibar, Confidential Private Gold), Oud Mood, Oud Mood Réminiscence, Musk Mood, Volaré Kenzie (Marshmallow Dream, Vanilla 70, Classic Pistachio, Amber Lychee), IMP'hair Professionnel (3 gammes : Rituel coréen peptides & céramides, Effet glossy & restructurant, Hydratant réparateur).
- Absents, à ne pas inventer : prix, contenances exactes des parfums, stocks, notes olfactives officielles, lieux et horaires des marchés, histoire du commerçant, avis clients, conditions de livraison ou retour.

## Product Principles
1. Ne rien affirmer que le commerçant n'a pas confirmé : un champ vide s'affiche honnêtement.
2. Le site prolonge le stand : retrouver un flacon et savoir où venir le sentir passent avant la vente en ligne.
3. Les flacons sont les héros : leurs visuels portent l'émotion, l'interface reste au service.
