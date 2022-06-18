import create, { SetState } from 'zustand';
import { persist } from 'zustand/middleware';

import { FavoriteStore } from './types';

export const useFavorites = create(
  persist(
    (set: SetState<FavoriteStore>, get) => ({
      books: [],
      setBook: (bookParam) => {
        const isExistsBook = get().books.find(
          (book) => book.id === bookParam.id
        );

        set((state) => ({
          books: isExistsBook
            ? state.books.filter((book) => book.id !== bookParam.id)
            : [...state.books, bookParam],
        }));
      },
    }),
    { name: 'books-favorites' }
  )
);
