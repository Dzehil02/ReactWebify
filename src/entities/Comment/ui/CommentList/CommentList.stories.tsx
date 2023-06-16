import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof CommentList> = {
    title: 'shared/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
    args: {

    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
