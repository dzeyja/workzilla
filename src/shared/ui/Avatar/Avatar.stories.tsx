import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
    title: 'Shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        src: '/icons/profile.png',
        size: 200,
        borderR: '50%'
    },
};
