import type { Meta, StoryObj } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleType } from '@/entities/Article';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'pages/ArticlePage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Light: Story = {
    args: {

    }
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
