import { Data } from "./interfaces/ICommon";
export const data: Data = {
  cates: [
    {
      name: "new arrivals",
      link: "new-arrivals",
      img: "https://cdn.shopify.com/s/files/1/0125/8122/collections/home_decor_1024x1024.jpg?v=1631162313",
    },
    {
      name: "home decor",
      link: "home-decor-introduction",
      subcate: [
        "view all",
        "pillows",
        "blankets & throws",
        "home accessories",
        "storage & organization",
        "botanicals",
        "lighting",
      ],
    },
    {
      name: "artwork",
      link: "artwork",
      subcate: ["original art", "prints", "vintage"],
    },
    {
      name: "kitchen & dining",
      link: "kitchen-dining-introduction",
      img: "https://cdn.shopify.com/s/files/1/0125/8122/collections/kitchen_and_dining_1024x1024.jpg?v=1631162367",
      subcate: [
        "ceramics & dinnerware",
        "table linens",
        "glassware & bar",
        "coffee & tea",
        "serveware",
        "kitchen & cooking",
      ],
    },
    {
      name: "bath & apothecary",
      link: "bath-apothecary-introduction",
      img: "https://cdn.shopify.com/s/files/1/0125/8122/collections/bath_apothecary_1024x1024.png?v=1631162407",
      subcate: [
        "bathroom decor",
        "soap & cleaning",
        "home fragrance",
        "bathtime",
        "self care",
      ],
    },
    {
      name: "jewelry & accessories",
      link: "jewelry-accessories-introduction",
      img: "https://cdn.shopify.com/s/files/1/0125/8122/collections/jewelry_and_acc_1024x1024.png?v=1631162461",
      subcate: [
        "earrings",
        "rings",
        "necklaces",
        "bracelets",
        "seasonal accessories",
        "bags & wallets",
        "hair accessories",
      ],
    },
    {
      name: "paper goods",
      link: "paper-goods-introduction",
      img: "https://cdn.shopify.com/s/files/1/0125/8122/collections/paper_goods_1024x1024.jpg?v=1631162505",
      subcate: [
        "greeting cards",
        "stationery sets",
        "notebooks & journals",
        "desktop accessories",
        "books & gift",
      ],
    },
    { name: "sale", link: "sale" },
  ],
};
