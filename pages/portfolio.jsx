import React from "react";

import Head from "next/head";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import styles from "../src/styles/portfolio.module.css";

import PortfolioItem from "../src/components/portfolio/PortfolioItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>NaotoShioya/Portfolio</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Works</h1>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className={styles.excont}>
                <h2>Create Website</h2>
                <p>
                  I created a website for an apparel brand started by a friend.
                  <br />I made it with plain html and css.
                </p>
                <p>Tools: HTML, CSS</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <PortfolioItem
                image={"../../images/middizzzy.jpg"}
                title={"MidDizzzy"}
                body={"https://middizzzy.tokyo"}
                // href={"https://middizzzy.tokyo"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className={styles.excont}>
                <h2>test</h2>
                <p>test</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <PortfolioItem image={""} title={"test"} body={"test"} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
