import { ReactElement } from 'react';

export type ModalBookDetailProps = {
  modalTitle: string;
  children: ReactElement | ReactElement[];
  onClose: () => void;
  isOpen: boolean;
};
