"use client"

import React from 'react'
import { MenuItemProps } from '@chakra-ui/react';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

interface HamburgerMenuProps {
    menuItems: MenuItemProps[]
}

function HamburgerMenu({menuItems}: HamburgerMenuProps) {
  return (
    <Menu>
        <MenuButton
         as={IconButton}
         aria-label='Options'
         icon={<HamburgerIcon/>}
         variant='outline'
        />
        <MenuList>
            {menuItems.map(item => (
                <MenuItem icon={item.icon} key={item.name}>
                    {item.name}
                </MenuItem>
            ))}
        </MenuList>
    </Menu>
  )
}

export default HamburgerMenu