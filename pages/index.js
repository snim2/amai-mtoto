// import Head from "next/head";
import styles from "../styles/Home.module.css";
import Video from "../components/Video";

import Media from "../components/Media";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer></footer>
    </div>
  );
}
