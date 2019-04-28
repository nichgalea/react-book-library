import { connect } from "react-redux";

import { Book } from "models";
import { RootState } from "redux/store";

import Browse from "./browse.component";

interface StateProps {
  books: Book[];
}

export default connect<StateProps, {}, {}, RootState>(state => ({ books: state.books.list }))(Browse);
