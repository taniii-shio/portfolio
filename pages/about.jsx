import Head from "next/head";
import Image from "next/image";
import styles from "../src/styles/about.module.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  table: {
    width: 600,
    margin: "0 auto",
    marginBottom: "30px",
  },
  profile: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  data: {
    fontSize: "20px",
  },
  mobile: {
    marginBottom: "30px",
    maxWidth: "600px",
  },
  tableItem: {
    width: "auto",
    margin: "0 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tableTitle: {
    fontWeight: "bold",
    fontSize: "18px",
  },
}));

function createData(name, data) {
  return { name, data };
}

const profiles = [
  createData("Name", "Naoto Shioya"),
  createData("Date of birth", "1999/11/17"),
  createData("Tools", "Illustrator, Photoshop, Figma"),
  createData("Language", "JavaScript, React.js, Next.js"),
];

export default function About() {
  const classes = useStyles();

  const mobileTable = (
    <Container className={classes.mobile}>
      <div className={classes.tableItem}>
        <p className={classes.tableTitle}>Name</p>
        <p>Naoto Shioya</p>
      </div>
      <Divider />
      <div className={classes.tableItem}>
        <p className={classes.tableTitle}>Date of birth</p>
        <p>1999/11/17</p>
      </div>
      <Divider />
      <div className={classes.tableItem}>
        <p className={classes.tableTitle}>Tools</p>
        <p>Illustrator, Photoshop, Figma</p>
      </div>
      <Divider />
      <div className={classes.tableItem}>
        <p className={classes.tableTitle}>Language</p>
        <p>JavaScript, React.js, Next.js</p>
      </div>
      <Divider />
    </Container>
  );
  return (
    <>
      <Head>
        <title>NaotoShioya/About</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>

        <div className={styles.imageContainer}>
          <Hidden smDown>
            <Image
              priority
              src="/images/about.jpg"
              className={styles.borderCircle}
              height={200}
              width={200}
            />
          </Hidden>
          <Hidden mdUp>
            <Image
              priority
              src="/images/about.jpg"
              className={styles.borderCircle}
              height={150}
              width={150}
            />
          </Hidden>
        </div>

        <Hidden smDown>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {profiles.map((profile) => (
                  <TableRow key={profile.name}>
                    <TableCell
                      component="th"
                      scope="profile"
                      align="center"
                      className={classes.profile}
                    >
                      {profile.name}
                    </TableCell>
                    <TableCell align="center" className={classes.data}>
                      {profile.data}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Hidden>
        <Hidden mdUp>{mobileTable}</Hidden>
        <IconButton href="https://github.com/taniii-shio" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://twitter.com/taniii_shio" target="_blank">
          <TwitterIcon />
        </IconButton>
      </div>
    </>
  );
}
