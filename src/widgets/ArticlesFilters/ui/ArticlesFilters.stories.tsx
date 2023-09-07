import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesFilters } from './ArticlesFilters';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof ArticlesFilters> = {
    title: 'shared/ArticlesFilters',
    component: ArticlesFilters,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
