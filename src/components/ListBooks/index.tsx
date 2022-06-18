import { SimpleGrid, GridItem, VStack } from '@chakra-ui/react';
import Book from 'components/Book';
import { useBooksList } from 'services/useBook';
import { useCallback, useState } from 'react';
import Pagination from './Pagination';

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
    <>
      <SimpleGrid
        maxWidth='1080'
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacing='16px'
        border='1px'
        width={{
          sm: '100%',
          md: 'auto',
        }}
      >
        {data?.items.map((book, index) => (
          <GridItem key={'book' + index.toString()}>
            <Book {...book} />
          </GridItem>
        ))}
      </SimpleGrid>

      <VStack>
        <Pagination
          currentPage={page + 1}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          isDisabledPrevious={page === 0}
          isDisabledNext={data?.items.length === 0 || isPreviousData}
        />
      </VStack>
    </>
  );
};

export default ListBooks;
