import { useState } from "react";
import { data } from "../../data";
import products from "../../products.json";
import Item from "../common/item/Item";
import styles from "./featured.module.scss";
function Featured() {
  console.log({ products });

  const [page, setPage] = useState<number>(0);
  const title = data.cates.filter((cate) => cate.link === "new-arrivals")[0];
  console.log({ title });
  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.headerC}`}>
        <div>
          {title.img ? (
            <img src={title.img} alt=""></img>
          ) : (
            <div className={`${styles.titleName}`}>{title.name}</div>
          )}
        </div>
      </article>
      <article className={`${styles.productsC}`}>
        {products.data.slice(0 + 10 * page, 20 + 10 * page).map((item) => (
          <Item item={item}></Item>
        ))}
      </article>
    </section>
  );
}

export default Featured;
