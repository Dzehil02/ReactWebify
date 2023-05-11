import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteObject, RouteProps } from "react-router-dom"


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: RouteObject[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />
    }
]
