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
