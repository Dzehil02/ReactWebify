// import type { Meta, StoryObj } from '@storybook/react';

// import { Theme } from '@/shared/const/theme';
// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { AppLink, AppLinkTheme } from './AppLink';

// const meta: Meta<typeof AppLink> = {
//     title: 'shared/AppLink',
//     component: AppLink,
//     tags: ['autodocs'],
//     argTypes: {
//         // backgroundColor: { control: 'color' },
//     },
//     args: {
//         to: '/',
//     },
// };

// export default meta;
// type Story = StoryObj<typeof AppLink>;

// export const Primary: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.PRIMARY,
//     },
// };

// export const Secondary: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.INVERTED,
//     },
// };

// export const PrimaryDark: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.PRIMARY,
//     },
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const SecondaryDark: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.INVERTED,
//     },
// };
// SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const PrimaryBlue: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.PRIMARY,
//     },
// };
// PrimaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];

// export const SecondaryBlue: Story = {
//     args: {
//         children: 'Text',
//         theme: AppLinkTheme.INVERTED,
//     },
// };
// SecondaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];

// Export нужен чтобы проходила сборка
// eslint-disable-next-line storybook/default-exports
export {};