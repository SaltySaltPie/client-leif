import styles from "./footer.module.scss";
function Footer() {
  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.cluster1}`}>
        <div className={`${styles.navC}`}>
          <div>
            <div className={`${styles.title}`}>company</div>
            <div>about us</div>
            <div>careers</div>
            <div>wholesale</div>
            <div>visit us</div>
          </div>
          <div>
            <div className={`${styles.title}`}>customer care</div>
            <div>shipping + return</div>
            <div>gift cards</div>
            <div>faq</div>
            <div>accessibility policy</div>
            <div>contact us</div>
          </div>
        </div>
        <div className={`${styles.infoC}`}>
          <div className={`${styles.hashtag}`}>#LEIFLIFESTYLE</div>
          <div className={`${styles.slogan}`}>goods for living</div>
          <div className={`${styles.address}`}>WILLIAMSBURG, BROOKLYN</div>
          <div className={`${styles.address}`}>99 GRAND STREET</div>
          <div className={`${styles.address}`}>BROOKLYN, NY 11249</div>
          <div className={`${styles.sayHi}`}>SAY HI:</div>
          <div>FOLLOW US @LEIFSHOP</div>
          <div>HELLO@LEIFSHOP.COM</div>
        </div>
        <div className={`${styles.contactC}`}>
          <div className={`${styles.imageC}`}>
            <img
              src="https://cdn.shopify.com/s/files/1/0125/8122/t/46/assets/newsletter_signup_illustration.svg?v=5861136478830248206"
              alt=""
            />
          </div>
          <p>
            Let's be friends — get free shipping on your first order when you
            sign up for our emails.
          </p>
          <input title="email" type="text" placeholder="ENTER EMAIL" />
          <div>
            <button type="button">subscribe</button>
          </div>
        </div>
      </article>
      <article className={`${styles.cluster2}`}>
        <div className={`${styles.crC}`}><div>© 2022 LEIF, ALL RIGHTS RESERVED</div></div>
        <div className={`${styles.followC}`}><div>follow us</div></div>
        <div className={`${styles.termsC}`}>
          <div>privacy policy</div>
          <div>terms & conditions</div>
        </div>
      </article>
    </section>
  );
}

export default Footer;
