"use client"

import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Image } from '@/src/components/UI/Image/Image';
import Avatar from '@/src/assets/images/avatar.jpeg'
import { SplitScreen } from "@/src/components/UI/SplitScreen/SplitScreen";
import { home } from './constants'
import { Box, Text, Stack, Button, useMediaQuery, Divider } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { TfiViewListAlt } from "react-icons/tfi";
import { routing } from "@/src/constants/routing";
import { Link } from '@/src/components/UI/Link/Link';
import { motion } from "framer-motion";

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 479px)')

  return (
    <MainLayout>
      <SplitScreen>
        <Box sx={{minWidth: 300}} display={isMobile ? 'flex' : 'initial'} justifyContent={isMobile ? 'center' : 'initial'}>
          <Image
            src={Avatar}
            alt='avatar'
            width={300}
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 15}}
            transition={{delay: 0.25}}
          />
        </Box>
        <Stack color="teal.500">
          <Text fontSize={isMobile ? "md" : 'xl'}>
            {home.greet}
          </Text>
          <Divider />
          <Text fontSize={isMobile ? "md" : '2xl'} align="center">
            {home.title}
          </Text>
          <Text as="u" fontSize={isMobile ? "md" : '2xl'} align="center" color="teal">
            {home.stack}
          </Text>
          <Text as="b" fontSize={isMobile ? "md" : '2xl'} align="center" color="teal">
            {home.techs}
          </Text>
          <Box display="flex" justifyContent="center">
            <Link href={routing.stack} >
              <motion.div whileHover={{ scale: 1.2 }}>
                <Button colorScheme='teal' leftIcon={<TfiViewListAlt/>}>{home.btnStack}</Button>
              </motion.div>
            </Link>
          </Box>
          <Text fontSize={isMobile ? "md" : 'xl'} align="center">
            {home.text}
          </Text>
          <Text as="b" fontSize={isMobile ? "sm" : 'lg'} align="center">
            {home.endText}
          </Text>
          <Box display="flex" justifyContent="center">
              <Link href={routing.contacts} >
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Button colorScheme='whatsapp' leftIcon={<EmailIcon/>}>{home.btnContact}</Button>
                </motion.div>
              </Link>
          </Box>
        </Stack>
      </SplitScreen>
    </MainLayout>
  )
}
