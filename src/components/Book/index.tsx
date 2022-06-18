import { Stack, Flex, Image, Text } from '@chakra-ui/react';

const Book = () => {
  return (
    <Stack shadow='md' borderWidth='1px' p={4}>
      <Flex flexDirection='column'>
        <Image
          width='100%'
          height='150px'
          alt='Imagem teste'
          src='https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg'
        />
        <Text>Image description</Text>
      </Flex>
    </Stack>
  );
};

export default Book;
