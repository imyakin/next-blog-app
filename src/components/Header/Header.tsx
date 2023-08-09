"use client"

import React from 'react';
import { HamburgerMenu, MenuItemProps } from '../HamburgerMenu/HamburgerMenu';
import { Box, Flex, Spacer, Stack } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { BellIcon, LinkIcon, StarIcon, AtSignIcon } from "@chakra-ui/icons";

export const menuItems = [
  {
    name: 'Home',
    href: '/',
    icon: <AtSignIcon/>
  },
  {
    name: 'About',
    href: '/about',
    icon: <BellIcon/>
  },
  {
    name: 'My Stack',
    href: '/my_stack',
    icon: <StarIcon/>
  },
  {
    name: 'Contacts',
    href: '/contacts',
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
          {session?.data && <Link href="/profile">Profile</Link>}
        </Box>
        <Box>
          <HamburgerMenu menuItems={menuItems as MenuItemProps[]} />
        </Box>
      </Stack>
    </Flex>
  )
};
