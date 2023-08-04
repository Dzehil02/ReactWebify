import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
    args: {
        comment: {
            id: "1",
            text: "Text commenta 1",
            user: {id: "1", username: "Kevin"}
        }
    }
};

export const Dark: Story = {
    args: {
        comment: {
            id: "1",
            text: "Text commenta 1",
            user: {id: "1", username: "Kevin"}
        }
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {
    args: {
        comment: {
            id: "1",
            text: "Text commenta 1",
            user: {id: "1", username: "Kevin"}
        }
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const LoadingLight: Story = {
    args: {
        isLoading: true

    }
};

export const LoadingDark: Story = {
    args: {
        isLoading: true

    }
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingBlue: Story = {
    args: {
        isLoading: true

    }
};
LoadingBlue.decorators = [ThemeDecorator(Theme.BLUE)];
