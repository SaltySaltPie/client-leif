import { Link } from "react-router-dom";
import { data } from "../../data";
import styles from "./mobileNav.module.scss";

interface Props {
  showMenu: boolean;
  setShowMenu: (e: boolean) => void;
}

function MobileNav({ showMenu, setShowMenu }: Props): JSX.Element | null {
  const { cates } = data;

  return (
    <section
      className={`${styles.contentC} ${
        showMenu ? styles.show : styles.hide
      } tr`}
    >
      <div className={`${styles.closeBtn}`} onClick={() => setShowMenu(false)}>
        <img src="/icons/close.svg" alt="" />
      </div>
      <div className={`${styles.searchC}`}>
        <input type="text" title="search" placeholder="Search" />
        <img src="/icons/search.svg" alt="" />
      </div>
      {cates.map((cate, index) => (
        <div key={index} className={`${styles.cateC}`}>
          <Link to={`${cate.link}`}>
            <div className={`${styles.name}`}>{cate.name}</div>
          </Link>
        </div>
      ))}
      <div className={`${styles.loginC}`}>
        <div className={`${styles.login}`}>login</div>
        <div className={`${styles.bar}`}></div>
        <div className={`${styles.img}`}>
          <img src="/icons/basket.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default MobileNav;
