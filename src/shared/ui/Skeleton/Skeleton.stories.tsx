import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'Shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 100
    },
};

export const Border: Story = {
    args: {
        width: '100%',
        height: 200,
        border: '15px'
    },
};

export const Circle: Story = {
    args: {
        width: 200,
        height: 200,
        border: '50%'
    },
};
