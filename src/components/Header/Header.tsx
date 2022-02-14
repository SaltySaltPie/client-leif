import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import styles from "./header.module.scss";

interface Props {
  setShowMenu: (e: boolean) => void;
}

function Header({ setShowMenu }: Props) {
  const { appState } = useContext(AppContext);
  const [search, setSearch] = useState<string>("");
  return (
    <section className={`${styles.contentC} `}>
      <article className={`${styles.sloganC}`}>
        HEY THERE! ENJOY <span>$9.95 EVERYDAY FLAT RATE SHIPPING</span> ON ANY
        ORDER (OR FREE IN-STORE PICKUP)
      </article>
      <article className={`${styles.navItemsC}`}>
        <div className={`${styles.searchC}`}>
          <img src="/icons/search.svg" alt="" />
          <input
            title="searchbox"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={`${styles.menuC}`}>
          <img src="/icons/menu.svg" alt="" onClick={() => setShowMenu(true)} />
        </div>
        <Link to="/">
          <div className={`${styles.iconC}`}>
            <img
              src="https://cdn.shopify.com/s/files/1/0125/8122/t/46/assets/logo_leif.png?v=10773300825449759772"
              alt="Icon"
            />
          </div>
        </Link>
        <div className={`${styles.rightC}`}>
          <div>
            <div className={`${styles.signIn}`}>Sign In</div>
            <div className={`${styles.myCartC}`}>
              <div className={`${styles.myCart}`}>
                <Link to="/cart">My Cart</Link>
              </div>
              <img src="/icons/basket.png" alt="" />
              {appState.cart.length > 0 && <div>{appState.cart.length}</div>}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Header;
