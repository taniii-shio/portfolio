import Head from "next/head";
import styles from "../src/styles/home.module.css";
import Hidden from "@material-ui/core/Hidden";

export default function Home() {
  return (
    <>
      <Head>
        <title>NaotoShioya/Home</title>
      </Head>

      <main>
        <div className={styles.container}>
          <Hidden xsDown>
            <h1 className={styles.title}>NAOTO SHIOYA</h1>
          </Hidden>
          <Hidden smUp>
            <h1 className={styles.mobileTit}>NAOTO SHIOYA</h1>
          </Hidden>
          <h3>WELCOME TO MY PORTFOLIO SITE</h3>
        </div>
      </main>
    </>
  );
}
