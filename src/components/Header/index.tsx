import { Stack, Heading } from '@chakra-ui/react';
import { HeaderDictionary } from 'dictionary/home';

const Header = () => {
  return (
    <Stack>
      <Heading as='h1'>{HeaderDictionary.HeadlingText}</Heading>
    </Stack>
  );
};

export default Header;
