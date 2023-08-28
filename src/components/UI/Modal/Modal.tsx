import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, ModalProps as ModalChakraProps
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ModalProps extends ModalChakraProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({isOpen, onClose, children, ...rest}: ModalProps) => {
  return (
    <>
      <ModalChakra isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt={6}>
            {children}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='teal' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    </>
  );
};
