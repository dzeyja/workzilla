import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfilePage } from './ProfilePage';

const meta = {
    title: 'Pages/ProfiePage',
    component: ProfilePage,
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
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        // Здесь можно указать пропсы для компонента Header
    },
};
