import { fireEvent, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ListBooks from 'components/ListBooks';

const queryClient = new QueryClient();
const wrapper = (ui: JSX.Element) =>
  render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);

describe('ListBooks component', () => {
  it('should render ListBooks with input search including some value', () => {
    const { getByTestId } = wrapper(<ListBooks />);
    const input = getByTestId(/input-search/) as HTMLInputElement;
    fireEvent.change(input, { target: { value: '24/05/2020' } });
    expect(input.value).toBe('24/05/2020');
  });

  it('should render ListBooks with skeletons if data from api is empty', () => {
    const { container } = wrapper(<ListBooks />);
    const skeletons = container.getElementsByClassName('chakra-skeleton');
    expect(skeletons.length).toBe(12);
  });
});
