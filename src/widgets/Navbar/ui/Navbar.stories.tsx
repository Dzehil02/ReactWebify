import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
    // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({})]

export const AuthNavbarLight: Story = {};
AuthNavbarLight.decorators = [StoreDecorator({user: {authData: {}}})]

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbarDark: Story = {};
AuthNavbarDark.decorators = [StoreDecorator({user: {authData: {}}})]
