import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Sidenav from "sidenav";
import Browse from "browse";

import styles from "./styles.scss";

export default function App() {
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

            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
