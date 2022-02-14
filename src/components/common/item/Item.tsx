import { Link } from "react-router-dom";
import styles from "./item.module.scss";

interface Props {
  item: {
    id: string;
    cateLink: string;
    cateLinkHref: string;
    subcate: string;
    subcateHref: string;
    productLink: string;
    productLinkHref: string;
    title: string;
    price: string;
    iconsSrc: string;
    desc: string;
    imageSrc: string;
  };
}

export default function Item({ item }: Props) {
  return (
    <section className={`${styles.contentC}`}>
      <Link
        to={`/collections/${item.cateLinkHref}/${item.subcateHref}/${item.id}`}
      >
        <div className={`${styles.imgC}`}>
          <img src={item.imageSrc} alt="" />
        </div>
        <div className={`${styles.titleC}`}>{item.title}</div>
        <div className={`${styles.priceC}`}>{item.price}</div>
      </Link>
    </section>
  );
}
