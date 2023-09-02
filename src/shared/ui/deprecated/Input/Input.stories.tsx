import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Enter text',
        value: 'Text Text Text',
    },
};

export const Secondary: Story = {
    args: {
        placeholder: 'Enter text',
        value: 'Text Text Text',
    },
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];

export const Third: Story = {
    args: {
        placeholder: 'Enter text',
        value: 'Text Text Text',
    },
};
Third.decorators = [ThemeDecorator(Theme.BLUE)];

export const PrimaryReadonly: Story = {
    args: {
        placeholder: 'Enter text',
        value: 'Text Text Text',
        readonly: true,
    },
};

export const SecondaryReadonly: Story = {
    args: {
        placeholder: 'Enter text',
        value: 'Text Text Text',
        readonly: true,
    },
};
SecondaryReadonly.decorators = [ThemeDecorator(Theme.DARK)];

export const ThirdReadonly: Story = {
    args: {
        placeholder: 'Enter text',
        value: 'Text Text Text',
        readonly: true,
    },
};
ThirdReadonly.decorators = [ThemeDecorator(Theme.BLUE)];
