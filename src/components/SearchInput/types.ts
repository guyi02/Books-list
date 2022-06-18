import { ChangeEvent } from 'react';

export type SearchInputProps = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
