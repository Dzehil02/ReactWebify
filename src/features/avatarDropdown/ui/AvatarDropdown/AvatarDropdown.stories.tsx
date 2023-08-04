import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'shared/AvatarDropdown',
    component: AvatarDropdown,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Light: Story = {
    args: {

    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
