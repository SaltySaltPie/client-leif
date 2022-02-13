import styles from './shortAbout.module.scss'
function ShortAbout() {
  return (
    <section className={`${styles.contentC}`}>
      <article>
        <div className={`${styles.title}`}>ABOUT LEIF</div>
        <p className={`${styles.p}`}>
          LEIF is a lifestyle shop full of beautiful things for everyday
          living—we carry a well-edited assortment of home decor, textiles,
          table linens, artwork, apothecary, stationery and more. We look in
          unexpected places and think outside the box to bring you unique goods
          (from all over the world) that you haven't seen in other stores, all
          with the hope of making your everyday a little more beautiful. We
          think that's what it's all about, and we're so happy you're here.
        </p>
      </article>
    </section>
  );
}

export default ShortAbout;
