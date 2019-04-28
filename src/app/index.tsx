import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidenav from "sidenav";

import styles from "./styles.scss";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <div className={styles.app}>
        <Sidenav />

        <main className={styles.mainContent}>
          <Switch>
            <Route path="/" render={() => "Books"} />
            <Route path="/books" render={() => "Books"} />
            <Route path="/checked-out" render={() => "Checked Out"} />
            <Route path="/reserved" render={() => "Reserved"} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
