import { SimpleGrid, GridItem, VStack, Text } from '@chakra-ui/react';
import Book from 'components/Book';
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator,
} from '@ajna/pagination';

const ListBooks = () => {
  // constants
  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pages,
    pagesCount,
    // offset,
    currentPage,
    // setCurrentPage,
    // setIsDisabled,
    isDisabled,
    // pageSize,
    // setPageSize,
  } = usePagination({
    total: 2,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: {
      pageSize: 5,
      isDisabled: false,
      currentPage: 1,
    },
  });
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4 }}
        spacing='16px'
        border='1px'
        width={{
          sm: '100%',
          md: 'auto',
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <GridItem key={'book' + index.toString()}>
            <Book />
          </GridItem>
        ))}
      </SimpleGrid>

      <VStack>
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          isDisabled={isDisabled}
          onPageChange={() => console.log('aaa')}
        >
          <PaginationContainer
            align='center'
            justify='space-between'
            p={4}
            w='full'
          >
            <PaginationPrevious
              _hover={{
                bg: 'yellow.400',
              }}
              bg='yellow.300'
              onClick={() =>
                console.log(
                  'Im executing my own function along with Previous component functionality'
                )
              }
            >
              <Text>Previous</Text>
            </PaginationPrevious>
            <PaginationPageGroup
              isInline
              align='center'
              separator={
                <PaginationSeparator
                  onClick={() =>
                    console.log(
                      'Im executing my own function along with Separator component functionality'
                    )
                  }
                  bg='blue.300'
                  fontSize='sm'
                  w={7}
                  jumpSize={11}
                />
              }
            >
              {pages.map((page: number) => (
                <PaginationPage
                  w={7}
                  bg='red.300'
                  key={`pagination_page_${page}`}
                  page={page}
                  onClick={() =>
                    console.log(
                      'Im executing my own function along with Page component functionality'
                    )
                  }
                  fontSize='sm'
                  _hover={{
                    bg: 'green.300',
                  }}
                  _current={{
                    bg: 'green.300',
                    fontSize: 'sm',
                    w: 7,
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext
              _hover={{
                bg: 'yellow.400',
              }}
              bg='yellow.300'
              onClick={() =>
                console.log(
                  'Im executing my own function along with Next component functionality'
                )
              }
            >
              <Text>Next</Text>
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
      </VStack>
    </>
  );
};

export default ListBooks;
