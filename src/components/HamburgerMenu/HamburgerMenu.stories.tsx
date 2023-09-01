import type { Meta, StoryObj } from "@storybook/react";
import { HamburgerMenu, MenuItemProps } from './HamburgerMenu';
import { menuItems } from "../Header/Header";

const meta: Meta<typeof HamburgerMenu> = {
  title: 'components/HamburgerMenu',
  component: HamburgerMenu,
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>

export const Default: Story = {
 args: {
   menuItems: menuItems as MenuItemProps[],
 }
}