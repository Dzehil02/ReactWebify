import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleType } from 'entities/Article';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Blue: Story = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({
    articleDetails: {
        data: {
            "id": "1",
            "title": "Javascript news",
            "subtitle": "Что нового в JS за 2022 год?",
            "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
            "views": 1022,
            "createdAt": "26.02.2022",
            "user": {
                id: "1",
                username: "Entoni",
            },
            "type": [ArticleType.IT],
            "blocks": []
        }
    }
})];
