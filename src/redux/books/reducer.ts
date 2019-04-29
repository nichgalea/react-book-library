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

    case BooksActionTypes.CHECKOUT_BOOK: {
      return {
        ...state,
        checkedOut: [...state.checkedOut, action.payload]
      };
    }

    case BooksActionTypes.RETURN_BOOK: {
      return {
        ...state,
        checkedOut: state.checkedOut.filter(c => c.id !== action.payload)
      };
    }

    case BooksActionTypes.RESERVE_BOOK: {
      return {
        ...state,
        reserved: [...state.reserved, action.payload]
      };
    }

    case BooksActionTypes.UNRESERVE_BOOK: {
      return {
        ...state,
        reserved: state.reserved.filter(id => id !== action.payload)
      };
    }

    default:
      return state;
  }
}
