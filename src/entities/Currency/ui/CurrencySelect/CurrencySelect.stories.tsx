import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
    argTypes: {
    // backgroundColor: { control: 'color' },
    }
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: {}
};

export const Secondary: Story = {
    args: {}
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)]
