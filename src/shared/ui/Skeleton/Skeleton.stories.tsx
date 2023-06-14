import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
    args: {
        width: '100%',
        height: 200
    }
};

export const Dark: Story = {
    args: {
        width: '100%',
        height: 200
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {
    args: {
        width: '100%',
        height: 200
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];

export const CircleLight: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
};

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleBlue: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
};
CircleBlue.decorators = [ThemeDecorator(Theme.BLUE)];
