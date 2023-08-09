import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
    args: {
        text: `
        import { Code } from './Code';
        import { Theme } from 'app/providers/ThemeProvider';
        import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
        
        const meta: Meta<typeof Code> = {
            title: 'shared/Code',
            component: Code,
            tags: ['autodocs'],
            argTypes: {
                
            },
        };
        
        export default meta;
        type Story = StoryObj<typeof Code>;
        
        export const Light: Story = {
            args: {
                text: 
            }
        };
        ` 
    }
};

export const Dark: Story = {
    args: {
        text: `
        import { Code } from './Code';
        import { Theme } from 'app/providers/ThemeProvider';
        import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
        
        const meta: Meta<typeof Code> = {
            title: 'shared/Code',
            component: Code,
            tags: ['autodocs'],
            argTypes: {
                
            },
        };
        
        export default meta;
        type Story = StoryObj<typeof Code>;
        
        export const Light: Story = {
            args: {
                text: 
            }
        };
        `  
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Blue: Story = {
    args: {
        text: `
        import { Code } from './Code';
        import { Theme } from 'app/providers/ThemeProvider';
        import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
        
        const meta: Meta<typeof Code> = {
            title: 'shared/Code',
            component: Code,
            tags: ['autodocs'],
            argTypes: {
                
            },
        };
        
        export default meta;
        type Story = StoryObj<typeof Code>;
        
        export const Light: Story = {
            args: {
                text: 
            }
        };
        `  
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE)];
