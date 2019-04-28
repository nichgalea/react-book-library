import { createStore, combineReducers } from "redux";

import { booksReducer, BooksState } from "./books";

export interface RootState {
  books: BooksState;
}

export default (previousState?: Partial<RootState>) => {
  return createStore(
    combineReducers({ books: booksReducer }),
    previousState,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
};
