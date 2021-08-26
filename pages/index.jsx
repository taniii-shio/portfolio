import Head from "next/head";
import styles from "../src/styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>NaotoShioya/Home</title>
      </Head>

      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>
            NAOTO
            <br />
            SHIOYA
          </h1>
          <h3>WELCOME TO MY PORTFOLIO SITE</h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </main>
    </>
  );
}
