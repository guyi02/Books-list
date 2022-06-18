import { VscSearchStop } from 'react-icons/vsc';
import { VStack, Text, Center } from '@chakra-ui/react';
import { EmptyStateTexts } from 'dictionary/home';

const EmptyState = () => {
  return (
    <VStack width='100%'>
      <VscSearchStop fontSize='200px' />
      <Center>
        <Text align='center'>{EmptyStateTexts.messageErrorSearch}</Text>
      </Center>
    </VStack>
  );
};

export default EmptyState;
