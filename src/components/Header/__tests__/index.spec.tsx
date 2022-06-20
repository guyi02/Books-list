import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from 'components/Header';
import { HeaderDictionary } from 'dictionary/home';

describe('Header component', () => {
  it('should render Header with H1 text', () => {
    const { getByText } = render(<Header />);
    expect(getByText(HeaderDictionary.HeadlingText)).toBeInTheDocument();
  });

  it('should render Header with Icon button to show favorites count', () => {
    const { getByLabelText } = render(<Header />);
    expect(
      getByLabelText(HeaderDictionary.AriaLabelDrawer)
    ).toBeInTheDocument();
  });

  it('should Header component open drawer after click', () => {
    const { getByLabelText, getByText } = render(<Header />);
    const areaToClick = getByLabelText(HeaderDictionary.AriaLabelDrawer);
    fireEvent.click(areaToClick);
    const drawer = getByText(HeaderDictionary.DrawerTitle);
    expect(drawer).toBeInTheDocument();
  });

  it('should render Header with Icon button to toggle theme', () => {
    const { getByLabelText } = render(<Header />);
    expect(getByLabelText(HeaderDictionary.AriaLabelTheme)).toBeInTheDocument();
  });
});
