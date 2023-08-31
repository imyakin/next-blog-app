import type { Meta, StoryObj } from "@storybook/react";
import { ViewAllStackButton } from './ViewAllStackButton';

const meta: Meta = {
  title: 'components/ViewAllStackButton',
  component: ViewAllStackButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
