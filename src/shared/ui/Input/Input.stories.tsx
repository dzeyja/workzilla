import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'Shared/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        placeholder: 'Введите имя'
    },
};

export const WithValue: Story = {
    args: {
        placeholder: 'Введите имя',
        value: 'Hello world!!'
    },
};

export const WithLayout: Story = {
    args: {
        placeholder: 'Введите имя',
        value: 'Hello world!!',
        layout: 'Введите имя'
    },
};

