import React from "react";

import styles from "./styles.scss";
import Book from "book";
import { Book as BookModel } from "models";

interface Props {
  books: BookModel[];
}

export default function Reserved({ books }: Props) {
  return (
    <div className={styles.reserveList}>
      {books.length === 0 ? <p className={styles.reservedEmpty}>You have no reserved books.</p> : null}

      {books.map((book, i) => (
        <div key={i} className={styles.reserveListItem}>
          <Book index={i} book={book} />
        </div>
      ))}
    </div>
  );
}
