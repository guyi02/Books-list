import { apiClient } from 'api';
import { useQuery } from 'react-query';
import { useBooksListKey } from 'services/keys/useBook';
import { BooksListResponse } from 'services/useBook/types';

export const useBooksList = (
  searchTerm: string,
  activePage: number,
  startIndex: number
) => {
  return useQuery<BooksListResponse, Error>(
    useBooksListKey(activePage.toString()),
    async () => {
      const { data } = await apiClient.get(
        `volumes?q=${
          searchTerm || 'react'
        }&startIndex=${startIndex}&&maxResults=12`
      );

      return data;
    },
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );
};
