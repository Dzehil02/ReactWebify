import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from '@/shared/assets/tests/storybook.jpg'

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
AuthNavbarLight.decorators = [StoreDecorator({user: {authData: {avatar: avatar}}})]

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbarDark: Story = {};
AuthNavbarDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({user: {authData: {avatar: avatar}}})]

export const Blue: Story = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({})];

export const AuthNavbarBlue: Story = {};
AuthNavbarBlue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({user: {authData: {avatar: avatar}}})]
