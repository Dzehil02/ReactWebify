import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesPageFilters } from './ArticlesPageFilters';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/ArticlePage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

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

export const Blue: Story = {
    args: {
            
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({})];
