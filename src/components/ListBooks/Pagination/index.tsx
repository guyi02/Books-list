import { HStack, Button, Text } from '@chakra-ui/react';
import { PaginationTexts } from 'dictionary/home';
import { PaginationProps } from './types';

const Pagination = ({
  currentPage,
  handlePrevious,
  handleNext,
  isDisabledPrevious,
  isDisabledNext,
}: PaginationProps) => {
  return (
    <HStack data-testid='pagination-wrapper'>
      <Button disabled={isDisabledPrevious} onClick={handlePrevious}>
        {PaginationTexts.Previous}
      </Button>

      <Text>{currentPage}</Text>

      <Button disabled={isDisabledNext} onClick={handleNext}>
        {PaginationTexts.Next}
      </Button>
    </HStack>
  );
};

export default Pagination;
