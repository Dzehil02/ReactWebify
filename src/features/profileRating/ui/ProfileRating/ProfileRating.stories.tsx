import type { Meta, StoryObj } from '@storybook/react';

import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfileRating> = {
    title: 'features/ProfileRating',
    component: ProfileRating,
    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Light: Story = {
    args: {
        profileId: '1'
    }
};
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1'
            }
        }
    })
]
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                }
            ],
        },
    ],
}

export const WithoutRate: Story = {
    args: {
        profileId: '1'
    }
};
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1'
            }
        }
    })
]
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
}
