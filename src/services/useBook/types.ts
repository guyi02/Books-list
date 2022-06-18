type ImagesLink = {
  smallThumbnail: string;
  thumbnail: string;
};

type VolumeInfo = {
  title: string;
  authors: string[];
  categories: string[];
  description: string;
  imageLinks?: ImagesLink;
  language: string;
  publishedDate: string;
};

type SalesInfo = {
  buyLink: string;
};

export type Book = {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo: SalesInfo;
};

export type BooksListResponse = {
  items: Book[];
};
