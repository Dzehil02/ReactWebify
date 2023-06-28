import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Page> = {
    title: 'widgets/Page',
    component: Page,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Light: Story = {
    args: {

    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
