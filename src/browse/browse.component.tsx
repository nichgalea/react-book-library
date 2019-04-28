import React, { Component, ChangeEvent } from "react";
import { debounce } from "lodash";
import Fuse from "fuse.js";

import { Book as BookModel } from "models";
import Book from "book";

import styles from "./styles.scss";

interface Props {
  books: BookModel[];
}

interface State {
  search: string;
  searchResults: BookModel[];
}

export default class Browse extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      search: "",
      searchResults: []
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.searchBooks = debounce(this.searchBooks.bind(this), 500);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
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
          {(this.state.search.length > 0 ? this.state.searchResults : this.props.books).map((book, i) => (
            <div key={i} className={styles.bookListItem}>
              <Book index={i} book={book} />
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
      const results = new Fuse(this.props.books, {
        keys: ["title", "author"],
        threshold: 0.2
      }).search(this.state.search);

      this.setState({ searchResults: results });
    } else {
      this.setState({ searchResults: this.props.books });
    }
  }
}
