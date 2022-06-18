import { Box, Input } from '@chakra-ui/react';
import { Search } from 'dictionary/home';
import { SearchInputProps } from './types';

const SearchInput = ({ value, handleChange }: SearchInputProps) => {
  return (
    <Box width='400px'>
      <Input
        placeholder={Search.PlaceHolderText}
        _placeholder={{ color: 'gray.500' }}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchInput;
