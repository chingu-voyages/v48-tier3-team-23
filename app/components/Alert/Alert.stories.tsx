// storybook stories for Alert component

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Terminal } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert
      title="Heads Up!"
      description="   You can add components to your app using the cli."
      Icon={<Terminal className="h-4 w-4" />}
    />
  ),
};

export const Descructive: Story = {
  render: () => (
    <Alert
      title="Heads Up!"
      description="   You can add components to your app using the cli."
      Icon={<Terminal className="h-4 w-4" />}
      variant="destructive"
    />
  ),
};

export const TailwindExample: Story = {
  render: () => (
    <Alert
      title="Heads Up!"
      description="You can add components to your app using the cli."
      Icon={<Terminal className="h-4 w-4" />}
      variant="destructive"
      className="bg-red-100"
    />
  ),
};
