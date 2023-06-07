import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
    argTypes: {
    // backgroundColor: { control: 'color' },
    }
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
    args: {}
};

export const Secondary: Story = {
    args: {}
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
