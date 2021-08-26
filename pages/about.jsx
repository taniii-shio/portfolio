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

const useStyles = makeStyles({
  table: {
    width: 600,
    margin: "0 auto",
  },
  profile: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  data: {
    fontSize: "20px",
  },
});

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
  return (
    <>
      <Head>
        <title>NaotoShioya/About</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>

        <div className={styles.imageContainer}>
          <Image
            priority
            src="/images/about.jpg"
            className={styles.borderCircle}
            height={200}
            width={200}
          />
        </div>

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
      </div>
    </>
  );
}
