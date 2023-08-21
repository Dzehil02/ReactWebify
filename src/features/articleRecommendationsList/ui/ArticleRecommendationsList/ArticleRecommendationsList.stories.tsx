import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleType } from '@/entities/Article';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '26.03.2023',
    views: 12,
    user: { id: '1', username: 'Petr' },
    blocks: [],
    type: [ArticleType.SCIENCE, ArticleType.IT],
    title: 'TITLE',
    subtitle: 'subtitle subtitle',
};

export const Light: Story = { args: {} };
Light.decorators = [StoreDecorator({})];
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
                { ...article, id: '4' },
            ],
        },
    ],
};
