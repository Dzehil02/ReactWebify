import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';
import MainIconDeprecated from '@/shared/assets/icons/main.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg';

import MainIconRedesigned from '@/shared/assets/icons/homeNew.svg';
import AboutIconRedesigned from '@/shared/assets/icons/aboutNew.svg';
import ProfileIconRedesigned from '@/shared/assets/icons/profileNew.svg';
import ArticlesIconRedesigned from '@/shared/assets/icons/articlesNew.svg';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIconRedesigned
            }),
            text: 'main',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIconRedesigned
            }),
            text: 'about-page',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData?.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIconRedesigned
                }),
                text: 'profile-page',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticlesIconDeprecated,
                    on: () => ArticlesIconRedesigned
                }),
                text: 'articles-page',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
