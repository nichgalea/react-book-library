import React, { useState, Component, ChangeEvent } from "react";

import { Book as BookModel } from "models";
import Book from "book";

import styles from "./styles.scss";

interface State {
  search: string;
  books: BookModel[];
}

export default class Browse extends Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      books: []
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:9001/books")
      .then(r => r.json())
      .then((books: BookModel[]) => this.setState({ books }));
  }

  render() {
    return (
      <div className={styles.browse}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleSearchChange}
        />

        <div className={styles.bookList}>
          {this.state.books.map((b, i) => (
            <div key={i} className={styles.bookListItem}>
              <Book index={i} book={b} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ search: e.currentTarget.value });
  }
}
