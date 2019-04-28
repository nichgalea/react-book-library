import React from "react";

import { Book } from "models";

import styles from "./styles.scss";

interface Props {
  id: number;
  book: Book | undefined;
}

export default function BookDetails({ book, id }: Props) {
  if (!book) {
    return null;
  }

  return (
    <div className={styles.bookDetails}>
      <img src={`${BOOK_IMAGE_BASE}/${book.imageLink}`} />

      <div>
        <table className={styles.infoTable}>
          <tbody>
            <tr>
              <th>Title</th>
              <td>{book.title}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{book.author}</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{book.year}</td>
            </tr>
            <tr>
              <th>Language</th>
              <td>{book.language}</td>
            </tr>
            <tr>
              <th>Pages</th>
              <td>{book.pages}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{book.country}</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.link}>
          <a href={book.link} target="_blank">
            More info
          </a>
        </div>
      </div>
    </div>
  );
}
