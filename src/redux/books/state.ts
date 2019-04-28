import { Book } from "models";

export interface BooksState {
  list: Book[];
}

export const initialBooksState: BooksState = {
  list: []
};
