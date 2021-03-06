import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.scss";

export default function Sidenav() {
  return (
    <nav className={styles.sidenav}>
      <h1 className={styles.title}>The Library</h1>

      <div className={styles.navList}>
        <div className={styles.subtitle}>
          <svg className={styles.bookIcon} width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="white"
              d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"
            />
          </svg>
          Books
        </div>

        <ul className={styles.links}>
          <li className={styles.linksListItem}>
            <NavLink to="/" exact className={styles.link} activeClassName={styles.linkActive}>
              Browse
            </NavLink>
          </li>

          <li className={styles.linksListItem}>
            <NavLink to="/checked-out" exact className={styles.link} activeClassName={styles.linkActive}>
              Checked Out
            </NavLink>
          </li>

          <li className={styles.linksListItem}>
            <NavLink to="/reserved" exact className={styles.link} activeClassName={styles.linkActive}>
              Reserved
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
