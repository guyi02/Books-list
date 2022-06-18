import { HStack, Button, Text } from '@chakra-ui/react';
import { PaginationProps } from './types';

const Pagination = ({
  currentPage,
  handlePrevious,
  handleNext,
  isDisabledPrevious,
  isDisabledNext,
}: PaginationProps) => {
  return (
    <HStack>
      <Button disabled={isDisabledPrevious} onClick={handlePrevious}>
        Previous
      </Button>

      <Text>{currentPage}</Text>

      <Button disabled={isDisabledNext} onClick={handleNext}>
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
