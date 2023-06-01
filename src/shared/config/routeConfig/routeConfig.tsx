import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteObject } from "react-router-dom"


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

export const routeConfig: RouteObject[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />
    },
    {
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfilePage />
    },
    //last
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />
    },
]
