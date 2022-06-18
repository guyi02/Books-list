import { apiClient } from 'api';
import { useQuery } from 'react-query';
import { useBooksListKey } from 'services/keys/useBook';
import { BooksListResponse } from 'services/useBook/types';

export const useBooksList = (activePage: number, startIndex: number) => {
  return useQuery<BooksListResponse, Error>(
    useBooksListKey(activePage.toString()),
    async () => {
      const { data } = await apiClient.get(
        `volumes?q=react&startIndex=${startIndex}&&maxResults=12&key=AIzaSyAIzS77Ev4uNr_CI6QH2gPmAnZEFuqVyMs`
      );

      return data;
    },
    { keepPreviousData: true }
  );
};
