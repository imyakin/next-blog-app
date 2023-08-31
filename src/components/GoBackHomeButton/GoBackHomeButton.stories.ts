import type { Meta, StoryObj } from '@storybook/react';
import { GoBackHomeButton } from './GoBackHomeButton'

const meta: Meta = {
  title: 'components/GoBackHomeButton',
  component: GoBackHomeButton
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {};