import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Light: Story = {
    args: {

    }
};

export const Dark: Story = {
    args: {
        hasFeedback: true,
        feedbackTitle: 'Feedback Title',
        rate: 3,
        title: 'Title'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
