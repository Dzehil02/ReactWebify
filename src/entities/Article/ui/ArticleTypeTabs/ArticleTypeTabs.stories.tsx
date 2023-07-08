import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleType } from '../../model/types/article';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Light: Story = {
    args: {
        value: ArticleType.IT
    }
};

export const Dark: Story = {
    args: {
        value: ArticleType.IT     
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {
    args: {
        value: ArticleType.IT
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
