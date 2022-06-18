export type PaginationProps = {
  currentPage: number;
  handlePrevious: () => void;
  handleNext: () => void;
  isDisabledPrevious: boolean;
  isDisabledNext: boolean;
};
