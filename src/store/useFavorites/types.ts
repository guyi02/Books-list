import { Book } from 'services/useBook/types';

export type FavoriteStore = {
  books: Book[];
  setBook: (book: Book) => void;
};
