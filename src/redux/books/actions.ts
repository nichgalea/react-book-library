import { Book } from "models";

export enum BooksActionTypes {
  SET_BOOKS = "books/set"
}

export interface SetBooksAction {
  type: BooksActionTypes.SET_BOOKS;
  payload: Book[];
}

export function setBooks(books: Book[]): SetBooksAction {
  return {
    type: BooksActionTypes.SET_BOOKS,
    payload: books
  };
}

export type BooksAction = SetBooksAction; // Should be union type of multiple actions (if added later on)
