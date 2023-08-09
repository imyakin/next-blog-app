"use client"

import React, { JSX } from "react";
import { IconButton, Menu, MenuButton, MenuItem, MenuItemProps as MenuItemPropsChakraProp, MenuList } from "@chakra-ui/react";
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';

export interface MenuItemProps extends MenuItemPropsChakraProp {
  icon:  JSX.Element;
  name: string;
  href: string;
}

interface HamburgerMenuProps {
    menuItems: MenuItemProps[]
}

export const HamburgerMenu = ({menuItems}: HamburgerMenuProps) => {
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
              <Link key={item.name} href={item.href} >
                <MenuItem icon={item.icon}>
                    {item.name}
                </MenuItem>
              </Link>
            ))}
        </MenuList>
    </Menu>
  )
}