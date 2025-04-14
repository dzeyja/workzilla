import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextAlign, TextTheme, TextWeight } from './Text';

const meta = {
    title: 'Shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// Title

export const Title: Story = {
    args: {
        title: 'Hello world'
    }
};

export const TitlePrimary: Story = {
    args: {
        title: 'Hello world',
        theme: TextTheme.PRIMARY,
    }
};

export const TitleMedium: Story = {
    args: {
        title: 'Hello world',
        theme: TextTheme.PRIMARY,
        weight: TextWeight.MEDIUM
    }
};

export const TitleBold: Story = {
    args: {
        title: 'Hello world',
        theme: TextTheme.PRIMARY,
        weight: TextWeight.BOLD
    }
};

// Title Big

export const TitleBig: Story = {
    args: {
        titleBig: 'Hello world'
    }
}

export const TitleBigPrimary: Story = {
    args: {
        titleBig: 'Hello world',
        theme: TextTheme.PRIMARY,
    }
}

export const TitleBigMeduim: Story = {
    args: {
        titleBig: 'Hello world',
        theme: TextTheme.PRIMARY,
        weight: TextWeight.MEDIUM
    }
}

export const TitleBigBold: Story = {
    args: {
        titleBig: 'Hello world',
        theme: TextTheme.PRIMARY,
        weight: TextWeight.BOLD
    }
}

// Text

export const Textt: Story = {
    args: {
        text: 'Hello world',
    }
}

export const TexttPrimary: Story = {
    args: {
        text: 'Hello world',
        theme: TextTheme.PRIMARY,
    }
}

export const TexttMedium: Story = {
    args: {
        text: 'Hello world',
        weight: TextWeight.MEDIUM
    }
}

export const TexttBold: Story = {
    args: {
        text: 'Hello world',
        weight: TextWeight.BOLD
    }
}

// Small Text

export const smallText: Story = {
    args: {
        smallText: 'Hello world',
    }
}

export const smallTextPrimary: Story = {
    args: {
        theme: TextTheme.PRIMARY,
        smallText: 'Hello world',
    }
}

export const smallTextMedium: Story = {
    args: {
        smallText: 'Hello world',
        weight: TextWeight.MEDIUM
    }
}

export const smallTextBold: Story = {
    args: {
        smallText: 'Hello world',
        weight: TextWeight.BOLD
    }
}



