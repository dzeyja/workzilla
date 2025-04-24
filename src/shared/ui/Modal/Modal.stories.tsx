import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import { Modal } from './Modal';

const meta = {
    title: 'Shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        isOpen: true,
        onClose: fn(),
        children: (
                <div>
                    Modal Content
                    <div>HEllo</div>
                    <div>HEllo</div>
                    <div>HEllo</div>
                    <div>HEllo</div>
                    <div>HEllo</div>
                </div>
        ),
    },
};
