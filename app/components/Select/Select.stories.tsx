import type { Meta, StoryObj } from '@storybook/react'

import { Select, SelectItem } from './'

const meta: Meta<typeof Select> = {
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
  args: {
    label: 'Region select',
    children: [
      <SelectItem key="1">Option 1</SelectItem>,
      <SelectItem key="2">Option 2</SelectItem>,
      <SelectItem key="3">Option 3</SelectItem>,
    ],
  },
}
