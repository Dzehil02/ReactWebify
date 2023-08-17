import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

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

export const Primary: Story = {
    args: {
        data: {
            first: "Pit",
            lastname: "Bred",
            age: 55,
            username: "BredPit",
            country: Country.Armenia,
            city: "Florida",
            currency: Currency.USD,
            avatar: avatar
        }
    },
};

export const Secondary: Story = {
    args: {
        data: {
            first: "Pit",
            lastname: "Bred",
            age: 55,
            username: "BredPit",
            country: Country.Armenia,
            city: "Florida",
            currency: Currency.USD,
            avatar: avatar
        }
    },
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)]

export const ThirdReadonly: Story = {
    args: {
        data: {
            first: "Pit",
            lastname: "Bred",
            age: 55,
            username: "BredPit",
            country: Country.Armenia,
            city: "Florida",
            currency: Currency.USD,
            avatar: avatar
        },
        readonly: true
    },
};
ThirdReadonly.decorators = [ThemeDecorator(Theme.BLUE)]

export const Error: Story = {
    args: {
        error: "ProfileError"
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true
    },
};
