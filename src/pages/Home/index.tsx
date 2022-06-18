import { VStack } from '@chakra-ui/react';
import Header from 'components/Header';
import ListBooks from 'components/ListBooks';

const Home = () => {
  return (
    <VStack>
      <Header />
      <ListBooks />
    </VStack>
  );
};

export default Home;
