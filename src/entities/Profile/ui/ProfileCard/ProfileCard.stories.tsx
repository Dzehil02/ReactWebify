import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const primaryArgs = {
    data: {
        first: 'Pit',
        lastname: 'Bred',
        age: 55,
        username: 'BredPit',
        country: Country.Armenia,
        city: 'Florida',
        currency: Currency.USD,
        avatar: avatar,
    },
};

export const Primary: Story = {
    args: primaryArgs
};

export const PrimaryRedesign: Story = {
    args: primaryArgs
};
PrimaryRedesign.decorators = [NewDesignDecorator];

export const Secondary: Story = {
    args: primaryArgs
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryRedesign: Story = {
    args: primaryArgs
};
SecondaryRedesign.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const ThirdReadonly: Story = {
    args: primaryArgs
};
ThirdReadonly.decorators = [ThemeDecorator(Theme.BLUE)];

export const ThirdReadonlyRedesign: Story = {
    args: primaryArgs
};
ThirdReadonlyRedesign.decorators = [NewDesignDecorator, ThemeDecorator(Theme.BLUE)];

export const Error: Story = {
    args: {
        error: 'ProfileError',
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};
