import { VscSearchStop } from 'react-icons/vsc';
import { VStack, Text, Center } from '@chakra-ui/react';

import { EmptyStateProps } from './types';

const EmptyState = ({ text }: EmptyStateProps) => {
  return (
    <VStack width='100%'>
      <VscSearchStop fontSize='200px' />
      <Center data-testid='empty-state-message'>
        <Text align='center'>{text}</Text>
      </Center>
    </VStack>
  );
};

export default EmptyState;
