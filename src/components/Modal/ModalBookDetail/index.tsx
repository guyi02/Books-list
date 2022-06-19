import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
} from '@chakra-ui/react';
import { ModalBookDetailProps } from './types';

const ModalBookDetail = ({
  modalTitle,
  onClose,
  isOpen,
  children,
}: ModalBookDetailProps) => {
  const [isSmallDevice] = useMediaQuery('(min-width: 600px)');
  return (
    <Modal
      onClose={onClose}
      size={['md', '4xl']}
      isOpen={isOpen}
      isCentered={isSmallDevice}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBookDetail;
