import type { Meta, StoryObj } from '@storybook/react';

import { ForbiddenPage } from './ForbiddenPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'shared/ForbiddenPage',
    component: ForbiddenPage,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Light: Story = {
    args: {

    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
