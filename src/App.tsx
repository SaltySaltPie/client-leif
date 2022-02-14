import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import styles from "./app.module.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ShortAbout from "./components/shortAbout/ShortAbout";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import MobileNav from "./components/MobileNav/MobileNav";
import Featured from "./components/Featured/Featured";
function App(): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <section className={`${styles.contentC}`}>
      <Header setShowMenu={setShowMenu}></Header>
      <article className={`${styles.bodyC}`}>
        <Nav></Nav>
        <MobileNav showMenu={showMenu} setShowMenu={setShowMenu}></MobileNav>
        <div className={`${styles.mainContentC}`}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/collections/new-arrivals"
              element={<Featured></Featured>}
            ></Route>
            <Route
              path="/collections/:cID/:sID/:pID"
              element={<Products></Products>}
            ></Route>
          </Routes>
        </div>
      </article>
      <article>
        <Routes>
          <Route path="/" element={<ShortAbout></ShortAbout>}></Route>
        </Routes>
      </article>
      <article>
        <Footer></Footer>
      </article>
    </section>
  );
}

export default App;
