import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Text commenta 1',
                user: { id: '1', username: 'Kevin' },
            },
            {
                id: '2',
                text: 'Text commenta 2',
                user: { id: '2', username: 'Tom' },
            },
        ],
    },
};

export const Dark: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Text commenta 1',
                user: { id: '1', username: 'Kevin' },
            },
            {
                id: '2',
                text: 'Text commenta 2',
                user: { id: '2', username: 'Tom' },
            },
        ],
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Text commenta 1',
                user: { id: '1', username: 'Kevin' },
            },
            {
                id: '2',
                text: 'Text commenta 2',
                user: { id: '2', username: 'Tom' },
            },
        ],
    },
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const LoadingLight: Story = {
    args: {
        isLoading: true,
        comments: [],
    },
};

export const LoadingDark: Story = {
    args: {
        isLoading: true,
        comments: [],
    },
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingBlue: Story = {
    args: {
        isLoading: true,
        comments: [],
    },
};
LoadingBlue.decorators = [ThemeDecorator(Theme.BLUE)];
