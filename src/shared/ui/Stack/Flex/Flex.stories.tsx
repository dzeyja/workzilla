import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import { Flex } from './Flex';

const meta = {
    title: 'Shared/Flex',
    component: Flex,
    tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
       children: (
        <>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </>
       ),
    },
};

export const Column: Story = {
    args: {
       children: (
        <>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </>
       ),
       direction: 'column'
    },
};

export const ColumnLeft: Story = {
    args: {
       children: (
        <>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </>
       ),
       direction: 'column',
       align: 'start'
    },
};
