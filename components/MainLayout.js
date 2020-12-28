import Router from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export function MainLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Useful | NextJS App</title>
      </Head>
      <nav className={styles.navbar}>
        <Link href={"/"}>
          <a className={styles.link}>Home</a>
        </Link>
        <Link href={"/about"}>
          <a className={styles.link}>About</a>
        </Link>
        <Link href={"/description"}>
          <a className={styles.link}>Description</a>
        </Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
