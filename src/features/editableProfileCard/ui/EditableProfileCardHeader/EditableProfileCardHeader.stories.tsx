import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/EditableProfileCard/editableProfileCardHeader',
    component: EditableProfileCardHeader,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Light: Story = {
    args: {},
};
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
        profile: {
            data: {
                id: '1',
            },
        },
    }),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Blue: Story = {
    args: {},
};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({})];
