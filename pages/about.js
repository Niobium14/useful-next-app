import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { MainLayout } from "../components/MainLayout";
export default function About() {
  const homeLink = () => {
    Router.push("/");
  };

  return (
    <MainLayout>
      <h1 className={styles.mainTitle}>About Page</h1>
      <p className={styles.description}>
        Exercitation consequat cupidatat adipisicing adipisicing duis culpa
        consectetur commodo culpa aliquip est esse aute laboris. Anim eu do sunt
        aliqua irure culpa quis voluptate fugiat Lorem est.
      </p>
      <button className={styles.button} onClick={homeLink}>Got to home page</button>
    </MainLayout>
  );
}
