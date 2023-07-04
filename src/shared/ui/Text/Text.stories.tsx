import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
    // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text'
    },
};

export const Error: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title Title Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text Text Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text'
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title Title Title',
    },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark: Story = {
    args: {
        text: 'Text Text Text',
    },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeS: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        size: TextSize.S,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        size: TextSize.M,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        size: TextSize.L,
    },
};
