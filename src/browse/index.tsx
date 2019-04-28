import React, { Component, ChangeEvent } from "react";
import { debounce } from "lodash";
import Fuse from "fuse.js";

import { Book as BookModel } from "models";
import Book from "book";

import styles from "./styles.scss";

interface State {
  search: string;
  books: BookModel[];
}

export default class Browse extends Component<{}, State> {
  private originalBookList: BookModel[] = [];

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      books: []
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.searchBooks = debounce(this.searchBooks.bind(this), 500);
  }

  componentDidMount() {
    fetch("http://localhost:9001/books")
      .then(r => r.json())
      .then((books: BookModel[]) => {
        this.originalBookList = books;
        this.setState({ books });
      });
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>) {
    if (prevState.search !== this.state.search) {
      this.searchBooks();
    }
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

  searchBooks() {
    if (this.state.search.length > 0) {
      const results = new Fuse(this.state.books, {
        keys: ["title", "author"],
        threshold: 0.2
      }).search(this.state.search);

      this.setState({ books: results });
    } else {
      this.setState({ books: this.originalBookList });
    }
  }
}
