import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {action} from "@storybook/addon-actions"
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = {
    args: {
        onSendComment: action('comment text')
    }
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {
        onSendComment: action('comment text')
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Blue: Story = {
    args: {
        onSendComment: action('comment text')
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({})];
