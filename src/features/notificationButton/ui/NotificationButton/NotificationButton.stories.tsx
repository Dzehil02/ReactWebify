import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Light: Story = {
    args: {

    }
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
                {
                    id: '4',
                    title: 'Уведомление 4',
                    description: 'Поставь лайк и оставь комментарий 4',
                },
            ],
        },
    ]
}
