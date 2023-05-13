import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise(resolve => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));