import {
  Stack,
  Flex,
  Image,
  Text,
  Center,
  IconButton,
  Tag,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Book as BookProps } from 'services/useBook/types';
import { useFavorites } from 'store/useFavorites';

const BookCard = ({ id, volumeInfo, saleInfo }: BookProps) => {
  const favoritesBooks = useFavorites((state) => state.books);
  const handleBookFavorite = useFavorites((state) => state.setBook);

  const isFavorite = useMemo(
    () => favoritesBooks.find((favBook) => favBook.id === id),
    [favoritesBooks, id]
  );
  return (
    <Stack shadow='md' borderWidth='1px' borderRadius='md' minHeight={300}>
      <Flex flexDirection='column'>
        <Image
          objectFit='contain'
          marginTop={4}
          width='100%'
          height='150px'
          alt='Imagem teste'
          src={
            volumeInfo.imageLinks
              ? volumeInfo.imageLinks.thumbnail
              : 'https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg'
          }
        />
        <Center p={4} minHeight='80px'>
          <Text noOfLines={2}>{volumeInfo.title}</Text>
        </Center>
        <Flex flexDirection='row' justifyContent='space-between' px={4}>
          <Tag size='sm' variant='subtle'>
            {volumeInfo.categories
              ? volumeInfo.categories.toString().toLowerCase()
              : 'no-category'}
          </Tag>

          <IconButton
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
    </Stack>
  );
};

export default BookCard;
