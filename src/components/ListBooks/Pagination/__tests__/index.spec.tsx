import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Pagination from 'components/ListBooks/Pagination';
import { PaginationTexts } from 'dictionary/home';
import { mockPagination } from 'components/ListBooks/utils';

describe('Pagination component', () => {
  it('should render Pagination initial props', () => {
    const { getByText } = render(<Pagination {...mockPagination} />);
    const currentPageText = getByText(mockPagination.currentPage);
    expect([
      expect(currentPageText).toHaveTextContent(String(0)),
      expect(getByText(PaginationTexts.Previous)).toHaveProperty(
        'disabled',
        true
      ),
    ]).toBeTruthy();
  });
});
