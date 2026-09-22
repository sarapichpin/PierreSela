/*
  Ajouter une photo ou une vidéo :
  1. Copiez votre fichier (jpg, png, mp4, webm...) dans le dossier /media
  2. Ajoutez un objet dans le tableau BLOG_POSTS ci-dessous, par exemple :

  {
    type: "image",           // "image" ou "video"
    src: "media/mon-fichier.jpg",
    caption: "Légende de la publication",
    date: "2026-09-21"       // AAAA-MM-JJ, utilisé pour trier (plus récent en premier)
  },

  Le tableau peut contenir autant d'entrées que vous le souhaitez.
*/

const BLOG_POSTS = [
  {
    type: "image",
    src: "media/evenement-professionnel.jpg",
    caption: "Rencontre professionnelle au Cambodge",
    date: "2026-09-20"
  },
  {
    type: "image",
    src: "media/portrait-montagne.jpg",
    caption: "Pause à la montagne, entre deux rendez-vous",
    date: "2026-01-10"
  },
  {
    type: "image",
    src: "media/famille-montagne.jpg",
    caption: "En famille, à la neige",
    date: "2026-01-08"
  },
  {
    type: "image",
    src: "media/avec-mon-fils.jpg",
    caption: "Moment complice en famille",
    date: "2025-12-24"
  },
  {
    type: "image",
    src: "media/portrait.jpg",
    caption: "Portrait",
    date: "2025-12-01"
  },
  {
    type: "image",
    src: "media/cave-a-vins-cambodge.jpg",
    caption: "Immersion chez nos partenaires cavistes",
    date: "2026-08-15"
  },
  {
    type: "image",
    src: "media/degustation-cambodge.jpg",
    caption: "Dégustation entre passionnés",
    date: "2026-08-14"
  },
  {
    type: "image",
    src: "media/rencontre-institutionnelle.jpg",
    caption: "Rencontre stratégique autour d'un projet commun",
    date: "2026-07-01"
  },
  {
    type: "image",
    src: "media/wine-paris-cognac.jpg",
    caption: "Escale cognac sur Wine Paris",
    date: "2026-02-10"
  },
  {
    type: "image",
    src: "media/wine-paris-abk6.jpg",
    caption: "Entre professionnels, le cognac se partage",
    date: "2026-02-10"
  },
  {
    type: "image",
    src: "media/wine-paris-degustation.jpg",
    caption: "Une belle bouteille, de bons amis",
    date: "2026-02-09"
  },
  {
    type: "image",
    src: "media/wine-paris-bordeaux.jpg",
    caption: "Sur le stand Vins de Bordeaux",
    date: "2026-02-09"
  },
  {
    type: "image",
    src: "media/rencontre-hotel.jpg",
    caption: "Avant l'entrée en scène",
    date: "2026-06-20"
  },
  {
    type: "image",
    src: "media/delegation-conference.jpg",
    caption: "En délégation pour les affaires du Royaume",
    date: "2026-06-19"
  },
  {
    type: "image",
    src: "media/ceremonie-officielle.jpg",
    caption: "Cérémonie officielle au Cambodge",
    date: "2026-06-18"
  },

  // Exemple (à supprimer ou dupliquer) :
  // {
  //   type: "image",
  //   src: "media/exemple-photo.jpg",
  //   caption: "Visite d'un domaine viticole en France",
  //   date: "2026-06-15"
  // },
  // {
  //   type: "video",
  //   src: "media/exemple-video.mp4",
  //   caption: "Lancement de Vinissimo Asia",
  //   date: "2026-03-02"
  // },
];
