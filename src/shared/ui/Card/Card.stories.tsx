import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {
    args: {
        children: <Text title='title title' text='text text' />
    }
};

export const Dark: Story = {
    args: {
        children: <Text title='title title' text='text text' />
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {
    args: {
        children: <Text title='title title' text='text text' />
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
