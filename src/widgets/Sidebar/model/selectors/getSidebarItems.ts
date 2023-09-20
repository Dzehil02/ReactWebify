import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';

import MainIconRedesigned from '@/shared/assets/icons/homeNew.svg';
import AboutIconRedesigned from '@/shared/assets/icons/aboutNew.svg';
import ProfileIconRedesigned from '@/shared/assets/icons/profileNew.svg';
import ArticlesIconRedesigned from '@/shared/assets/icons/articlesNew.svg';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIconRedesigned,
            text: 'main',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIconRedesigned,
            text: 'about-page',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData?.id),
                Icon: ProfileIconRedesigned,
                text: 'profile-page',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticlesIconRedesigned,
                text: 'articles-page',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
