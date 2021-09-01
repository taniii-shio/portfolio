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
            <h1 className={styles.title}>Naoto Shioya</h1>
          </Hidden>
          <Hidden smUp>
            <h1 className={styles.mobileTit}>Naoto Shioya</h1>
          </Hidden>
          <h3>Welcome to my PortfolioSite</h3>
        </div>
      </main>
    </>
  );
}
