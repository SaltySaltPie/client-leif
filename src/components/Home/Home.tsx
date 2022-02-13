import { Link } from "react-router-dom";
import Banners from "./banners/Banners";
import styles from "./home.module.scss";

function Home() {
  interface Data {
    style: 0 | 1;
    title: string;
    content: string;
    link: string;
    linkImg: string;
    linkText: string;
  }

  const data: Data[] = [
    {
      style: 0,
      title: "luminous accents",
      content:
        "Shop our favorite lamps to lighten up any space. Whether you prefer something modern or unique, find the perfect lamp for your bedside table or living room.",
      link: "/collections/lighting-hardware",
      linkImg: "",
      linkText: "shop lighting",
    },
    {
      style: 1,
      title: "bundled up",
      content: "cold weather accessories to keep you warm",
      link: "/collections/seasonal-accessories",
      linkImg:
        "https://cdn.shopify.com/s/files/1/0125/8122/files/bundled_up_1000x.jpg?v=1638221567",
      linkText: "shop seasonal accessories",
    },
    {
      style: 1,
      title: "quiet mornings",
      content: "mugs, espresso cups & pitchers for your beverage of choice",
      link: "/collections/coffee-tea",
      linkImg:
        "https://cdn.shopify.com/s/files/1/0125/8122/files/ceramics_warm_brighter_1000x.jpg?v=1640800276",
      linkText: "shop coffee & tea",
    },
    {
      style: 1,
      title: "a perfect match",
      content: "candles & matches to brighten your days",
      link: "/collections/candles-matches",
      linkImg:
        "https://cdn.shopify.com/s/files/1/0125/8122/files/perfect_match_1000x.jpg?v=1638901065",
      linkText: "shop candles matches",
    },
  ];

  return (
    <section className={`${styles.contentC}`}>
      <div className={`${styles.img1}`}>
        <img
          src="https://cdn.shopify.com/s/files/1/0125/8122/files/tabletop_refresh_1800x1800.jpg?v=1641418426"
          alt="banner1"
        />
        <div className={`${styles.hover1}`}>
          <div>tabletop refresh</div>
          <div>
            <Link to="/collections/kitchen-dining-introduction">
              shop kitchen & dining
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.colC}`}>
        <div className={`${styles.col1}`}>
          {data.slice(0, 2).map((item, index) => (
            <Banners key={index}
              button={index}
              style={item.style}
              title={item.title}
              content={item.content}
              link={item.link}
              linkImg={item.linkImg}
              linkText={item.linkText}
            ></Banners>
          ))}
        </div>
        <div className={`${styles.col2}`}>
          {data.slice(2, 4).map((item, index) => (
            <Banners
            key={index}
              button={index + 2}
              style={item.style}
              title={item.title}
              content={item.content}
              link={item.link}
              linkImg={item.linkImg}
              linkText={item.linkText}
            ></Banners>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
