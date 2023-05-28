"use client"

import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { BellIcon, StarIcon, LinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react';

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
  return (
    <Flex padding={5}>
      <Box>
        Logo
      </Box>
      <Spacer/>
      <Box>
      <HamburgerMenu menuItems={menuItems} />
      </Box>
    </Flex>
  )
}

export default Header