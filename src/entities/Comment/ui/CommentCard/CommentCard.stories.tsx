import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof CommentCard> = {
    title: 'shared/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
    args: {

    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
