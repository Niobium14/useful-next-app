import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { MainLayout } from "../components/MainLayout";
export default function Description() {
  const homeLink = () => {
    Router.push("/");
  };

  return (
    <MainLayout>
      <h1 className={styles.mainTitle}>Description Page</h1>
      <p className={styles.description}>
        Excepteur esse excepteur est cupidatat deserunt nulla minim magna
        officia esse cillum esse ullamco.
      </p>
      <button className={styles.button} onClick={homeLink}>
        Got to home page
      </button>
    </MainLayout>
  );
}
