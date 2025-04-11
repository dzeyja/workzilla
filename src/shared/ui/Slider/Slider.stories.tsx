import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider'

const meta = {
    title: 'Shared/Slider',
    component: Slider,
    tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
