import { Link, useLocation } from "react-router-dom";
import { data } from "../../data";
import styles from "./nav.module.scss";
function Nav() {
  const { cates } = data;

  const { pathname } = useLocation();
  return (
    <section className={`${styles.contentC}`}>
      {cates.map((cate) => (
        <div key={cate.name} className={`${styles.cateC}`}>
          <Link to={`/collections/${cate.link}`}>
            <div
              className={`${
                pathname.includes(cate.link) && styles.selectedCate
              } ${styles.cateName}`}
            >
              {cate.name}
            </div>
          </Link>

          {cate?.subcate &&
            pathname.replace("/collections/", "") === cate.link && (
              <div className={`${styles.subC}`}>
                {cate.subcate.map((sub, index) => (
                  <div key={index} className={`${styles.sub}`}>
                    <Link to="">{sub}</Link>
                  </div>
                ))}
              </div>
            )}
        </div>
      ))}
      <div className={`${styles.contentCunder}`}></div>
    </section>
  );
}

export default Nav;
