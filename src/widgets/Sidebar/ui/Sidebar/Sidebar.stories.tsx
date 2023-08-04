import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
    // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({
    user: {authData: {}}
})]

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {authData: {}}
})];

export const Blue: Story = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({
    user: {authData: {}}
})];

export const NoAuthLight: Story = {};
NoAuthLight.decorators = [StoreDecorator({
    user: {}
})]

export const NoAuthDark: Story = {};
NoAuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {}
})]

export const NoAuthBlue: Story = {};
NoAuthBlue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({
    user: {}
})]