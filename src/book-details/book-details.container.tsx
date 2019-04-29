import { connect } from "react-redux";

import BookDetails from "./book-details.component";
import { Book, BookCheckout } from "models";
import { RouteComponentProps } from "react-router";
import { RootState } from "redux/store";
import { reserveBook, unreserveBook, checkoutBook, returnBook } from "redux/books";

interface StateProps {
  id: number;
  isReserved: boolean;
  isCheckedout: boolean;
  book: Book | undefined;
  checkoutEntry?: BookCheckout;
}

interface DispatchProps {
  reserveBook(id: number): void;
  unreserveBook(id: number): void;
  checkoutBook(id: number): void;
  returnBook(id: number): void;
}

export default connect<StateProps, DispatchProps, RouteComponentProps<{ id: string }>, RootState>(
  (state, ownProps) => {
    const idx = Number(ownProps.match.params.id);

    const isCheckedout = state.books.checkedOut.some(c => c.id === idx);
    const isReserved = state.books.reserved.some(r => r === idx);

    return {
      checkoutEntry: state.books.checkedOut.find(c => c.id === idx),
      id: idx,
      book: state.books.list[idx],
      status,
      isCheckedout,
      isReserved
    };
  },
  {
    reserveBook,
    unreserveBook,
    checkoutBook,
    returnBook: returnBook
  }
)(BookDetails);
