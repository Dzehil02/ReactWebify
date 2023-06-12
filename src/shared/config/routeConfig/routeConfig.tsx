import { AboutPage } from "pages/AboutPage"
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
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    //last
    NOT_FOUND = 'not_found',

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',

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
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfilePage />,
        authOnly: true,
    },
    //last
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />
    },
]
