import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { fn } from '@storybook/test'

const meta = {
    title: 'Shared/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        options: [
            {
                content: 'One',
                value: '1'
            },
            {
                content: 'Two',
                value: '2'
            },
            {
                content: 'Thre',
                value: '3'
            },
            {
                content: 'Four',
                value: '4'
            },
        ],
        value: '2',
        onChange: fn(),
        label: 'hello'
    },
};
