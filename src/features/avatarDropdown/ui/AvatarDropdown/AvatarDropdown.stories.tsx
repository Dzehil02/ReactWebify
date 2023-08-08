import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Light: Story = {
    args: {
        className: 'margin-left: auto'
    }
};
Light.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            roles: [UserRole.ADMIN],
            username: 'adminovich',
            avatar: "https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg"
        }
    }
})];
