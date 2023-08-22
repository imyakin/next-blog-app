"use client"

import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Form } from "./components/Form";
import { Box, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { SplitScreen } from "@/src/components/UI/SplitScreen/SplitScreen";
import { contacts } from './constants';
import { SiWechat, SiTelegram, SiGmail } from "react-icons/si";
import Link from "next/link";

const Contacts = () => {
  const [isMobile] = useMediaQuery('(max-width: 479px)');

  return (
    <MainLayout>
      <SplitScreen>
        <Box>
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
        </Box>
        <Stack minWidth={400}>
          <Form/>
        </Stack>
      </SplitScreen>
    </MainLayout>
  )
}

export default Contacts;