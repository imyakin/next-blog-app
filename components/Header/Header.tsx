"use client"

import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { BellIcon, StarIcon, LinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

const menuItems = [
  {
    name: 'About',
    icon: <BellIcon/>
  },
  {
    name: 'My Stack',
    icon: <StarIcon/>
  },
  {
    name: 'Contacts',
    icon: <LinkIcon/>
  },
]

function Header() {
  const session = useSession();
  const handleSignOut = () => {
    signOut({
      callbackUrl: "/"
    })
  }

  return (
    <Flex padding={5}>
      <Box>
        Logo
      </Box>
      <Spacer/>
      <Box>
        {session?.data ? 
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
          )
        }
        {session?.data && <Link href="/profile">Profile</Link>}
      </Box>
      <Box>
      <HamburgerMenu menuItems={menuItems} />
      </Box>
    </Flex>
  )
}

export default Header