import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gnav}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className={styles.gnav}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div className={styles.gnav}>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </div>
      <div className={styles.gnav}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
