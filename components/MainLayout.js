import Link from "next/link";
import styles from "./Layout.module.css";
import Head from "next/head";
import logo from "../images/pizza-full-logo-removebg-preview.png";

export default function MainLayout(props) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <title>Simple Pizza | Ukraine</title>
      </Head>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} />
        <nav className={styles.navbar}>
          <Link href={`/`}>
            <a>home</a>
          </Link>
          <Link href={`/menu`}>
            <a>menu</a>
          </Link>
          <Link href={`/restaurants`}>
            <a>restaurants</a>
          </Link>
          <Link href={`/gift-cards`}>
            <a>gift cards</a>
          </Link>
          <Link href={`/contact-us`}>
            <a>contact us</a>
          </Link>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer className={styles.footer}>
        <hr />
        <img src={logo} className={styles.logo} />
        <nav className={styles.navbar}>
          <Link href={`/`}>
            <a>home</a>
          </Link>
          <Link href={`/menu`}>
            <a>menu</a>
          </Link>
          <Link href={`/restaurants`}>
            <a>restaurants</a>
          </Link>
          <Link href={`/gift-cards`}>
            <a>gift cards</a>
          </Link>
          <Link href={`/contact-us`}>
            <a>contact us</a>
          </Link>
        </nav>
        <style jsx>{`
          hr {
            margin-bottom: 20px;
            margin-top: 100px;
            width: 90%;
          }
        `}</style>
      </footer>
    </>
  );
}

const mapStateToProps = (state) => ({
  pages: state.navbar.pages,
});
