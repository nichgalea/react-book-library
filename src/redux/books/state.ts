import { Book, BookCheckout } from "models";

export interface BooksState {
  list: Book[];
  checkedOut: BookCheckout[];
  reserved: number[];
}

export const initialBooksState: BooksState = {
  list: [],
  checkedOut: [],
  reserved: []
};
