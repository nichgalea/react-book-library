import { connect } from "react-redux";

import { setBooks } from "redux/books";

import App from "./app.component";

export default connect(
  undefined,
  { setBooks }
)(App);
