import type { Meta, StoryObj } from '@storybook/react';
import { GoBackHomeButton } from './GoBackHomeButton'
import { satisfies } from "@storybook/core-common";

const meta = {
  title: 'components/GoBackHomeButton',
  component: GoBackHomeButton
} satisfies Meta<typeof GoBackHomeButton>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {};