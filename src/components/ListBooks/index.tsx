import {
  SimpleGrid,
  GridItem,
  VStack,
  Box,
  Skeleton,
  Flex,
} from '@chakra-ui/react';
import BookCard from 'components/BookCard';
import { useBooksList } from 'services/useBook';
import { useCallback, useState, ChangeEvent, useEffect } from 'react';
import Pagination from './Pagination';
import SearchInput from 'components/SearchInput';
import useDebounce from 'hooks/useDebounce';
import EmptyState from 'components/EmptyState';
import { EmptyStateTexts } from 'dictionary/home';

const ListBooks = () => {
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
    refetch();
  }, [debouncedValue, refetch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handlePrevious = useCallback(() => {
    setPage((currentPage) => currentPage - 1);
  }, []);

  const handleNext = useCallback(() => {
    setPage((currentPage) => currentPage + 1);
  }, []);

  return (
    <Box
      maxWidth={1080}
      px={{
        sm: 4,
        md: 'unset',
      }}
    >
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
                      <Skeleton
                        minHeight={250}
                        minWidth={{
                          sm: '400px',
                          md: 260,
                        }}
                      />
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
