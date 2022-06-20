import {
  Stack,
  Flex,
  Image,
  Text,
  Center,
  IconButton,
  Tag,
  useDisclosure,
  Box,
  Link,
} from '@chakra-ui/react';
import ModalBookDetail from 'components/Modal/ModalBookDetail';
import { useMemo } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Book as BookProps } from 'services/useBook/types';
import { useFavorites } from 'store/useFavorites';

const BookCard = ({ id, volumeInfo, saleInfo }: BookProps) => {
  const favoritesBooks = useFavorites((state) => state.books);
  const handleBookFavorite = useFavorites((state) => state.setBook);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isFavorite = useMemo(
    () => favoritesBooks.find((favBook) => favBook.id === id),
    [favoritesBooks, id]
  );

  const imageSrc = useMemo(
    () =>
      volumeInfo.imageLinks
        ? volumeInfo.imageLinks.thumbnail
        : 'https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg',
    [volumeInfo.imageLinks]
  );

  const bookCategory = useMemo(
    () =>
      !volumeInfo.categories || volumeInfo.categories.length === 0
        ? 'no-category'
        : volumeInfo.categories.toString().toLowerCase(),
    [volumeInfo.categories]
  );

  return (
    <Stack shadow='md' borderWidth='1px' borderRadius='md' minHeight={300}>
      <Flex flexDirection='column'>
        <Box onClick={onOpen} cursor='pointer'>
          <Image
            objectFit='contain'
            marginTop={4}
            width='100%'
            height='150px'
            alt='Imagem do livro'
            src={imageSrc}
          />
          <Center p={4} minHeight='80px'>
            <Text noOfLines={2}>{volumeInfo.title}</Text>
          </Center>
        </Box>
        <Flex flexDirection='row' justifyContent='space-between' px={4}>
          <Tag size='sm' variant='subtle' data-testid='category-tag'>
            {bookCategory}
          </Tag>

          <IconButton
            data-testid='favorite-icon-button'
            onClick={() =>
              handleBookFavorite({
                id,
                volumeInfo,
                saleInfo,
              })
            }
            aria-label='Favorite Icon'
            color={isFavorite ? 'red.200' : 'black.200'}
            icon={<AiFillHeart />}
          />
        </Flex>
      </Flex>

      <ModalBookDetail
        modalTitle='Informações do livro'
        isOpen={isOpen}
        onClose={onClose}
      >
        <Box p={4} display={{ md: 'flex' }}>
          <Box flexShrink={0}>
            <Image
              borderRadius='lg'
              width={{ md: 40 }}
              src={imageSrc}
              alt='Imagem do livro'
            />
            <Text mt={2} color='gray.500'>
              publicado:{' '}
              {new Date(volumeInfo.publishedDate).toLocaleDateString('pt-Br')}
            </Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight='bold'
              textTransform='uppercase'
              fontSize='sm'
              letterSpacing='wide'
              color='teal.600'
            >
              {bookCategory}
            </Text>
            <Link
              mt={1}
              target='_blank'
              display='block'
              fontSize='lg'
              lineHeight='normal'
              fontWeight='semibold'
              href={
                saleInfo.buyLink ||
                'https://play.google.com/store/books/details?id=' + id
              }
            >
              {volumeInfo.title}
            </Link>
            <Text mt={2} color='gray.500'>
              {volumeInfo.description}
            </Text>
          </Box>
        </Box>
      </ModalBookDetail>
    </Stack>
  );
};

export default BookCard;
