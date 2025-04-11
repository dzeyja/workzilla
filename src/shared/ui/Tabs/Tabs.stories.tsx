import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { fn } from '@storybook/test'

const meta = {
    title: 'Shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tab: Story = {
    args: {
       tabs: [
            {
                content: 'One',
                value: '1'
            },
            {
                content: 'Two',
                value: '2'
            },
            {
                content: 'Three',
                value: '3'
            },
            {
                content: 'Four',
                value: '4'
            },
       ],
       value: '2',
       onTabClick: fn()
    },
};
