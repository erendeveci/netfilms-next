import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";
function Categories({ categories }) {
   
   
  return (
    <div className={styles.categoriesWrapper}>
      {categories.map((item, index) => (
        <Link className={styles.categori} key={index} href={`${item.id}`}>
          <div>{item.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
