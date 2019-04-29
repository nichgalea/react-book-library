import { Book, BookCheckout } from "models";

export enum BooksActionTypes {
  SET_BOOKS = "books/set",

  CHECKOUT_BOOK = "books/checkout",
  RETURN_BOOK = "books/return",

  RESERVE_BOOK = "books/reserve",
  UNRESERVE_BOOK = "books/unreserve"
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

export interface CheckoutBookAction {
  type: BooksActionTypes.CHECKOUT_BOOK;
  payload: BookCheckout;
}

export function checkoutBook(id: number): CheckoutBookAction {
  return {
    type: BooksActionTypes.CHECKOUT_BOOK,
    payload: { id, date: new Date().toISOString() }
  };
}

export interface ReturnBookAction {
  type: BooksActionTypes.RETURN_BOOK;
  payload: number;
}

export function returnBook(id: number): ReturnBookAction {
  return {
    type: BooksActionTypes.RETURN_BOOK,
    payload: id
  };
}

export interface ReserveBookAction {
  type: BooksActionTypes.RESERVE_BOOK;
  payload: number;
}

export function reserveBook(id: number): ReserveBookAction {
  return {
    type: BooksActionTypes.RESERVE_BOOK,
    payload: id
  };
}

export interface UnreserveBookAction {
  type: BooksActionTypes.UNRESERVE_BOOK;
  payload: number;
}

export function unreserveBook(id: number): UnreserveBookAction {
  return {
    type: BooksActionTypes.UNRESERVE_BOOK,
    payload: id
  };
}

export type BooksAction =
  | SetBooksAction
  | CheckoutBookAction
  | ReturnBookAction
  | ReserveBookAction
  | UnreserveBookAction;
