import { url } from "inspector";
import { Link } from "react-router-dom";
import styles from "./banner.module.scss";

interface Props {
  style: 0 | 1;
  button: number;
  title: string;
  content: string;
  link: string;
  linkImg: string;
  linkText: string;
}

function Banners(props: Props) {

  return (
    <section className={`${styles.contentC}`}>
      <Link to={props.link}>
        <article
          className={`${props.style === 1 ? styles.style1 : styles.style0} `}
          style={{ backgroundImage: `url("${props.linkImg}")` }}
        >
          <div className={`${styles.title}`}>{props.title}</div>
          <div className={`${styles.content}`}>{props.content}</div>
          <div className={`${styles.linkText} homeBtn${props.button}`}>
            {props.linkText}
          </div>
        </article>
      </Link>
    </section>
  );
}

export default Banners;
