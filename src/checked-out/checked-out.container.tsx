import { connect } from "react-redux";

import CheckedOut, { CheckedOutBook } from "./checked-out.component";
import { RootState } from "redux/store";

interface StateProps {
  checkedOutBooks: CheckedOutBook[];
}

export default connect<StateProps, {}, {}, RootState>(state => ({
  checkedOutBooks: state.books.checkedOut.map(b => ({
    book: state.books.list[b.id],
    checkoutDate: b.date
  }))
}))(CheckedOut);
