import { EmailIcon } from "@chakra-ui/icons";
import { home } from "@/app/constants";
import { Button } from "@chakra-ui/react";

export const ContactButton = () => <Button colorScheme='whatsapp' leftIcon={<EmailIcon/>}>{home.btnContact}</Button>;