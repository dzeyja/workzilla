import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'Widgets/Header',
    component: Header,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator(
            {
                user: {
                    userData: {
                        id: '1',
                        username: 'test_user',
                        role: 'executor',
                        avatar: 'https://example.com/avatar.png',
                    },
                },
            }
        ),
    ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        // Здесь можно указать пропсы для компонента Header
    },
};
