import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CountrySelect } from './CountrySelect';
import { Country } from '../../model/types/country';

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
    args: {
        value: Country.Belarus, 
    }
};

export const Secondary: Story = {
    args: {
        value: Country.Belarus, 
    }
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)]

export const Third: Story = {
    args: {
        value: Country.Belarus, 
    }
};
Third.decorators = [ThemeDecorator(Theme.BLUE)]
