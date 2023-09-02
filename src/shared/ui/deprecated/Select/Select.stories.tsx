import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Текст лейбла',
        options: [
            { value: '1', content: 'First' },
            { value: '2', content: 'Second' },
            { value: '3', content: 'Third' },
        ],
    },
};

export const Secondary: Story = {
    args: {
        label: 'Текст лейбла',
        options: [
            { value: '1', content: 'First' },
            { value: '2', content: 'Second' },
            { value: '3', content: 'Third' },
        ],
    },
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];

export const Third: Story = {
    args: {
        label: 'Текст лейбла',
        options: [
            { value: '1', content: 'First' },
            { value: '2', content: 'Second' },
            { value: '3', content: 'Third' },
        ],
    },
};
Third.decorators = [ThemeDecorator(Theme.BLUE)];
