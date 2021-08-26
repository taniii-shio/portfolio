import Head from "next/head";
import styles from "../src/styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>NAOTO SHIOYA</h1>
          <p>WELCOME TO MY PORTFOLIO</p>
        </div>
      </main>
    </>
  );
}
