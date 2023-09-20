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

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIconDeprecated,
            text: 'main',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIconDeprecated,
            text: 'about-page',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData?.id),
                Icon: ProfileIconDeprecated,
                text: 'profile-page',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticlesIconDeprecated,
                text: 'articles-page',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
