import { useCallback, useState, ChangeEvent, useEffect, useRef } from 'react';
import {
  SimpleGrid,
  GridItem,
  VStack,
  Box,
  Skeleton,
  Flex,
} from '@chakra-ui/react';
import { useBooksList } from 'services/useBook';
import useDebounce from 'hooks/useDebounce';

import BookCard from 'components/BookCard';
import Pagination from 'components/ListBooks/Pagination';
import EmptyState from 'components/EmptyState';
import SearchInput from 'components/SearchInput';
import { EmptyStateTexts } from 'dictionary/home';

const ListBooks = () => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedValue = useDebounce(searchTerm, 1500);
  const [page, setPage] = useState<number>(0);
  const {
    data: bookList,
    isPreviousData,
    isLoading,
    isFetching,
    refetch,
  } = useBooksList(searchTerm, page, page * 12);

  useEffect(() => {
    setPage(0);
    refetch();
  }, [debouncedValue, refetch]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const scrollToTop = () =>
    setTimeout(() => {
      listRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500);

  const handlePrevious = useCallback(() => {
    setPage((currentPage) => currentPage - 1);
    scrollToTop();
  }, []);

  const handleNext = useCallback(() => {
    setPage((currentPage) => currentPage + 1);
    scrollToTop();
  }, []);

  return (
    <Box ref={listRef} maxWidth={1080} px={[4, 0]}>
      <Flex my={8} justifyContent='center' alignItems='center'>
        <SearchInput value={searchTerm} handleChange={handleChange} />
      </Flex>

      {!bookList?.items && !isLoading ? (
        <EmptyState text={EmptyStateTexts.messageErrorSearch} />
      ) : (
        <>
          <SimpleGrid
            columns={{ sm: 1, md: 3, lg: 4 }}
            spacing='16px'
            width={{
              sm: '100%',
              md: 'auto',
            }}
          >
            {isLoading || isFetching
              ? Array(12)
                  .fill(null)
                  .map((_, index) => (
                    <GridItem key={'skeleton-key-' + index}>
                      <Skeleton minHeight={250} minWidth={['350px', '260px']} />
                    </GridItem>
                  ))
              : bookList?.items.map((book) => (
                  <GridItem key={book.id}>
                    <BookCard {...book} />
                  </GridItem>
                ))}
          </SimpleGrid>

          <VStack py={8}>
            <Pagination
              currentPage={page + 1}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              isDisabledPrevious={page === 0}
              isDisabledNext={bookList?.items.length === 0 || isPreviousData}
            />
          </VStack>
        </>
      )}
    </Box>
  );
};

export default ListBooks;
