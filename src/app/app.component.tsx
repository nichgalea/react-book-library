import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Sidenav from "sidenav";
import Browse from "browse";
import BookDetails from "book-details";
import { Book } from "models";

import styles from "./styles.scss";

interface Props {
  setBooks(books: Book[]): void;
}

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`${API_URL}/books`)
      .then(r => r.json() as Promise<Book[]>)
      .then(this.props.setBooks);
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <div className={styles.app}>
          <Sidenav />

          <main className={styles.mainContent}>
            <Switch>
              <Route path="/" exact component={Browse} />
              <Route path="/checked-out" exact render={() => "Checked Out"} />
              <Route path="/reserved" exact render={() => "Reserved"} />
              <Route path="/my-account" exact render={() => "My Account"} />
              <Route path="/books/:id" exact component={BookDetails} />

              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
