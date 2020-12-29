import styles from "../styles/Home.module.css";
import { MainLayout } from "../components/MainLayout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LoadingMainLayout } from "../common/loading/LoadingMainLayout";

export default function Mail({ posts: serverRequest }) {
  const [posts, setPosts] = useState(serverRequest);
  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts`);
      const data = await res.json();
      setPosts(data);
    }
    if (!serverRequest) {
      load();
    }
  }, []);
  if (!posts) {
    return <LoadingMainLayout />;
  }
  return (
    <MainLayout>
      <h1 className={styles.mainTitle}>Mail</h1>
      <p className={styles.description}>
        Excepteur esse excepteur est cupidatat deserunt nulla minim magna
        officia esse cillum esse ullamco.
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/mail/[id]`} as={`/mail/${post.id}`}>
              <a className={styles.author}>Author: {post.author}...</a>
            </Link>
            {/* <p className={styles.message}>Message: {post.message}</p> */}
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Mail.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const res = await fetch("http://localhost:4200/posts");
  const posts = await res.json();
  return { posts };
};
