import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
    // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {

    },
};
Primary.decorators = [StoreDecorator({
    loginForm: {username: 'root', password: 'root'}
})]

export const Secondary: Story = {
    args: {

    },
};
Secondary.decorators = [StoreDecorator({
    loginForm: {username: 'root', password: 'root'}
}), ThemeDecorator(Theme.DARK)]

export const Error: Story = {
    args: {

    },
};
Error.decorators = [StoreDecorator({
    loginForm: {username: 'root', password: 'root', error: 'TEXT ERROR TEXT'}
})]

export const IsLoading: Story = {
    args: {

    },
};
IsLoading.decorators = [StoreDecorator({
    loginForm: {username: 'root', password: 'root', isLoading: true}
})]
