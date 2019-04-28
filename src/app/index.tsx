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
            <Route path="/" exact render={() => "Browse"} />
            <Route path="/checked-out" exact render={() => "Checked Out"} />
            <Route path="/reserved" exact render={() => "Reserved"} />
            <Route path="/my-account" exact render={() => "My Account"} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
