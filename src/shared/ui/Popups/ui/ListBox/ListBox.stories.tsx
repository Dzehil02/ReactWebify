// import type { Meta, StoryObj } from '@storybook/react';

// import {ListBox} from './ListBox';
// import { Theme } from '@/shared/const/theme';
// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

// const meta: Meta<typeof ListBox> = {
//     title: 'shared/Popus/ListBox',
//     component: ListBox,
//     tags: ['autodocs'],
//     argTypes: {
        
//     },
//     decorators: [
//         (Story) => <div style={{padding: 100}}><Story/></div>
//     ]
// };

// export default meta;
// type Story = StoryObj<typeof ListBox>;

// export const Light: Story = {
//     args: {
//         value: 'click me',
//         items: [
//             {
//                 content: 'text text text', value: '123'
//             },
//             {
//                 content: 'text text text 4', value: '1234', disabled: true
//             },
//             {
//                 content: 'text text text 5', value: '12345'
//             },
//         ]
//     }
// };

// export const Dark: Story = {
//     args: {
//         value: 'click me',
//         items: [
//             {
//                 content: 'text text text', value: '123'
//             },
//             {
//                 content: 'text text text 4', value: '1234', disabled: true
//             },
//             {
//                 content: 'text text text 5', value: '12345'
//             },
//         ]   
//     }
// };
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

// export const Blue: Story = {
//     args: {
//         value: 'click me',
//         items: [
//             {
//                 content: 'text text text', value: '123'
//             },
//             {
//                 content: 'text text text 4', value: '1234', disabled: true
//             },
//             {
//                 content: 'text text text 5', value: '12345'
//             },
//         ]   
//     }
// };
// Blue.decorators = [ThemeDecorator(Theme.BLUE)];

// export const TopLeft: Story = {
//     args: {
//         direction: 'top left',
//         value: 'click me',
//         items: [
//             {
//                 content: 'text text text', value: '123'
//             },
//             {
//                 content: 'text text text 4', value: '1234'
//             },
//             {
//                 content: 'text text text 5', value: '12345'
//             },
//         ]
//     }
// };

// export const TopRight: Story = {
//     args: {
//         direction: 'top right',
//         value: 'click me',
//         items: [
//             {
//                 content: 'text text text', value: '123'
//             },
//             {
//                 content: 'text text text 4', value: '1234'
//             },
//             {
//                 content: 'text text text 5', value: '12345'
//             },
//         ]
//     }
// };

// export const BottomLeft: Story = {
//     args: {
//         direction: 'bottom left',
//         value: 'click me',
//         items: [
//             {
//                 content: 'text text text', value: '123'
//             },
//             {
//                 content: 'text text text 4', value: '1234'
//             },
//             {
//                 content: 'text text text 5', value: '12345'
//             },
//         ]
//     }
// };

// export const BottomRight: Story = {
//     args: {
//         direction: 'bottom right',
//         value: 'click me',
//         items: [
//             {
//                 content: 'text text text', value: '123'
//             },
//             {
//                 content: 'text text text 4', value: '1234'
//             },
//             {
//                 content: 'text text text 5', value: '12345'
//             },
//         ]
//     }
// };
