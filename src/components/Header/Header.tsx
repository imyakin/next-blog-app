"use client"

import React from 'react';
import { HamburgerMenu, MenuItemProps } from '../HamburgerMenu/HamburgerMenu';
import { Box, Flex, Spacer, Stack, IconButton } from '@chakra-ui/react';
// import { useSession, signOut } from 'next-auth/react';
import { SiLinkedin, SiTelegram, SiGooglehome, SiGithub, SiStackoverflow, SiGooglemessages } from "react-icons/si";
import { routing } from "../../constants/routing";
import { withHoverScale } from "../../components/UI/Animation/withHoverScale";

export const menuItems = [
  {
    name: 'Home',
    href: routing.home,
    icon: <SiGooglehome />
  },
  {
    name: 'Experience',
    href: routing.experience,
    icon: <SiGithub />
  },
  {
    name: 'My Stack',
    href: routing.stack,
    icon: <SiStackoverflow />
  },
  {
    name: 'Contacts',
    href: routing.contacts,
    icon: <SiGooglemessages />
  },
];


export const Header = () => {
  // const session = useSession();
  // const handleSignOut = () => {
  //   signOut({
  //     callbackUrl: "/"
  //   })
  // }

  // const signInOut = session?.data ?
  //   (
  //     <Link
  //       href="#"
  //       onClick={handleSignOut}
  //     >
  //       Sign Out
  //     </Link>
  //   ) :
  //   (
  //     <Link href="/api/auth/signin">SignIn</Link>
  //   );

  const LinkedInButton = withHoverScale(() => <IconButton aria-label="linkedin" icon={<SiLinkedin />} />, 1.1);
  const TelegramButton = withHoverScale(() => <IconButton aria-label="telegram" icon={<SiTelegram />} />, 1.1);
  const GitHubButton = withHoverScale(() => <IconButton aria-label="telegram" icon={<SiGithub />} />, 1.1);

  return (
    <Flex padding={5}>
      <Stack direction="row">
        <a href="https://www.linkedin.com/in/alexmiakin/" target="_blank">
          <LinkedInButton />
        </a>
        <a href="https://t.me/imyakin" target="_blank">
          <TelegramButton />
        </a>
        <a href="https://github.com/imyakin" target="_blank">
          <GitHubButton />
        </a>
      </Stack>
      <Spacer/>
      <Stack direction="row" gap={3} alignItems="center">
        {/*ToDo: add functionality when user sign in*/}
        {/*<Box>*/}
        {/*  {signInOut}*/}
        {/*  {session?.data && <Link href={routing.profile}>Profile</Link>}*/}
        {/*</Box>*/}
        <Box>
          <HamburgerMenu menuItems={menuItems as MenuItemProps[]} />
        </Box>
      </Stack>
    </Flex>
  )
};
