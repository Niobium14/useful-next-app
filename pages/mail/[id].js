import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import styles from "../../styles/Home.module.css";
import { LoadingMainLayout } from "../../common/loading/LoadingMainLayout";

export default function Post({ post: serverRequest }) {
  const [post, setPost] = useState(serverRequest);
  const router = useRouter();
  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await res.json();
      setPost(data);
    }
    if (!serverRequest) {
      load();
    }
  }, []);

  if (!post) {
    return <LoadingMainLayout />;
  }
  return (
    <MainLayout>
      <h1 className={styles.author}>{post.author}</h1>
      <hr />
      <h2 className={styles.message}>{post.message}</h2>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }
  const res = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await res.json();
  return { post };
};
