import type { Meta, StoryObj } from "@storybook/react";
import { HamburgerMenu } from './HamburgerMenu';
import { menuItems } from "../Header/Header";

const meta: Meta = {
  title: 'components/HamburgerMenu',
  component: HamburgerMenu,
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    menuItems,
  }
}