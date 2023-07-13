import { UserRole } from "entities/User"
import { AboutPage } from "pages/AboutPage"
import { AdminPanelPage } from "pages/AdminPanelPage"
import { ArticleDetailsPage } from "pages/ArticleDetailsPage"
import { ArticleEditPage } from "pages/ArticleEditPage"
import { ArticlesPage } from "pages/ArticlesPage"
import { ForbiddenPage } from "pages/ForbiddenPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteObject, RouteProps } from "react-router-dom"

// У Улби тут реализован тип AppRoutesProps для авторизованного пользователя, чтобы показывать страницу Профиля

export type AppRoutesProps = RouteObj & {
    authOnly?: boolean;
}

interface RouteObj extends RouteObject {
    authOnly?: boolean;
    roles?: UserRole[];
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    //last
    NOT_FOUND = 'not_found',

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ARTICLE_CREATE]: '/articles/new', 
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',

    //last
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: RouteObj[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />
    },
    {
        path: RoutePath[AppRoutes.PROFILE] + ':id',
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: RoutePath[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: RoutePath[AppRoutes.ARTICLE_DETAILS] + ':id',
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: RoutePath[AppRoutes.ARTICLE_CREATE],
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: RoutePath[AppRoutes.ARTICLE_EDIT],
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: RoutePath[AppRoutes.ADMIN_PANEL],
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    {
        path: RoutePath[AppRoutes.FORBIDDEN],
        element: <ForbiddenPage />,
    },
    //last
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />
    },
]
