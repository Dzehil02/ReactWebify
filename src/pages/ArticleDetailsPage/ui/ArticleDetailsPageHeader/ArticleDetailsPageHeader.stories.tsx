import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'shared/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Light: Story = {
    args: {
        
    }
};
Light.decorators=[StoreDecorator({
    articleDetails: {
        data: {
            id: '1',
            user: {
                id: '1'
            }
        },
    },
    user: {
        authData: {
            id: '1'
        }
    }
})]

export const Dark: Story = {
    args: {
            
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
        data: {
            id: '1',
            user: {
                id: '1'
            }
        },
    },
    user: {
        authData: {
            id: '1'
        }
    }
})];

export const Blue: Story = {
    args: {
            
    }
};
Blue.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({
    articleDetails: {
        data: {
            id: '1',
            user: {
                id: '1'
            }
        },
    },
    user: {
        authData: {
            id: '1'
        }
    }
})];

export const BlueNotAuth: Story = {
    args: {
            
    }
};
BlueNotAuth.decorators = [ThemeDecorator(Theme.BLUE), StoreDecorator({
    articleDetails: {
        data: {
            id: '1',
            user: {
                id: '1'
            }
        },
    }
})];
