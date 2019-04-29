import React, { Component } from "react";

import { Book, BookCheckout } from "models";

import styles from "./styles.scss";

interface Props {
  id: number;
  isReserved: boolean;
  isCheckedout: boolean;
  book: Book | undefined;
  checkoutEntry?: BookCheckout;
  reserveBook(id: number): void;
  unreserveBook(id: number): void;
  checkoutBook(id: number): void;
  returnBook(id: number): void;
}

const dateFormatter = new Intl.DateTimeFormat("en-GB");

export default class BookDetails extends Component<Props> {
  constructor(props) {
    super(props);

    this.handleCheckoutBook = this.handleCheckoutBook.bind(this);
    this.handleReserveClick = this.handleReserveClick.bind(this);
  }

  render() {
    const { book, isCheckedout, isReserved } = this.props;

    if (!book) {
      return null;
    }

    let dueDate: Date | null = null;

    if (this.props.checkoutEntry) {
      dueDate = new Date(this.props.checkoutEntry.date);
      dueDate.setDate(dueDate.getDate() + 21); // add three weeks
    }

    return (
      <div className={styles.bookDetails}>
        <div className={styles.bookImage} style={{ backgroundImage: `url(${BOOK_IMAGE_BASE}/${book.imageLink})` }} />

        <div className={styles.infoSection}>
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

          {isCheckedout ? (
            <p className={styles.status}>
              You checked out this book on{" "}
              <span className={styles.checkoutDate}>
                {dateFormatter.format(new Date(this.props.checkoutEntry!.date))}
              </span>
              . It is due back by <span className={styles.dueDate}>{dateFormatter.format(dueDate!)}</span>.
            </p>
          ) : null}

          {isReserved ? <p className={styles.status}>This book is reserved.</p> : null}

          <div className={styles.buttons}>
            <button className={styles.checkout} onClick={this.handleCheckoutBook}>
              {isCheckedout ? "Return Book" : "Checkout Book"}
            </button>

            {isCheckedout ? (
              <button className={styles.reserve} onClick={this.handleReserveClick}>
                {isReserved ? "Unreserve" : "Reserve"}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  handleCheckoutBook() {
    if (this.props.isCheckedout) {
      this.props.returnBook(this.props.id);
    } else {
      this.props.checkoutBook(this.props.id);
      this.props.unreserveBook(this.props.id);
    }
  }

  handleReserveClick() {
    if (this.props.isReserved) {
      this.props.unreserveBook(this.props.id);
    } else {
      this.props.reserveBook(this.props.id);
    }
  }
}
