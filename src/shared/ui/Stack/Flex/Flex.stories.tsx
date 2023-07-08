import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
    argTypes: {
        
    },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )
    }
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )
    }
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )
    }
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )
    }
};

export const RowGap32: Story = {
    args: {
        direction: 'row',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )
    }
};

export const RowGap32Dark: Story = {
    args: {
        direction: 'row',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )
    }
};
RowGap32Dark.decorators=[ThemeDecorator(Theme.DARK)]

export const RowGap32Blue: Story = {
    args: {
        direction: 'row',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )
    }
};
RowGap32Blue.decorators=[ThemeDecorator(Theme.BLUE)]

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )   
    }
};

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: '4',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )   
    }
};

export const ColumnGap8: Story = {
    args: {
        direction: 'column',
        gap: '8',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )   
    }
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )   
    }
};

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )   
    }
};

export const ColumnGap32Dark: Story = {
    args: {
        direction: 'column',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )   
    }
};
ColumnGap32Dark.decorators=[ThemeDecorator(Theme.DARK)]

export const ColumnGap32Blue: Story = {
    args: {
        direction: 'column',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        )   
    }
};
ColumnGap32Blue.decorators=[ThemeDecorator(Theme.BLUE)]
