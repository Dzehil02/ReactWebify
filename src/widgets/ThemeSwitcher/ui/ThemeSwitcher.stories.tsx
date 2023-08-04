import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {
    // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
