import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof NotificationList> = {
    title: 'shared/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Light: Story = {
    args: {

    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
