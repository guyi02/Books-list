import { SimpleGrid, GridItem, VStack, Box } from '@chakra-ui/react';
import Book from 'components/Book';
import { useBooksList } from 'services/useBook';
import { useCallback, useState } from 'react';
import Pagination from './Pagination';
import SearchInput from 'components/SearchInput';

const ListBooks = () => {
  const [page, setPage] = useState(0);
  const { data, isPreviousData } = useBooksList(page, page * 12);

  const handlePrevious = useCallback(() => {
    setPage((currentPage) => currentPage - 1);
  }, []);

  const handleNext = useCallback(() => {
    setPage((currentPage) => currentPage + 1);
  }, []);

  return (
    <Box maxWidth={1080}>
      <Box my={8}>
        <SearchInput />
      </Box>

      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4 }}
        spacing='16px'
        width={{
          sm: '100%',
          md: 'auto',
        }}
      >
        {data?.items.map((book) => (
          <GridItem key={book.id}>
            <Book {...book} />
          </GridItem>
        ))}
      </SimpleGrid>

      <VStack py={4}>
        <Pagination
          currentPage={page + 1}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          isDisabledPrevious={page === 0}
          isDisabledNext={data?.items.length === 0 || isPreviousData}
        />
      </VStack>
    </Box>
  );
};

export default ListBooks;
