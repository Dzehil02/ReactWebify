import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Light: Story = {
    args: {},
};
Light.decorators = [StoreDecorator({})];
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Поставь лайк и оставь комментарий',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Поставь лайк и оставь комментарий 2',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Поставь лайк и оставь комментарий 3',
                },
            ],
        },
    ],
};
