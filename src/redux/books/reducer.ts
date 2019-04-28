import { BooksActionTypes, BooksAction } from "./actions";
import { initialBooksState, BooksState } from "./state";

export function booksReducer(state = initialBooksState, action: BooksAction): BooksState {
  switch (action.type) {
    case BooksActionTypes.SET_BOOKS: {
      return {
        ...state,
        list: action.payload
      };
    }

    default:
      return state;
  }
}
