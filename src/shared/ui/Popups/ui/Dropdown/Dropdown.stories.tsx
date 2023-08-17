import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from '../../../Button/Button';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Popus/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Light: Story = {
    args: {
        trigger: <Button>Open menu</Button>,
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            },
        ]
    }
};

export const Dark: Story = {
    args: {
        trigger: <Button>Open menu</Button>,
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            },
        ]    
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {
    args: {
        trigger: <Button>Open menu</Button>,
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            },
        ]    
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
