import type { Meta, StoryObj } from '@storybook/react';

import  AdminPanelPage  from './AdminPanelPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'shared/AdminPanelPage',
    component: AdminPanelPage,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Light: Story = {
    args: {

    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
