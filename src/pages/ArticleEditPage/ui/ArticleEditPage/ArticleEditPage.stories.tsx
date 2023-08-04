import type { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const LightNewArticle: Story = {
    args: {

    }
};
LightNewArticle.decorators = [StoreDecorator({})];

export const DarkNewArticle: Story = {
    args: {
            
    }
};
DarkNewArticle.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const BlueNewArticle: Story = {
    args: {
            
    }
};
BlueNewArticle.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({})];
