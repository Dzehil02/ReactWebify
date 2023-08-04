import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof NotificationItem> = {
    title: 'shared/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Light: Story = {
    args: {

    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
