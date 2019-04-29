import { connect } from "react-redux";

import { Book } from "models";
import { RootState } from "redux/store";

import Reserved from "./reserved.component";

interface StateProps {
  books: Book[];
}

export default connect<StateProps, {}, {}, RootState>(state => ({
  books: state.books.reserved.map(b => state.books.list[b])
}))(Reserved);
