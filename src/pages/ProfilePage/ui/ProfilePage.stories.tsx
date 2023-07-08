import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/tests/storybook.jpg'
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            first: "Pit",
            lastname: "Bred",
            age: 55,
            username: "BredPit",
            country: Country.Armenia,
            city: "Florida",
            currency: Currency.USD,
            avatar: avatar
        }
    }
})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: "Pit",
            lastname: "Bred",
            age: 55,
            username: "BredPit",
            country: Country.Armenia,
            city: "Florida",
            currency: Currency.USD,
            avatar: avatar
        }
    }
})];

export const Blue: Story = {};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({
    profile: {
        form: {
            first: "Pit",
            lastname: "Bred",
            age: 55,
            username: "BredPit",
            country: Country.Armenia,
            city: "Florida",
            currency: Currency.USD,
            avatar: avatar
        }
    }
})];
