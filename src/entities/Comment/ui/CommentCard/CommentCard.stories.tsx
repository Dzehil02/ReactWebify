import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const normalArgs = {
    comment: {
        id: '1',
        text: 'Text commenta 1',
        user: { id: '1', username: 'Kevin' },
    },
}

export const Light: Story = {
    args: normalArgs
};

export const LightRedesign: Story = {
    args: normalArgs
};
LightRedesign.decorators = [FeaturesFlagsDecorator({isAppRedesigned: true})]

export const Dark: Story = {
    args: normalArgs
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {
    args: normalArgs
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const LoadingLight: Story = {
    args: {
        isLoading: true,
    },
};

export const LoadingDark: Story = {
    args: {
        isLoading: true,
    },
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingBlue: Story = {
    args: {
        isLoading: true,
    },
};
LoadingBlue.decorators = [ThemeDecorator(Theme.BLUE)];
