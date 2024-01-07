"use client"

import React, { JSX } from "react";
import { IconButton, Menu, MenuButton, MenuItem, MenuItemProps as MenuItemPropsChakraProp, MenuList } from "@chakra-ui/react";
import Link from 'next/link';
import { motion } from "framer-motion";
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
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon/>}
          variant='outline'
          data-testid="hamburger-menu"
        />
      </motion.div>
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