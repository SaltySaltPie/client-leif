import { useParams } from "react-router-dom";
import { data } from "../../data";
import styles from "./products.module.scss";
import products from "../../products.json";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Products() {
  const { appDispatch } = useContext(AppContext);
  const { cID, sID, pID } = useParams();
  console.log({ cID, sID, pID });
  const title = data.cates.filter((item) => item.link === cID)[0].name || "";

  const product = products.data.filter((product) => product.id === pID)[0];
  console.log({ product });
  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.cateC}`}>{title}</article>
      <article className={`${styles.productC}`}>
        <div className={`${styles.leftC} `}>
          <img src={product.imageSrc} alt="" className={``} />
        </div>
        <div className={`${styles.rightC} `}>
          <div className={`${styles.infoC} `}>
            <div className={`${styles.title}`}>{product.title}</div>
            <div className={`${styles.price}`}>{product.price}</div>
          </div>
          <div className={`${styles.addCartC}`}>
            <div onClick={() => appDispatch({ type: "addCart", payload: pID })}>
              add to cart
            </div>
          </div>
          {product.desc && (
            <div className={`${styles.descC}`}>{product.desc}</div>
          )}
          <div className={`${styles.shareC}`}>
            <div>share with friends</div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Products;
