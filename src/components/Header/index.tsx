import {
  HStack,
  Heading,
  Spacer,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';

import { HeaderDictionary } from 'dictionary/home';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <HStack>
      <Heading as='h1'>{HeaderDictionary.HeadlingText}</Heading>
      <Spacer />

      <IconButton
        aria-label='Theme toggle mode'
        onClick={toggleColorMode}
        icon={isDark ? <FaSun /> : <FaMoon />}
      />
    </HStack>
  );
};

export default Header;
