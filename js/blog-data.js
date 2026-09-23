/*
  Ajouter une photo ou une vidéo :
  1. Copiez votre fichier (jpg, png, mp4, webm...) dans le dossier /media
  2. Ajoutez un objet dans le tableau BLOG_POSTS ci-dessous, par exemple :

  {
    type: "image",           // "image" ou "video"
    src: "/media/mon-fichier.jpg",
    caption: "Légende de la publication",
    captionEn: "English caption",  // optionnel, utilisé sur les pages en/*
    date: "2026-09-21"       // AAAA-MM-JJ, utilisé pour trier (plus récent en premier)
  },

  Le tableau peut contenir autant d'entrées que vous le souhaitez.
*/

const BLOG_POSTS = [
  {
    type: "image",
    src: "/media/evenement-professionnel.jpg",
    caption: "Rencontre professionnelle au Cambodge",
    captionEn: "A professional gathering in Cambodia",
    date: "2025-11-14"
  },
  {
    type: "image",
    src: "/media/portrait-montagne.jpg",
    caption: "Pause à la montagne, entre deux rendez-vous",
    captionEn: "A mountain break between meetings",
    date: "2025-01-18"
  },
  {
    type: "image",
    src: "/media/famille-montagne.jpg",
    caption: "En famille, à la neige",
    captionEn: "With family, in the snow",
    date: "2024-12-26"
  },
  {
    type: "image",
    src: "/media/avec-mon-fils.jpg",
    caption: "Moment complice en famille",
    captionEn: "A close family moment",
    date: "2024-12-26"
  },
  {
    type: "image",
    src: "/media/portrait.jpg",
    caption: "Portrait",
    captionEn: "Portrait",
    date: "2025-03-02"
  },
  {
    type: "image",
    src: "/media/cave-a-vins-cambodge.jpg",
    caption: "Immersion chez nos partenaires cavistes",
    captionEn: "A visit to our wine merchant partners",
    date: "2025-06-10"
  },
  {
    type: "image",
    src: "/media/degustation-cambodge.jpg",
    caption: "Dégustation entre passionnés",
    captionEn: "A tasting among enthusiasts",
    date: "2025-06-11"
  },
  {
    type: "image",
    src: "/media/rencontre-institutionnelle.jpg",
    caption: "Rencontre stratégique autour d'un projet commun",
    captionEn: "A strategic meeting around a shared project",
    date: "2024-09-23"
  },
  {
    type: "image",
    src: "/media/wine-paris-cognac.jpg",
    caption: "Escale cognac sur Wine Paris",
    captionEn: "A cognac stop at Wine Paris",
    date: "2025-02-11"
  },
  {
    type: "image",
    src: "/media/wine-paris-abk6.jpg",
    caption: "Entre professionnels, le cognac se partage",
    captionEn: "Sharing cognac among professionals",
    date: "2025-02-11"
  },
  {
    type: "image",
    src: "/media/wine-paris-degustation.jpg",
    caption: "Une belle bouteille, de bons amis",
    captionEn: "A fine bottle, good friends",
    date: "2025-02-12"
  },
  {
    type: "image",
    src: "/media/wine-paris-bordeaux.jpg",
    caption: "Sur le stand Vins de Bordeaux",
    captionEn: "At the Vins de Bordeaux stand",
    date: "2025-02-12"
  },
  {
    type: "image",
    src: "/media/rencontre-hotel.jpg",
    caption: "Avant l'entrée en scène",
    captionEn: "Just before stepping on stage",
    date: "2024-11-05"
  },
  {
    type: "image",
    src: "/media/delegation-conference.jpg",
    caption: "En délégation pour les affaires du Royaume",
    captionEn: "On delegation for the Kingdom's affairs",
    date: "2024-11-06"
  },
  {
    type: "image",
    src: "/media/ceremonie-officielle.jpg",
    caption: "Cérémonie officielle au Cambodge",
    captionEn: "An official ceremony in Cambodia",
    date: "2024-11-06"
  },
  {
    type: "image",
    src: "/media/ceremonie-officielle-2.jpg",
    caption: "Un temps fort de la vie diplomatique",
    captionEn: "A highlight of diplomatic life",
    date: "2024-11-06"
  },
  {
    type: "image",
    src: "/media/diner-partenaires.jpg",
    caption: "Dîner de travail entre partenaires",
    captionEn: "A working dinner with partners",
    date: "2025-08-22"
  },
  {
    type: "image",
    src: "/media/chaine-rotisseurs-groupe.jpg",
    caption: "Une soirée sous le signe de la gastronomie",
    captionEn: "An evening dedicated to gastronomy",
    date: "2025-10-03"
  },
  {
    type: "image",
    src: "/media/chaine-rotisseurs-complicite.jpg",
    caption: "Complicité gourmande",
    captionEn: "A shared love of good food",
    date: "2025-10-03"
  },
  {
    type: "image",
    src: "/media/soiree-amicale.jpg",
    caption: "Soirée entre amis, sous la tente",
    captionEn: "An evening among friends, under the tent",
    date: "2025-07-19"
  },
  {
    type: "image",
    src: "/media/rencontre-asie.jpg",
    caption: "Entre deux sessions de travail",
    captionEn: "Between two work sessions",
    date: "2024-05-14"
  },
  {
    type: "image",
    src: "/media/cave-a-vins-partenaire.jpg",
    caption: "Une pause conviviale à la cave",
    captionEn: "A friendly break at the cellar",
    date: "2025-09-08"
  },
  {
    type: "image",
    src: "/media/rencontre-partenaire.jpg",
    caption: "Rencontre chaleureuse autour du vin",
    captionEn: "A warm meeting over wine",
    date: "2025-09-08"
  },
  {
    type: "image",
    src: "/media/rendez-vous-affaires.jpg",
    caption: "Sous le soleil du Cambodge",
    captionEn: "Under the Cambodian sun",
    date: "2025-09-09"
  },
  {
    type: "image",
    src: "/media/cave-vieillissement.jpg",
    caption: "Immersion dans les chais centenaires",
    captionEn: "Immersed in century-old cellars",
    date: "2025-11-21"
  },
  {
    type: "image",
    src: "/media/chai-allozo.jpg",
    caption: "Visite d'un chai espagnol",
    captionEn: "Visiting a Spanish winery",
    date: "2025-11-21"
  },
  {
    type: "image",
    src: "/media/centro-espirituosas.jpg",
    caption: "Une rencontre pleine d'enthousiasme",
    captionEn: "A meeting full of enthusiasm",
    date: "2025-11-22"
  },
  {
    type: "image",
    src: "/media/brandy-casajuana.jpg",
    caption: "Découverte d'un brandy d'exception",
    captionEn: "Discovering an exceptional brandy",
    date: "2025-11-22"
  },
  {
    type: "image",
    src: "/media/rencontre-cave-a-vin.jpg",
    caption: "Entre amateurs de bons vins",
    captionEn: "Among fellow wine lovers",
    date: "2025-04-17"
  },
  {
    type: "image",
    src: "/media/ceremonie-bouddhiste-groupe.jpg",
    caption: "Cérémonie du Bun Pka pour l'éducation",
    captionEn: "The Bun Pka ceremony for education",
    date: "2024-12-11"
  },
  {
    type: "image",
    src: "/media/ceremonie-bouddhiste-famille.jpg",
    caption: "Une transmission entre générations",
    captionEn: "A moment passed between generations",
    date: "2024-12-11"
  },
  {
    type: "image",
    src: "/media/ceremonie-bouddhiste-equipe.jpg",
    caption: "L'équipe réunie pour la bonne cause",
    captionEn: "The team gathered for a good cause",
    date: "2024-12-11"
  },
  {
    type: "image",
    src: "/media/salon-vins-espagne.jpg",
    caption: "Sur le salon FENAVIN, en Espagne",
    captionEn: "At the FENAVIN wine fair in Spain",
    date: "2025-05-06"
  },
  {
    type: "image",
    src: "/media/visite-pse.jpg",
    caption: "Visite chaleureuse à PSE",
    captionEn: "A warm visit to PSE",
    date: "2024-03-15"
  },

  // Exemple (à supprimer ou dupliquer) :
  // {
  //   type: "image",
  //   src: "/media/exemple-photo.jpg",
  //   caption: "Visite d'un domaine viticole en France",
  //   captionEn: "Visiting a vineyard in France",
  //   date: "2026-06-15"
  // },
  // {
  //   type: "video",
  //   src: "/media/exemple-video.mp4",
  //   caption: "Lancement de Vinissimo Asia",
  //   captionEn: "The launch of Vinissimo Asia",
  //   date: "2026-03-02"
  // },
];
