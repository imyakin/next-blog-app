import {
  List,
  ListItem,
  ListIcon,
  Heading,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

interface ModalContentProps {
  details: {
    title: string;
    duties: Array<string>;
  }[];
}

export const ModalContent = ({details}: ModalContentProps) => {
  return (
    <>
      {
        details.map((job) => {
          return (
            <>
              <Heading size='md' mt={2}>
                {job.title}
              </Heading>
              <List>
                {job.duties.map((duty) => (
                  <ListItem key={duty}>
                    <ListIcon as={MdSettings!} color='teal.500' />
                    {duty}
                  </ListItem>
                ))}
              </List>
            </>
          );
        })
      }
    </>
  )
}