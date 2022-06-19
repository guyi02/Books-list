import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EmptyState from 'components/EmptyState';
import { EmptyStateTexts } from 'dictionary/home';

describe('EmptyState component', () => {
  it('should render EmptyState with icon in svg', () => {
    const { container } = render(
      <EmptyState text={EmptyStateTexts.messageErrorSearch} />
    );
    const svgTag = container.querySelector('svg');

    expect(svgTag).toBeInTheDocument();
  });

  it('should render EmptyState with text message', () => {
    render(<EmptyState text={EmptyStateTexts.messageErrorSearch} />);

    const textTag = screen.getByTestId(/empty-state-message/);
    expect(textTag).toHaveTextContent(EmptyStateTexts.messageErrorSearch);
  });
});
