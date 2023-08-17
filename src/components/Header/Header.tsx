"use client"

import React from 'react';
import { HamburgerMenu, MenuItemProps } from '../HamburgerMenu/HamburgerMenu';
import { Box, Flex, Spacer, Stack, IconButton } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';
import { Link } from '@/src/components/UI/Link/Link';
import { BellIcon, LinkIcon, StarIcon, AtSignIcon } from "@chakra-ui/icons";
import { SiLinkedin, SiTelegram } from "react-icons/si";
import { routing } from "@/src/constants/routing";
import { withHoverScale } from "@/src/components/UI/Animation/withHoverScale";

export const menuItems = [
  {
    name: 'Home',
    href: routing.home,
    icon: <AtSignIcon/>
  },
  {
    name: 'About',
    href: routing.about,
    icon: <BellIcon/>
  },
  {
    name: 'My Stack',
    href: routing.stack,
    icon: <StarIcon/>
  },
  {
    name: 'Contacts',
    href: routing.contacts,
    icon: <LinkIcon/>
  },
];


export const Header = () => {
  const session = useSession();
  const handleSignOut = () => {
    signOut({
      callbackUrl: "/"
    })
  }

  const signInOut = session?.data ?
    (
      <Link
        href="#"
        onClick={handleSignOut}
      >
        Sign Out
      </Link>
    ) :
    (
      <Link href="/api/auth/signin">SignIn</Link>
    );

  const LinkedInButton = withHoverScale(() => <IconButton aria-label="linkedin" icon={<SiLinkedin />} />, 1.1);
  const TelegramButton = withHoverScale(() => <IconButton aria-label="telegram" icon={<SiTelegram />} />, 1.1);

  return (
    <Flex padding={5}>
      <Stack direction="row">
        <a href="https://www.linkedin.com/in/alexmiakin/" target="_blank">
          <LinkedInButton />
        </a>
        <a href="https://t.me/imyakin" target="_blank">
          <TelegramButton />
        </a>
      </Stack>
      <Spacer/>
      <Stack direction="row" gap={3} alignItems="center">
        <Box>
          {signInOut}
          {session?.data && <Link href={routing.profile}>Profile</Link>}
        </Box>
        <Box>
          <HamburgerMenu menuItems={menuItems as MenuItemProps[]} />
        </Box>
      </Stack>
    </Flex>
  )
};
