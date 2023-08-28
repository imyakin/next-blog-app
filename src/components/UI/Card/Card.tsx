import {
  Stack,
  Text,
  Card as CardChakra,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Modal } from "@/src/components/UI/Modal/Modal";
import { ModalContent } from "@/src/components/ModalContent/ModalContent";

interface Detail {
  title: string;
  duties: Array<string>;
}

interface CardProps {
  src?: string;
  title: string;
  duration: string;
  description: string;
  details: Detail[];
}

export const Card = ({ src, title, duration, description, details }: CardProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <CardChakra
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        {src && (
          <Image
            maxW={{ base: "100%", sm: "200px", xl: '400px' }}
            src={src}
            alt="Company logo"
            sx={{mt:4}}
          />
        )}
        <Stack>
          <CardBody>
            <Heading size='md'>{title}</Heading>
            <Text as="b" py='1'>
              {duration}
            </Text>
            <Text py='2'>
              {description}
            </Text>
          </CardBody>
          {!!details?.length &&
            (<CardFooter>
              <Button variant="solid" colorScheme="teal" onClick={onOpen}>
                View details
              </Button>
            </CardFooter>)
          }
        </Stack>
      </CardChakra>
      <Modal isOpen={isOpen} onClose={onClose} size="lg" >
        <ModalContent details={details} />
      </Modal>
    </>
  );
}