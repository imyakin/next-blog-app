"use client"

import React from 'react';
import { HamburgerMenu, MenuItemProps } from '../HamburgerMenu/HamburgerMenu';
import { Box, Flex, Spacer, Stack } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';
import { Link } from '@/src/components/UI/Link/Link';
import { BellIcon, LinkIcon, StarIcon, AtSignIcon } from "@chakra-ui/icons";
import { routing } from "@/src/constants/routing";

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

  return (
    <Flex padding={5}>
      <Box>
        Logo
      </Box>
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
