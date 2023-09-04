'use client'

import { Box, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { contacts } from "@/app/contacts/constants";
import { SiGmail, SiTelegram, SiWechat } from "react-icons/si";
import Link from "next/link";

export const Contacts = () => {
  const [isMobile] = useMediaQuery('(max-width: 479px)');

  return (
    <>
      <Text as="b" fontSize={isMobile ? "md" : '2xl'} color="teal">{contacts.title}</Text>
      <Stack color="teal.500">
        <Box display="flex" alignItems="center">
          <SiTelegram />
          <Text fontSize={isMobile ? "md" : 'xl'} sx={{mr: 2, ml: 1}}>
            {contacts.telegram.title}
          </Text>
          <Link href={contacts.telegram.text} >
            <Text as="u" fontSize={isMobile ? "sm" : 'md'}>{contacts.telegram.text}</Text>
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <SiGmail />
          <Text fontSize={isMobile ? "md" : 'xl'} sx={{mr: 2, ml: 1}}>
            {contacts.mail.title}
          </Text>
          <Text as="u" fontSize={isMobile ? "sm" : 'md'}>{contacts.mail.text}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <SiWechat />
          <Text fontSize={isMobile ? "md" : 'xl'} sx={{mr: 2, ml: 1}}>
            {contacts.wechat.title}
          </Text>
          <Text as="u" fontSize={isMobile ? "sm" : 'md'}>{contacts.wechat.text}</Text>
        </Box>
      </Stack>
    </>
  );
};