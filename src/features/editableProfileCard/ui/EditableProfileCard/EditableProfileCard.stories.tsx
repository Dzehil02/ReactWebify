import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';


const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Light: Story = {
    args: {
        
    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
