import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../../model/types/currency';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: {
        value: Currency.BYN,
    },
};

export const Secondary: Story = {
    args: {
        value: Currency.BYN,
    },
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];

export const Third: Story = {
    args: {
        value: Currency.BYN,
    },
};
Third.decorators = [ThemeDecorator(Theme.BLUE)];
