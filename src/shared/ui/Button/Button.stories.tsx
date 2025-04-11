import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
    title: 'Shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: 'Hello world',
        size: ButtonSize.M
    },
};

export const Normal: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Hello world',
        size: ButtonSize.XL
    },
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Hello world',
        size: ButtonSize.XL
    },
};

export const OutlinedWhite: Story = {
    args: {
        theme: ButtonTheme.OUTLINED_WHITE,
        children: 'Hello world',
        size: ButtonSize.XL
    },
};

