import type { Meta, StoryObj } from '@storybook/react';

import  { NotFoundPage }  from './NotFoundPage';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
    argTypes: {
    // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
