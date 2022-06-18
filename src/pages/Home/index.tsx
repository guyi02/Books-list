import { VStack } from '@chakra-ui/react';
import Header from 'components/Header';
import ListBooks from 'components/ListBooks';
import SearchInput from 'components/SearchInput';

const Home = () => {
  return (
    <VStack>
      <Header />
      <SearchInput />
      <ListBooks />
    </VStack>
  );
};

export default Home;
