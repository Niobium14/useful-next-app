import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../components/MainLayout";

export default function Home() {
  const aboutLink = () => {
    Router.push("/about");
  };
  return (
    <MainLayout>
      <Head>
        <title>Useful | NextJS App</title>
      </Head>
      <h1 className={styles.mainTitle}>Home Page</h1>
      <p className={styles.description}>
        In sit elit laboris adipisicing ad ex elit cupidatat.
      </p>
      <p className={styles.pages}>
        All pages:
        <Link className={styles.link} href={"/profile"}>
          profile page
        </Link>
        ,
        <Link className={styles.link} href={"/mail"}>
        mail page
        </Link>
      </p>
    </MainLayout>
  );
}
