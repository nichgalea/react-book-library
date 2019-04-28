import React from "react";
import { Link } from "react-router-dom";

import { Book as BookModel } from "models";

import styles from "./styles.scss";

const imageSrcBase = "http://www.100bestbooks.xyz/static/";

interface Props {
  index: number;
  book: BookModel;
}

export default function Book({ book, index }: Props) {
  return (
    <Link to={`/books/${index}`}>
      <div className={styles.book}>
        <img className={styles.image} src={`${imageSrcBase}${book.imageLink}`} />

        <div className={styles.label}>
          <h5 className={styles.title}>{book.title}</h5>
          <p className={styles.author}>{book.author}</p>
          <div className={styles.labelOverlay} />
        </div>
      </div>
    </Link>
  );
}
