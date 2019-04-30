import React from "react";

import styles from "./styles.scss";
import Book from "book";
import { Book as BookModel } from "models";

const dateFormatter = new Intl.DateTimeFormat("en-GB");

export interface CheckedOutBook {
  book: BookModel;
  checkoutDate: string;
}

interface Props {
  checkedOutBooks: CheckedOutBook[];
}

export default function CheckedOut({ checkedOutBooks }: Props) {
  return (
    <div className={styles.checkedOutList}>
      {checkedOutBooks.length === 0 ? <p className={styles.checkedOutEmpty}>You have no books checked out.</p> : null}

      {checkedOutBooks.map((b, i) => {
        const dueDate = new Date(b.checkoutDate);
        const diff = (Date.now() - dueDate.getTime()) / (1000 * 60 * 60 * 24);

        let dueResult = "";

        if (diff === 0) {
          dueResult = "Today";
        } else if (diff < 0) {
          if (diff === 1) {
            dueResult = "Yesterday";
          } else {
            dueResult = `${diff} days ago`;
          }
        } else {
          if (diff === -1) {
            dueResult = "Tomorrow";
          } else {
            dueResult = dateFormatter.format(dueDate);
          }
        }

        return (
          <div key={i} className={styles.checkedOutListItem}>
            <Book index={i} book={b.book} due={dueResult} />
          </div>
        );
      })}
    </div>
  );
}
