import { Box, Input } from '@chakra-ui/react';

const SearchInput = () => {
  return (
    <Box w='100%' maxWidth='1080' px='12'>
      <Input placeholder='Search for book' />
    </Box>
  );
};

export default SearchInput;
