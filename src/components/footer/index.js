import Link from "next/link";
import React from "react";

import styles from "./styles.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      
      Made with by
      <Link href="https://github.com/erendeveci" target="_blank">
        Eren Deveci
      </Link>
    </footer>
  );
}

export default Footer;
