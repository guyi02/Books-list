import {
  VStack,
  Box,
  Flex,
  Center,
  Text,
  Heading,
  Spacer,
  IconButton,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  DrawerBody,
  Tooltip,
} from '@chakra-ui/react';

import { HeaderDictionary, EmptyStateTexts } from 'dictionary/home';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { useFavorites } from 'store/useFavorites';
import BookCard from 'components/BookCard';
import EmptyState from 'components/EmptyState';

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const favoritesBooks = useFavorites((state) => state.books);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack width='100%' maxW={1080} p={4}>
      <Flex width='100%'>
        <Heading as='h1'>{HeaderDictionary.HeadlingText}</Heading>
        <Spacer />

        <Tooltip label={HeaderDictionary.TooltipFavorite}>
          <Box position='relative'>
            <IconButton
              mx={6}
              aria-label={HeaderDictionary.AriaLabelDrawer}
              onClick={onOpen}
              icon={<AiFillHeart />}
            />
            <Center
              position='absolute'
              top={0}
              right={6}
              backgroundColor='red.200'
              height={4}
              width={4}
              borderRadius='full'
              justifyContent='center'
              alignItems='center'
            >
              <Text fontSize='12px'>{favoritesBooks.length}</Text>
            </Center>
          </Box>
        </Tooltip>

        <Tooltip label={HeaderDictionary.TooltipTheme}>
          <IconButton
            aria-label={HeaderDictionary.AriaLabelTheme}
            onClick={toggleColorMode}
            icon={isDark ? <FaSun /> : <FaMoon />}
          />
        </Tooltip>
      </Flex>

      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            {HeaderDictionary.DrawerTitle}
          </DrawerHeader>
          <DrawerBody>
            {favoritesBooks.length === 0 ? (
              <EmptyState text={EmptyStateTexts.messageEmptyFavotiteList} />
            ) : (
              favoritesBooks.map((book) => <BookCard key={book.id} {...book} />)
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
};

export default Header;
