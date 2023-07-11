module.exports = (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react';

import { ${componentName} } from './${componentName}';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';


const meta: Meta<typeof ${componentName}> = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Light: Story = {
    args: {
        
    }
};

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
`;
