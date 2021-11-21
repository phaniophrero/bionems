import image1 from "../public/images/nems.png";
import image4 from "../public/images/bobun.png";

const sliderHeroData = [
  {
    id: "s1",
    image: image1,
    title: "Nos Nems & Rouleaux",
    price: "11€",
    subtitle: "Essayez Maintenant",
    types: [
      {
        name: 'Rouleau de printemps au poulet'
      },

      {
        name: 'Rouleau de printemps au vegetaire'
      },

      {
        name: 'Nem au poulet'
      },

      {
        name: 'Nem au porc'
      },

      {
        name: 'Nem au legume'
      },
    ],
  },
  {
    id: "s2",
    image: image4,
    title: "Nos Bobuns",
    price: "11€",
    subtitle: "Essayez Maintenant",
    types: [
      {
        name: "Bobun boeuf + 2 Nems"
      },

      {
        name: "Bobun poulet citronnelle"
      },

      {
        name: "Bobun vegetarien + 2 Nems"
      },

      {
        name: "Bobun Nem ( 4 Nems au choix )"
      },
    ],
  },
];

export default sliderHeroData;
