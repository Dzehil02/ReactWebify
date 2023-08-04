import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import withMock from 'storybook-addon-mock'

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
    argTypes: {
        
    },
    decorators: [withMock]
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 12,
    user: {id: '1', username: 'Petr'},
    blocks: [],
    type: [],
    title: 'TITLE',
    subtitle: 'subtitle'
}

export const Light: Story = {args: {}};
Light.decorators = [StoreDecorator({})]
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                {...article, id: '1'},
                {...article, id: '2'},
                {...article, id: '3'},
            ],
        },
    ],
};
