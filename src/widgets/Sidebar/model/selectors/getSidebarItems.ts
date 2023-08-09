import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/const/router";
import { SidebarItemType } from "../types/sidebar";
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';


export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'main'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'about-page'
            },

        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData?.id,
                    Icon: ProfileIcon,
                    text: 'profile-page',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'articles-page',
                    authOnly: true,
                },
            )

        }
        
        return sidebarItemsList;
    }
)