Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
    // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text'
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text'
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryBlue: Story = {
    args: {
        children: 'Text'
    },
};
PrimaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearBlue: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};
ClearBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const ClearInvertedDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInvertedBlue: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};
ClearInvertedBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const OutlineSizeM: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    },
};

export const OutlineDarkSizeM: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineDarkSizeM.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    },
};
OutlineDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    },
};
OutlineDarkSizeXL.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineBlueSizeM: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineBlueSizeM.decorators = [ThemeDecorator(Theme.BLUE)];

export const OutlineBlueSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    },
};
OutlineBlueSizeL.decorators = [ThemeDecorator(Theme.BLUE)];

export const OutlineBlueSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    },
};
OutlineBlueSizeXL.decorators = [ThemeDecorator(Theme.BLUE)];

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundThemeDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};
BackgroundThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundThemeBlue: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};
BackgroundThemeBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const BackgroundInvertedDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedBlue: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
BackgroundInvertedBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const SquareDarkSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
SquareDarkSizeM.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareDarkSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
SquareDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareDarkSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
SquareDarkSizeXL.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareBlueSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
SquareBlueSizeM.decorators = [ThemeDecorator(Theme.BLUE)];

export const SquareBlueSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
SquareBlueSizeL.decorators = [ThemeDecorator(Theme.BLUE)];

export const SquareBlueSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
SquareBlueSizeXL.decorators = [ThemeDecorator(Theme.BLUE)];

export const Disabled: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};

export const DisabledDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DisabledBlue: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
DisabledBlue.decorators = [ThemeDecorator(Theme.BLUE)];

```