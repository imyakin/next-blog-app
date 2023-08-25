import { Stack, Text, Card as CardChakra, CardBody, Heading, CardFooter, Button, Image } from "@chakra-ui/react";

interface CardProps {
  src?: string;
  title: string;
  duration: string;
  description: string;
}

export const Card = ({ src, title, duration, description }: CardProps) => {
  return (
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
        <CardFooter>
          <Button variant="solid" colorScheme='teal' isDisabled>
            View details
          </Button>
        </CardFooter>
      </Stack>
    </CardChakra>
  );
}