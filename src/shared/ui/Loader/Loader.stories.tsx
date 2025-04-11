import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import { Loader } from './Loader';

const meta = {
    title: 'Shared/Loader',
    component: Loader,
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};
