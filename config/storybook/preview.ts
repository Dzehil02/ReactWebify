import type { Preview } from "@storybook/react";
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
// import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import {SuspenseDecorator} from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import {Theme} from '../../src/shared/const/theme'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: ['app', Theme.LIGH], color: '#ffffff' },
                { name: 'dark', class: ['app', Theme.DARK], color: '#000000' },
                { name: 'blue', class: ['app', Theme.BLUE], color: '#3b5998' }
            ],
        },
    },
    decorators: [StyleDecorator, /*ThemeDecorator(Theme.LIGH),*/ RouterDecorator, SuspenseDecorator],
};

export default preview;
