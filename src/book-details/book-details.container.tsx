import { connect } from "react-redux";

import BookDetails from "./book-details.component";
import { Book } from "models";
import { RouteComponentProps } from "react-router";
import { RootState } from "redux/store";

interface StateProps {
  id: number;
  book: Book | undefined;
}

interface DispatchProps {}

export default connect<StateProps, DispatchProps, RouteComponentProps<{ id: string }>, RootState>(
  (state, ownProps) => {
    const idx = Number(ownProps.match.params.id);

    return {
      id: idx,
      book: state.books.list[idx]
    };
  },
  {}
)(BookDetails);
