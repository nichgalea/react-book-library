import React from "react";

import { Book } from "models";

import styles from "./styles.scss";

interface Props {
  id: string;
  book: Book;
}

export default function BookDetails({ book }: Props) {
  return (
    <div className={styles.book}>
      <img src={`${BOOK_IMAGE_BASE}/${book.imageLink}`} />
    </div>
  );
}
