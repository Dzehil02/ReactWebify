import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsComments } from './ArticleDetailsComments';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Light: Story = {
    args: {
        id: '1'
    }
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {
        id: '1'     
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Blue: Story = {
    args: {
        id: '1'     
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({})];
