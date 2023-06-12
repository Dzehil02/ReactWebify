import { lazy } from 'react';

export const ArticlesPageLazy = lazy(() => new Promise(resolve => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 1500)
}));