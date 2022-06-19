import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from 'components/BookCard';
import { mockBook } from 'components/BookCard/utils';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe('BookCard component', () => {
  it('should render BookCard with image src from google api', () => {
    render(<BookCard {...mockBook} />);

    const imgTag = screen.getByRole(/img/);
    expect(imgTag).toHaveAttribute(
      'src',
      mockBook.volumeInfo.imageLinks && mockBook.volumeInfo.imageLinks.thumbnail
    );
  });

  it('should render BookCard with image src default', () => {
    const newBookWithImageDefault = mockBook;
    newBookWithImageDefault.volumeInfo.imageLinks = undefined;
    render(<BookCard {...newBookWithImageDefault} />);

    const imgTag = screen.getByRole(/img/);
    expect(imgTag).toHaveAttribute(
      'src',
      'https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg'
    );
  });

  it('should render BookCard with category from google api param', () => {
    render(<BookCard {...mockBook} />);

    const categoryTag = screen.getByTestId(/category-tag/);
    expect(categoryTag).toHaveTextContent(
      `${mockBook.volumeInfo.categories[0].toLowerCase()}`
    );
  });

  it('should render BookCard with default category if api not return any category', () => {
    const bookWithoutCategory = mockBook;
    bookWithoutCategory.volumeInfo.categories = [];
    render(<BookCard {...bookWithoutCategory} />);

    const categoryTag = screen.getByTestId(/category-tag/);
    expect(categoryTag).toHaveTextContent(/no-category/);
  });

  it('should render BookCard with button to toggle favorites books', () => {
    render(<BookCard {...mockBook} />);
    const favoriteButton = screen.getByTestId(/favorite-icon-button/);
    expect(favoriteButton).toBeInTheDocument();
  });
});
