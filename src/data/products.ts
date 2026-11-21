import type { Product } from "./catalog";

/**
 * Catalogue réel Mille et Un Sillages — généré depuis le pack « 37 produits » (CSV du 21/11/2026).
 * Prix et stocks : null tant qu'ils ne sont pas renseignés (affichés « Prix à venir »).
 * Les 9 soins IMP'HAIR sont regroupés en 3 trios (bleu, rose, bordeaux) vendus uniquement ensemble.
 * Photos : public/produits/.
 */
export const products: Product[] = [
  {
    slug: "imphair-trio-hydratant-reparateur",
    sku: "MS-001-MS-002-MS-003",
    name: "Trio Hydratant Réparateur",
    brand: "IMP’HAIR Professionnel",
    category: "soins-capillaires",
    collection: "Hydratant Réparateur",
    family: "Ricin & Soie",
    notes: {
      top: [],
      heart: [],
      base: [],
    },
    tagline: "Une routine toute en douceur pour les cheveux en manque de souplesse.",
    description:
      "La routine complète de la gamme bleue : shampoing (500 ml), masque (500 ml) et sérum (100 ml) à l’huile de ricin et aux protéines de soie. Les trois soins sont vendus ensemble.",
    image: "/produits/imphair-professionnel-shampoing-hydratant-reparateur-ricin-soie-500ml.jpg",
    gallery: [
      "/produits/imphair-professionnel-masque-hydratant-reparateur-ricin-soie-500ml.jpg",
      "/produits/imphair-professionnel-serum-hydratant-reparateur-ricin-soie-100ml.jpg",
    ],
    benefits: [
      "Nettoyage doux",
      "Douceur",
      "Souplesse",
      "Brillance",
      "Nutrition",
      "Démêlage",
      "Coiffage facilité",
      "Discipline",
    ],
    range: {
      color: "bleue",
      swatch: "#4fc6b8",
      items: [
        {
          sku: "MS-001",
          type: "Shampoing",
          name: "Shampoing Hydratant Réparateur Ricin & Soie",
          volume: "500 ml",
          tagline: "Une routine toute en douceur pour les cheveux en manque de souplesse.",
          description:
            "Le Shampoing Hydratant Réparateur associe huile de ricin et protéines de soie pour laver les cheveux tout en accompagnant les longueurs fragilisées. Sa mousse nettoyante laisse la chevelure prête à recevoir le masque de la même gamme. Un premier geste de soin pour retrouver un toucher plus agréable, de la douceur et une brillance naturelle.",
          benefits: ["Nettoyage doux", "Douceur", "Souplesse", "Brillance"],
          usage:
            "Sur cheveux mouillés, masser délicatement le cuir chevelu et les longueurs puis rincer.",
          image:
            "/produits/imphair-professionnel-shampoing-hydratant-reparateur-ricin-soie-500ml.jpg",
        },
        {
          sku: "MS-002",
          type: "Masque",
          name: "Masque Hydratant Réparateur Ricin & Soie",
          volume: "500 ml",
          tagline: "Le rendez-vous nourrissant des longueurs sèches et fragilisées.",
          description:
            "Ce masque associe huile de ricin, protéines de soie et kératine hydrolysée pour aider à assouplir et à discipliner les cheveux. Utilisé après le shampoing, il apporte un toucher plus doux, facilite le démêlage et contribue à une chevelure visiblement plus brillante, sans alourdir le geste de soin.",
          benefits: ["Nutrition", "Démêlage", "Douceur", "Brillance"],
          usage:
            "Après le shampoing, appliquer sur les longueurs et pointes essorées ; laisser poser 5 à 10 minutes puis rincer.",
          image: "/produits/imphair-professionnel-masque-hydratant-reparateur-ricin-soie-500ml.jpg",
        },
        {
          sku: "MS-003",
          type: "Sérum",
          name: "Sérum Hydratant Réparateur Ricin & Soie",
          volume: "100 ml",
          tagline: "La touche de finition pour des longueurs souples et lumineuses.",
          description:
            "Ce soin sans rinçage enrichi en huile de ricin et protéines de soie facilite le coiffage et sublime les cheveux au quotidien. En base de coiffage ou en touche finale, il aide à discipliner les longueurs, leur apporte douceur et participe à un fini plus brillant.",
          benefits: ["Coiffage facilité", "Brillance", "Discipline", "Douceur"],
          usage:
            "Appliquer une petite quantité sur les longueurs et les pointes, sur cheveux humides ou secs. Ne pas rincer.",
          image: "/produits/imphair-professionnel-serum-hydratant-reparateur-ricin-soie-100ml.jpg",
        },
      ],
    },
    seo: {
      title: "IMP’HAIR Professionnel – Trio Hydratant Réparateur (Ricin & Soie) | Mille et Un Sillages",
      description:
        "Trio shampoing, masque et sérum IMP’HAIR Professionnel, gamme bleue à l’huile de ricin et aux protéines de soie, chez Mille et Un Sillages.",
    },
    variants: [
      {
        id: "imphair-trio-hydratant-reparateur",
        label: "Trio 500 + 500 + 100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "imphair-trio-effet-glossy-restructurant",
    sku: "MS-004-MS-005-MS-006",
    name: "Trio Effet Glossy Restructurant",
    brand: "IMP’HAIR Professionnel",
    category: "soins-capillaires",
    collection: "Effet Glossy Restructurant",
    family: "Biotine & Acide hyaluronique",
    notes: {
      top: [],
      heart: [],
      base: [],
    },
    tagline: "Un premier geste de soin pour des cheveux plus lisses et brillants.",
    description:
      "La routine complète de la gamme rose : shampoing (500 ml), masque (500 ml) et sérum (100 ml) à la biotine et à l’acide hyaluronique. Les trois soins sont vendus ensemble.",
    image:
      "/produits/imphair-professionnel-shampoing-effet-glossy-restructurant-biotine-acide-hyaluronique-500ml.jpg",
    gallery: [
      "/produits/imphair-professionnel-masque-effet-glossy-restructurant-biotine-acide-hyaluronique-500ml.jpg",
      "/produits/imphair-professionnel-serum-effet-glossy-restructurant-biotine-acide-hyaluronique-100ml.jpg",
    ],
    benefits: [
      "Nettoyage",
      "Brillance",
      "Souplesse",
      "Effet lissant",
      "Démêlage",
      "Douceur",
      "Réduction des frisottis",
      "Discipline",
      "Coiffage facilité",
    ],
    range: {
      color: "rose",
      swatch: "#d867b8",
      items: [
        {
          sku: "MS-004",
          type: "Shampoing",
          name: "Shampoing Effet Glossy Restructurant Biotine & Acide Hyaluronique",
          volume: "500 ml",
          tagline: "Un premier geste de soin pour des cheveux plus lisses et brillants.",
          description:
            "La formule à la biotine et à l’acide hyaluronique accompagne la routine des cheveux ternes ou fragilisés. Elle nettoie délicatement, contribue à améliorer le toucher de la fibre capillaire et prépare les longueurs à recevoir le masque Glossy Restructurant.",
          benefits: ["Nettoyage", "Brillance", "Souplesse", "Effet lissant"],
          usage: "Appliquer sur cheveux mouillés, masser doucement puis rincer.",
          image:
            "/produits/imphair-professionnel-shampoing-effet-glossy-restructurant-biotine-acide-hyaluronique-500ml.jpg",
        },
        {
          sku: "MS-005",
          type: "Masque",
          name: "Masque Effet Glossy Restructurant Biotine & Acide Hyaluronique",
          volume: "500 ml",
          tagline: "Un masque pensé pour des longueurs douces et un fini glossy.",
          description:
            "Enrichi en biotine et acide hyaluronique, ce masque apporte une étape nourrissante à la routine capillaire. Il aide à faciliter le démêlage, à contrôler les frisottis et à rendre les cheveux plus souples et visiblement plus brillants.",
          benefits: ["Démêlage", "Douceur", "Brillance", "Réduction des frisottis"],
          usage:
            "Après le shampoing, répartir sur les longueurs et pointes essorées, laisser poser 5 à 10 minutes puis rincer.",
          image:
            "/produits/imphair-professionnel-masque-effet-glossy-restructurant-biotine-acide-hyaluronique-500ml.jpg",
        },
        {
          sku: "MS-006",
          type: "Sérum",
          name: "Sérum Effet Glossy Restructurant Biotine & Acide Hyaluronique",
          volume: "100 ml",
          tagline: "Une finition brillante et légère pour sublimer les longueurs.",
          description:
            "Soin de coiffage sans rinçage, ce sérum associe biotine et acide hyaluronique pour apporter un toucher doux et faciliter la mise en forme des cheveux. Quelques gouttes sur les pointes aident à discipliner les mèches et à faire ressortir leur éclat.",
          benefits: ["Brillance", "Discipline", "Douceur", "Coiffage facilité"],
          usage:
            "Déposer quelques gouttes sur les longueurs et pointes, sur cheveux secs ou humides. Ne pas rincer.",
          image:
            "/produits/imphair-professionnel-serum-effet-glossy-restructurant-biotine-acide-hyaluronique-100ml.jpg",
        },
      ],
    },
    seo: {
      title:
        "IMP’HAIR Professionnel – Trio Effet Glossy Restructurant (Biotine & Acide hyaluronique) | Mille et Un Sillages",
      description:
        "Trio shampoing, masque et sérum IMP’HAIR Professionnel, gamme rose à la biotine et à l’acide hyaluronique, chez Mille et Un Sillages.",
    },
    variants: [
      {
        id: "imphair-trio-effet-glossy-restructurant",
        label: "Trio 500 + 500 + 100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "imphair-trio-rituel-coreen",
    sku: "MS-007-MS-008-MS-009",
    name: "Trio Rituel Coréen",
    brand: "IMP’HAIR Professionnel",
    category: "soins-capillaires",
    collection: "Rituel Coréen",
    family: "Peptides & Céramides",
    notes: {
      top: [],
      heart: [],
      base: [],
    },
    tagline: "L’inspiration K-Beauty au cœur de votre routine capillaire.",
    description:
      "La routine complète de la gamme rouge bordeaux : shampoing (500 ml), masque (500 ml) et sérum (100 ml) aux peptides et aux céramides. Les trois soins sont vendus ensemble.",
    image: "/produits/imphair-professionnel-shampoing-rituel-coreen-peptides-ceramides-500ml.jpg",
    gallery: [
      "/produits/imphair-professionnel-masque-rituel-coreen-peptides-ceramides-500ml.jpg",
      "/produits/imphair-professionnel-serum-creme-rituel-coreen-peptides-ceramides-100ml.jpg",
    ],
    benefits: [
      "Nettoyage doux",
      "Souplesse",
      "Brillance",
      "Nutrition",
      "Toucher soyeux",
      "Brillance miroir",
      "Anti-frisottis",
      "Douceur",
      "Discipline",
    ],
    range: {
      color: "rouge bordeaux",
      swatch: "#9e1f35",
      items: [
        {
          sku: "MS-007",
          type: "Shampoing",
          name: "Shampoing Rituel Coréen Peptides & Céramides",
          volume: "500 ml",
          tagline: "L’inspiration K-Beauty au cœur de votre routine capillaire.",
          description:
            "Enrichi en peptides et céramides, ce shampoing nettoie en douceur et aide à préserver la souplesse de la chevelure. Il accompagne les cheveux fragilisés en préparant la fibre au soin nourrissant du masque Rituel Coréen, dans une routine pensée pour la douceur et la brillance.",
          benefits: ["Nettoyage doux", "Souplesse", "Brillance"],
          usage: "Appliquer sur cheveux mouillés, masser délicatement et rincer abondamment.",
          image:
            "/produits/imphair-professionnel-shampoing-rituel-coreen-peptides-ceramides-500ml.jpg",
        },
        {
          sku: "MS-008",
          type: "Masque",
          name: "Masque Rituel Coréen Peptides & Céramides",
          volume: "500 ml",
          tagline: "Une pause de soin intensif inspirée des rituels coréens.",
          description:
            "Ce masque associe peptides, céramides et huiles végétales dans une étape de nutrition pour les longueurs. Il contribue à assouplir et à discipliner les cheveux, tout en apportant une brillance visible et un toucher plus soyeux.",
          benefits: ["Nutrition", "Souplesse", "Brillance", "Toucher soyeux"],
          usage:
            "Après le shampoing, appliquer sur les longueurs et pointes, laisser agir 3 à 5 minutes puis rincer.",
          image:
            "/produits/imphair-professionnel-masque-rituel-coreen-peptides-ceramides-500ml.jpg",
        },
        {
          sku: "MS-009",
          type: "Sérum",
          name: "Sérum-Crème Rituel Coréen Peptides & Céramides",
          volume: "100 ml",
          tagline: "Le geste final pour un effet cheveux soyeux et disciplinés.",
          description:
            "Inspiré de l’esthétique Glass Hair, ce sérum-crème sans rinçage aide à maîtriser les frisottis, à lisser visuellement les longueurs et à révéler une brillance miroir. Sa texture crème est adaptée à une utilisation après le lavage ou en finition de coiffage.",
          benefits: ["Brillance miroir", "Anti-frisottis", "Douceur", "Discipline"],
          usage:
            "Appliquer une petite noisette sur cheveux humides ou secs, sur les longueurs et pointes. Ne pas rincer.",
          image:
            "/produits/imphair-professionnel-serum-creme-rituel-coreen-peptides-ceramides-100ml.jpg",
        },
      ],
    },
    seo: {
      title:
        "IMP’HAIR Professionnel – Trio Rituel Coréen (Peptides & Céramides) | Mille et Un Sillages",
      description:
        "Trio shampoing, masque et sérum IMP’HAIR Professionnel, gamme rouge bordeaux aux peptides et aux céramides, chez Mille et Un Sillages.",
    },
    variants: [
      {
        id: "imphair-trio-rituel-coreen",
        label: "Trio 500 + 500 + 100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-esta-puro-coffret-eau-de-parfum-brume-gel-douche",
    sku: "MS-010",
    name: "Esta Puro",
    brand: "Volaré",
    concentration: "Eau de Parfum + soins parfumés",
    category: "coffrets",
    collection: "Esta Puro",
    family: "Agrumes · Musc · Vanille",
    notes: {
      top: ["Orange de Sicile", "bergamote de Calabre", "citron de Sicile"],
      heart: ["Musc"],
      base: ["Musc blanc", "vanille de Madagascar", "ambre"],
    },
    tagline:
      "Trois façons de profiter d’une même fragrance, dans un coffret à offrir ou à s’offrir.",
    description:
      "Cette présentation Volaré réunit une eau de parfum, une brume parfumée et un gel douche aux accents frais et enveloppants. Des agrumes pétillants ouvrent la composition, suivis d’une sensation musquée et d’une base chaleureuse de vanille et d’ambre. Une idée cadeau complète pour prolonger le rituel parfumé au fil de la journée.",
    image: "/produits/volare-esta-puro-coffret-eau-de-parfum-brume-gel-douche.jpg",
    benefits: ["Coffret 3 produits", "Idée cadeau", "Rituel parfumé"],
    contents: "Eau de parfum 100 ml + brume 250 ml + gel douche 240 ml",
    usage:
      "Utiliser le gel douche lors de la toilette, puis la brume sur le corps selon les indications du flacon ; vaporiser l’eau de parfum sur la peau en évitant les yeux.",
    seo: {
      title: "Volaré Esta Puro – Coffret Eau de Parfum + Brume + Gel Douche | Mille et Un Sillages",
      description:
        "Trois façons de profiter d’une même fragrance, dans un coffret à offrir ou à s’offrir. Découvrez Esta Puro – Coffret Eau de Parfum + Brume + Gel Douche…",
    },
    variants: [
      {
        id: "MS-010",
        label: "Coffret 3 pièces",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-musk-mood-100ml",
    sku: "MS-011",
    name: "Musk Mood",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Mood",
    family: "Musqué · Floral · Doux",
    notes: {
      top: ["Accords crémeux", "muguet", "rose"],
      heart: ["Rose", "musc"],
      base: ["Accords ambrés", "musc"],
    },
    tagline: "Une eau de parfum tendre qui fait du musc sa signature.",
    description:
      "Musk Mood mêle des facettes florales à une douceur musquée enveloppante. Son évolution élégante et discrète en fait un choix pour celles et ceux qui aiment les parfums doux, propres et confortables.",
    image: "/produits/lattafa-musk-mood-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Musk Mood 100 ml | Mille et Un Sillages",
      description:
        "Une eau de parfum tendre qui fait du musc sa signature. Découvrez Musk Mood chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-011",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-oud-mood-100ml",
    sku: "MS-012",
    name: "Oud Mood",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Mood",
    family: "Oriental · Épicé · Boisé",
    notes: {
      top: ["Muscade", "cannelle", "safran"],
      heart: ["Bois de santal", "bois de oud", "cuir"],
      base: ["Vanille", "ambre"],
    },
    tagline: "Une signature orientale généreuse, entre épices et bois chauds.",
    description:
      "Oud Mood affirme un caractère boisé et épicé. Ses nuances de safran et de cannelle se mêlent à la profondeur du oud et du cuir, avant de laisser place à une douceur ambrée et vanillée. Une composition pleine de relief.",
    image: "/produits/lattafa-oud-mood-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Oud Mood 100 ml | Mille et Un Sillages",
      description:
        "Une signature orientale généreuse, entre épices et bois chauds. Découvrez Oud Mood chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-012",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-oud-mood-reminiscence-100ml",
    sku: "MS-013",
    name: "Oud Mood Reminiscence",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Mood",
    family: "Oriental · Boisé · Ambré",
    notes: {
      top: ["Rose", "safran", "cannelle"],
      heart: ["Patchouli", "ambre sec"],
      base: ["Vanille", "musc", "mousse de chêne", "oud"],
    },
    tagline: "Une autre interprétation d’Oud Mood, aux nuances ambrées et florales.",
    description:
      "Reminiscence met en valeur une ouverture épicée et fleurie, un cœur chaleureux au patchouli et un fond qui associe vanille, musc et oud. Un parfum à découvrir pour les amateurs de compositions orientales nuancées.",
    image: "/produits/lattafa-oud-mood-reminiscence-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Oud Mood Reminiscence 100 ml | Mille et Un Sillages",
      description:
        "Une autre interprétation d’Oud Mood, aux nuances ambrées et florales. Découvrez Oud Mood Reminiscence chez Mille et Un Sillages, votre boutique de parfums et…",
    },
    variants: [
      {
        id: "MS-013",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-mayar-natural-intense-100ml",
    sku: "MS-014",
    name: "Mayar Natural Intense",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Mayar",
    family: "Frais · Aquatique · Floral",
    notes: {
      top: ["Figue", "eau de coco", "mandarine verte", "melon"],
      heart: ["Lotus", "jasmin", "nénuphar"],
      base: ["Musc", "santal", "vanille", "ambroxan"],
    },
    tagline: "Une escapade fraîche et lumineuse, à la douceur florale.",
    description:
      "Mayar Natural Intense associe un départ de fruits frais et d’eau de coco à un bouquet de fleurs aquatiques. En fond, les notes musquées, vanillées et boisées prolongent cette impression de fraîcheur douce. Une invitation à une élégance décontractée.",
    image: "/produits/lattafa-mayar-natural-intense-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Mayar Natural Intense 100 ml | Mille et Un Sillages",
      description:
        "Une escapade fraîche et lumineuse, à la douceur florale. Découvrez Mayar Natural Intense chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-014",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-mayar-100ml",
    sku: "MS-015",
    name: "Mayar",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Mayar",
    family: "Fruité · Floral · Ambré",
    notes: {
      top: ["Framboise", "litchi", "cassis"],
      heart: ["Rose", "magnolia", "benjoin"],
      base: ["Ambre", "patchouli"],
    },
    tagline: "Un bouquet fruité-floral qui attire par sa douceur lumineuse.",
    description:
      "Mayar met la gourmandise des fruits rouges et du litchi au premier plan. Son cœur floral apporte un équilibre élégant avant un sillage ambré plus enveloppant. Une composition pour les amateurs de parfums frais et expressifs.",
    image: "/produits/lattafa-mayar-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Mayar 100 ml | Mille et Un Sillages",
      description:
        "Un bouquet fruité-floral qui attire par sa douceur lumineuse. Découvrez Mayar chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-015",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "loui-martin-vanilla-powdery-elixir-100ml",
    sku: "MS-016",
    name: "Vanilla Powdery Elixir",
    brand: "Loui Martin",
    concentration: "Extrait de Parfum",
    category: "parfums",
    collection: "Vanilla Powdery",
    family: "Vanillé · Gourmand · Poudré",
    notes: {
      top: ["Poudre de coco", "fleur de vanille"],
      heart: ["Vanille"],
      base: ["Vanille", "musc", "notes boisées", "coco"],
    },
    tagline: "La vanille dans une interprétation plus intense et réconfortante.",
    description:
      "Vanilla Powdery Elixir évoque une vanille crémeuse enveloppée de nuances lactées et poudrées. Sa base musquée et boisée lui donne de la profondeur, dans une composition douce et chaleureuse. Une alternative pour les amateurs de vanille qui recherchent le caractère d’un extrait de parfum.",
    image: "/produits/loui-martin-vanilla-powdery-elixir-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Loui Martin Vanilla Powdery Elixir 100 ml | Mille et Un Sillages",
      description:
        "La vanille dans une interprétation plus intense et réconfortante. Découvrez Vanilla Powdery Elixir chez Mille et Un Sillages, votre boutique de parfums et de…",
    },
    variants: [
      {
        id: "MS-016",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "loui-martin-vanilla-powdery-100ml",
    sku: "MS-017",
    name: "Vanilla Powdery",
    brand: "Loui Martin",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Vanilla Powdery",
    family: "Vanillé · Poudré · Musqué",
    notes: {
      top: ["Noix de coco", "héliotrope"],
      heart: ["Vanille de Madagascar"],
      base: ["Musc blanc"],
    },
    tagline: "Une vanille douce, délicate et facile à aimer.",
    description:
      "Vanilla Powdery propose une lecture délicate et enveloppante de la vanille. La facette crémeuse de la noix de coco rencontre un cœur gourmand avant un sillage de musc blanc, léger et élégant. Une fragrance cocooning à porter selon l’humeur.",
    image: "/produits/loui-martin-vanilla-powdery-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Loui Martin Vanilla Powdery 100 ml | Mille et Un Sillages",
      description:
        "Une vanille douce, délicate et facile à aimer. Découvrez Vanilla Powdery chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-017",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-khamrah-dukhan-100ml",
    sku: "MS-018",
    name: "Khamrah Dukhan",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Khamrah",
    family: "Fumé · Épicé · Oriental",
    notes: {
      top: ["Mandarine", "piment", "épices fumées"],
      heart: ["Ciste", "fleur d’oranger", "encens", "patchouli"],
      base: ["Tabac", "ambre", "fève tonka", "benjoin", "praliné"],
    },
    tagline: "L’interprétation fumée et audacieuse de la collection Khamrah.",
    description:
      "Dukhan joue le contraste entre mandarine, épices fumées et encens. La profondeur du tabac et de l’ambre s’associe à une touche pralinée pour une composition chaleureuse qui ne passe pas inaperçue. Une signature pour les envies de caractère.",
    image: "/produits/lattafa-khamrah-dukhan-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Khamrah Dukhan 100 ml | Mille et Un Sillages",
      description:
        "L’interprétation fumée et audacieuse de la collection Khamrah. Découvrez Khamrah Dukhan chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-018",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-khamrah-qahwa-100ml",
    sku: "MS-019",
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Khamrah",
    family: "Café · Gourmand · Épicé",
    notes: {
      top: ["Gingembre", "cannelle", "cardamome"],
      heart: ["Praliné", "fruits confits", "fleurs blanches"],
      base: ["Café arabica", "fève tonka", "musc", "benjoin", "vanille"],
    },
    tagline: "La rencontre du café et des épices dans une composition généreuse.",
    description:
      "Khamrah Qahwa ouvre sur la chaleur de la cannelle et de la cardamome. Le cœur de praliné et de fruits confits prépare un fond gourmand au café, à la vanille et aux accords ambrés. Une création à découvrir pour les amoureux des senteurs caféinées.",
    image: "/produits/lattafa-khamrah-qahwa-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Khamrah Qahwa 100 ml | Mille et Un Sillages",
      description:
        "La rencontre du café et des épices dans une composition généreuse. Découvrez Khamrah Qahwa chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-019",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-khamrah-original-100ml",
    sku: "MS-020",
    name: "Khamrah Original",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Khamrah",
    family: "Gourmand · Épicé · Ambré",
    notes: {
      top: ["Bergamote", "cannelle", "muscade"],
      heart: ["Accord de dattes", "muguet", "praliné", "tubéreuse"],
      base: ["Fève tonka", "benjoin", "myrrhe", "bois", "vanille", "ambre"],
    },
    tagline: "L’emblématique composition gourmande aux accents de dattes et d’épices.",
    description:
      "Khamrah Original dévoile une ouverture de cannelle et de muscade, suivie d’un cœur délicieusement gourmand aux dattes et au praliné. Les notes de vanille, de tonka et de bois ambrés prolongent la sensation d’une fragrance chaleureuse et enveloppante.",
    image: "/produits/lattafa-khamrah-original-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Khamrah Original 100 ml | Mille et Un Sillages",
      description:
        "L’emblématique composition gourmande aux accents de dattes et d’épices. Découvrez Khamrah Original chez Mille et Un Sillages, votre boutique de parfums et de…",
    },
    variants: [
      {
        id: "MS-020",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-kenzie-summer-bottled-100ml",
    sku: "MS-021",
    name: "Kenzie Summer Bottled",
    brand: "Volaré",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Kenzie",
    family: "Solaire · Tropical · Lacté",
    notes: {
      top: ["Romarin", "citron"],
      heart: ["Banane", "ylang-ylang", "frangipanier"],
      base: ["Lait de coco", "bois de santal"],
    },
    tagline: "Un parfum qui rappelle la lumière des beaux jours et l’évasion.",
    description:
      "Summer Bottled associe la fraîcheur du citron et du romarin à un cœur de fleurs solaires aux accents de banane. Un fond doux de lait de coco et de bois de santal prolonge cette sensation de vacances. Une composition lumineuse à retrouver toute l’année.",
    image: "/produits/volare-kenzie-summer-bottled-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Volaré Kenzie Summer Bottled 100 ml | Mille et Un Sillages",
      description:
        "Un parfum qui rappelle la lumière des beaux jours et l’évasion. Découvrez Kenzie Summer Bottled chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-021",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-kenzie-silk-serenity-100ml",
    sku: "MS-022",
    name: "Kenzie Silk Serenity",
    brand: "Volaré",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Kenzie",
    family: "Floral · Doux · Musqué",
    notes: {
      top: ["Champagne pétillant", "freesia blanc", "cassis"],
      heart: ["Praliné rose", "nectarine", "jasmin", "fleur d’oranger", "rose de mai"],
      base: ["Santal crémeux", "musc sucré", "vanille", "bois ambré", "mousse de chêne"],
    },
    tagline: "Un voile floral et gourmand au toucher délicatement soyeux.",
    description:
      "Silk Serenity commence par une ouverture pétillante puis dévoile un cœur floral ponctué de fruits et de praliné. Le santal, le musc et la vanille apportent de la douceur au sillage. Une eau de parfum élégante, à l’esprit tendre et lumineux.",
    image: "/produits/volare-kenzie-silk-serenity-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Volaré Kenzie Silk Serenity 100 ml | Mille et Un Sillages",
      description:
        "Un voile floral et gourmand au toucher délicatement soyeux. Découvrez Kenzie Silk Serenity chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-022",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-kenzie-oud-blend-100ml",
    sku: "MS-023",
    name: "Kenzie Oud Blend",
    brand: "Volaré",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Kenzie",
    family: "Oud · Floral · Gourmand",
    notes: {
      top: ["Poire", "safran", "praliné"],
      heart: ["Rose bulgare"],
      base: ["Bois de cachemire", "sucre vanillé", "musc blanc", "mousse de chêne", "oud"],
    },
    tagline: "Une composition contrastée où le oud rencontre une douceur délicate.",
    description:
      "Kenzie Oud Blend associe une ouverture fruitée et légèrement épicée à un cœur de rose bulgare. Son fond boisé, vanillé et musqué donne à la fragrance une personnalité enveloppante. Une manière raffinée d’explorer les facettes du oud.",
    image: "/produits/volare-kenzie-oud-blend-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Volaré Kenzie Oud Blend 100 ml | Mille et Un Sillages",
      description:
        "Une composition contrastée où le oud rencontre une douceur délicate. Découvrez Kenzie Oud Blend chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-023",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-kenzie-mystique-fleur-100ml",
    sku: "MS-024",
    name: "Kenzie Mystique Fleur",
    brand: "Volaré",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Kenzie",
    family: "Floral · Fruité · Doux",
    notes: {
      top: ["Mandarine", "orange", "poire", "pêche"],
      heart: ["Magnolia", "pivoine blanche", "rose centifolia", "bois de violette"],
      base: ["Vétiver", "ambrox", "vanille", "praliné", "musc"],
    },
    tagline: "Un bouquet moderne, aussi pétillant que délicat.",
    description:
      "Mystique Fleur marie les agrumes et les fruits juteux à un cœur floral très féminin. Ses notes de fond douces et musquées lui donnent une jolie rondeur sans éclipser l’éclat des fleurs. Une composition pleine de charme.",
    image: "/produits/volare-kenzie-mystique-fleur-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Volaré Kenzie Mystique Fleur 100 ml | Mille et Un Sillages",
      description:
        "Un bouquet moderne, aussi pétillant que délicat. Découvrez Kenzie Mystique Fleur chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-024",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-kenzie-exotic-apple-crush-100ml",
    sku: "MS-025",
    name: "Kenzie Exotic Apple Crush",
    brand: "Volaré",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Kenzie",
    family: "Fruité · Juteux · Gourmand",
    notes: {
      top: ["Pomme rouge", "cassis", "pamplemousse rose", "litchi"],
      heart: ["Baies sauvages", "fleur de framboisier", "jasmin", "rose centifolia"],
      base: ["Fleur de vanille", "ambre", "mousse sucrée", "musc"],
    },
    tagline: "Une explosion fruitée qui révèle une élégance lumineuse.",
    description:
      "Exotic Apple Crush fait pétiller la pomme rouge, le litchi et le pamplemousse dans une ouverture gourmande. Les fruits rouges et les fleurs composent un cœur délicat avant un fond vanillé et musqué. Une fragrance expressive et joyeuse.",
    image: "/produits/volare-kenzie-exotic-apple-crush-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Volaré Kenzie Exotic Apple Crush 100 ml | Mille et Un Sillages",
      description:
        "Une explosion fruitée qui révèle une élégance lumineuse. Découvrez Kenzie Exotic Apple Crush chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-025",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-kenzie-lemon-spark-100ml",
    sku: "MS-026",
    name: "Kenzie Lemon Spark",
    brand: "Volaré",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Kenzie",
    family: "Citronné · Sucré · Gourmand",
    notes: {
      top: ["Citron", "sucre", "vanille"],
      heart: ["Fleur de citronnier", "freesia", "framboise"],
      base: ["Praliné", "benjoin"],
    },
    tagline: "Un éclat citronné adouci par une gourmandise délicate.",
    description:
      "Lemon Spark oppose la vivacité du citron à des nuances sucrées et vanillées. Un cœur fleuri et fruité apporte de la légèreté, tandis que le praliné réchauffe la composition. Une eau de parfum idéale pour ceux qui aiment les contrastes frais et gourmands.",
    image: "/produits/volare-kenzie-lemon-spark-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Volaré Kenzie Lemon Spark 100 ml | Mille et Un Sillages",
      description:
        "Un éclat citronné adouci par une gourmandise délicate. Découvrez Kenzie Lemon Spark chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-026",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-kenzie-classic-pistachio-100ml",
    sku: "MS-027",
    name: "Kenzie Classic Pistachio",
    brand: "Volaré",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Kenzie",
    family: "Pistache · Gourmand · Oriental",
    notes: {
      top: ["Pistache", "agrumes"],
      heart: ["Vanille", "fleur d’oranger", "jasmin"],
      base: ["Bois de santal", "musc", "ambre"],
    },
    tagline: "Une gourmandise élégante autour de la pistache.",
    description:
      "Classic Pistachio dévoile une pistache douce réveillée par des agrumes, puis des fleurs blanches au caractère vanillé. Le fond boisé et musqué apporte de la profondeur à cette composition gourmande, sans perdre son esprit raffiné.",
    image: "/produits/volare-kenzie-classic-pistachio-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Volaré Kenzie Classic Pistachio 100 ml | Mille et Un Sillages",
      description:
        "Une gourmandise élégante autour de la pistache. Découvrez Kenzie Classic Pistachio chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-027",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-kenzie-amber-lychee-100ml",
    sku: "MS-028",
    name: "Kenzie Amber Lychee",
    brand: "Volaré",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Kenzie",
    family: "Fruité · Floral · Ambré",
    notes: {
      top: ["Cassis", "litchi", "citron italien", "pomme rouge"],
      heart: ["Rose de Damas", "violette confite", "jasmin sambac"],
      base: ["Ambre sucré", "cèdre", "musc", "vanille", "bois de santal"],
    },
    tagline: "L’éclat du litchi rencontre un fond ambré délicieusement doux.",
    description:
      "Amber Lychee s’ouvre sur des fruits pétillants, avant de laisser place à un cœur de roses, de violette et de jasmin. L’ambre, le musc et la vanille apportent une rondeur élégante au sillage. Une eau de parfum radieuse et enveloppante.",
    image: "/produits/volare-kenzie-amber-lychee-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Volaré Kenzie Amber Lychee 100 ml | Mille et Un Sillages",
      description:
        "L’éclat du litchi rencontre un fond ambré délicieusement doux. Découvrez Kenzie Amber Lychee chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-028",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "volare-kenzie-marshmallow-dream-100ml",
    sku: "MS-029",
    name: "Kenzie Marshmallow Dream",
    brand: "Volaré",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Kenzie",
    family: "Guimauve · Fruité · Gourmand",
    notes: {
      top: ["Pomme Pink Lady", "citron italien", "freesia", "fleur de nectarine"],
      heart: ["Eau de fleur d’oranger", "guimauve rose", "fraise", "copeaux de coco"],
      base: ["Vanille fouettée", "sucre de framboise", "musc rose", "ambrox"],
    },
    tagline: "Une parenthèse sucrée inspirée de la douceur d’une guimauve.",
    description:
      "Marshmallow Dream associe une ouverture fruitée pétillante à un cœur de guimauve et de fraise. Son fond vanillé et musqué laisse une sensation enveloppante et joyeuse. Un parfum gourmand, délicat et plein de fantaisie.",
    image: "/produits/volare-kenzie-marshmallow-dream-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Volaré Kenzie Marshmallow Dream 100 ml | Mille et Un Sillages",
      description:
        "Une parenthèse sucrée inspirée de la douceur d’une guimauve. Découvrez Kenzie Marshmallow Dream chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-029",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-confidential-private-gold-100ml",
    sku: "MS-030",
    name: "Confidential Private Gold",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Confidential",
    family: "Fruité · Floral · Musqué",
    notes: {
      top: ["Pêche", "framboise"],
      heart: ["Muguet", "héliotrope", "cassis", "oud"],
      base: ["Ambre", "santal", "vanille", "musc"],
    },
    tagline: "Une eau de parfum lumineuse aux fruits délicats et au fond chaleureux.",
    description:
      "Confidential Private Gold associe une ouverture de pêche et de framboise à un cœur floral nuancé. Le santal, la vanille et le musc apportent une douceur enveloppante à l’ensemble. Une interprétation élégante du parfum fruité oriental.",
    image: "/produits/lattafa-confidential-private-gold-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Confidential Private Gold 100 ml | Mille et Un Sillages",
      description:
        "Une eau de parfum lumineuse aux fruits délicats et au fond chaleureux. Découvrez Confidential Private Gold chez Mille et Un Sillages, votre boutique de…",
    },
    variants: [
      {
        id: "MS-030",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-asad-original-100ml",
    sku: "MS-031",
    name: "Asad Original",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Asad",
    family: "Ambré · Épicé · Boisé",
    notes: {
      top: ["Poivre noir", "ananas", "tabac"],
      heart: ["Café", "iris", "patchouli"],
      base: ["Ambre", "vanille", "bois secs", "benjoin", "labdanum"],
    },
    tagline: "Un parfum de caractère aux accords épicés et ambrés.",
    description:
      "Asad Original ouvre sur un contraste de poivre noir, d’ananas et de tabac. Le cœur apporte du café et du patchouli, avant un fond boisé et vanillé. Une eau de parfum pour les amateurs de compositions chaleureuses à la personnalité affirmée.",
    image: "/produits/lattafa-asad-original-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Asad Original 100 ml | Mille et Un Sillages",
      description:
        "Un parfum de caractère aux accords épicés et ambrés. Découvrez Asad Original chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-031",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-asad-zanzibar-100ml",
    sku: "MS-032",
    name: "Asad Zanzibar",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Asad",
    family: "Marin · Épicé · Vanillé",
    notes: {
      top: ["Poivre noir", "lavande de mer"],
      heart: ["Eau de coco salée", "iris"],
      base: ["Vanille", "encens"],
    },
    tagline: "Une variation inattendue, entre fraîcheur marine et vanille.",
    description:
      "Asad Zanzibar fait dialoguer la vivacité du poivre noir et un accord de lavande de mer. Un cœur de coco légèrement salée rencontre l’iris, puis un fond de vanille et d’encens. Une composition solaire, originale et dépaysante.",
    image: "/produits/lattafa-asad-zanzibar-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Asad Zanzibar 100 ml | Mille et Un Sillages",
      description:
        "Une variation inattendue, entre fraîcheur marine et vanille. Découvrez Asad Zanzibar chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-032",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-asad-bourbon-100ml",
    sku: "MS-033",
    name: "Asad Bourbon",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Asad",
    family: "Épicé · Gourmand · Ambré",
    notes: {
      top: ["Poivre rose", "lavande", "prune mirabelle"],
      heart: ["Cacao", "davana", "muscade"],
      base: ["Vétiver", "vanille bourbon", "ambre"],
    },
    tagline: "L’élégance d’Asad revisitée autour de la vanille bourbon.",
    description:
      "Asad Bourbon associe une ouverture vive de poivre rose et de prune à un cœur riche en cacao et en épices. La vanille bourbon et l’ambre enveloppent le fond d’une chaleur douce, relevée par le vétiver. Un parfum profond et harmonieux.",
    image: "/produits/lattafa-asad-bourbon-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Asad Bourbon 100 ml | Mille et Un Sillages",
      description:
        "L’élégance d’Asad revisitée autour de la vanille bourbon. Découvrez Asad Bourbon chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-033",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-yara-moi-100ml",
    sku: "MS-034",
    name: "Yara Moi",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Yara",
    family: "Floral · Doux · Vanillé",
    notes: {
      top: ["Poire", "poivre rose", "cassis"],
      heart: ["Tubéreuse", "jasmin", "amande"],
      base: ["Vanille", "cashmeran", "patchouli"],
    },
    tagline: "Une élégance délicate, entre fleurs blanches et douceur vanillée.",
    description:
      "Yara Moi commence par une ouverture fruitée et légèrement épicée, avant de révéler un cœur floral à l’amande. Son fond de vanille, de cashmeran et de patchouli apporte du relief. Une fragrance douce et enveloppante pour les amateurs de parfums féminins.",
    image: "/produits/lattafa-yara-moi-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Yara Moi 100 ml | Mille et Un Sillages",
      description:
        "Une élégance délicate, entre fleurs blanches et douceur vanillée. Découvrez Yara Moi chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-034",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-yara-original-100ml",
    sku: "MS-035",
    name: "Yara Original",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Yara",
    family: "Vanillé · Fruité · Poudré",
    notes: {
      top: ["Mandarine", "héliotrope", "orchidée"],
      heart: ["Notes tropicales", "accord gourmand"],
      base: ["Vanille", "bois de santal", "musc"],
    },
    tagline: "Une douceur poudrée et gourmande devenue emblématique.",
    description:
      "Yara Original mêle l’éclat de la mandarine à des fleurs délicates, puis s’épanouit sur un cœur tropical et gourmand. La vanille et le musc composent un fond doux et réconfortant. Une eau de parfum lumineuse pour une signature tout en délicatesse.",
    image: "/produits/lattafa-yara-original-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Yara Original 100 ml | Mille et Un Sillages",
      description:
        "Une douceur poudrée et gourmande devenue emblématique. Découvrez Yara Original chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-035",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-yara-elixir-100ml",
    sku: "MS-036",
    name: "Yara Elixir",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Yara",
    family: "Gourmand · Floral · Caramel",
    notes: {
      top: ["Accord fraise façon s’mores", "cassis"],
      heart: ["Jasmin", "fleur d’oranger"],
      base: ["Vanille", "caramel", "ambre", "musc"],
    },
    tagline: "Une version généreuse de Yara, entre gourmandise et fleurs lumineuses.",
    description:
      "Yara Elixir commence par une note de fraise et de cassis, avant de révéler des fleurs blanches élégantes. Le caramel et la vanille apportent une sensation chaleureuse et gourmande au sillage. Un parfum à découvrir pour les amateurs de douceurs olfactives.",
    image: "/produits/lattafa-yara-elixir-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Yara Elixir 100 ml | Mille et Un Sillages",
      description:
        "Une version généreuse de Yara, entre gourmandise et fleurs lumineuses. Découvrez Yara Elixir chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-036",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
  {
    slug: "lattafa-yara-candy-100ml",
    sku: "MS-037",
    name: "Yara Candy",
    brand: "Lattafa",
    concentration: "Eau de Parfum",
    category: "parfums",
    collection: "Yara",
    family: "Sucré · Fruité · Floral",
    notes: {
      top: ["Mandarine verte", "cassis"],
      heart: ["Accord bonbon pétillant à la fraise", "gardénia"],
      base: ["Santal", "sirop de vanille", "musc", "ambre"],
    },
    tagline: "L’univers Yara dans une version pétillante et irrésistiblement sucrée.",
    description:
      "Yara Candy associe une ouverture de mandarine verte et de cassis à un cœur de fraise façon bonbon et de gardénia. Le sirop de vanille, le musc et l’ambre forment un fond tendre et gourmand. Une fragrance joyeuse à l’esprit pop.",
    image: "/produits/lattafa-yara-candy-100ml.jpg",
    usage:
      "Vaporiser à distance modérée sur la peau, en évitant les yeux. Ne pas appliquer sur une peau irritée.",
    seo: {
      title: "Lattafa Yara Candy 100 ml | Mille et Un Sillages",
      description:
        "L’univers Yara dans une version pétillante et irrésistiblement sucrée. Découvrez Yara Candy chez Mille et Un Sillages, votre boutique de parfums et de soins.",
    },
    variants: [
      {
        id: "MS-037",
        label: "100 ml",
        priceCents: null,
        stock: null,
      },
    ],
    isExample: false,
  },
];
