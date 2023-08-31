import type { Meta, StoryObj } from "@storybook/react";
import { ContactButton } from './ContactButton';

const meta: Meta = {
  title: 'components/ContactButton',
  component: ContactButton,
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default:Story = {};