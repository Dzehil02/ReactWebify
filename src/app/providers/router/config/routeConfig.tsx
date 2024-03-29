import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
    getRouteMain,
    getRouteAbout,
    getRouteProfile,
    getRouteArticles,
    getRouteArticleDetails,
    getRouteArticleCreate,
    getRouteArticleEdit,
    getRouteAdminPanel,
    getRouteForbidden,
    getRouteSettings,
} from '../../../../shared/const/router';
import { RouteObj } from '../../../../shared/types/router';
import { SettingsPage } from '@/pages/SettingsPage';

export const routeConfig: RouteObj[] = [
    {
        path: getRouteMain(),
        element: <MainPage />,
    },
    {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    {
        path: getRouteSettings(),
        element: <SettingsPage />,
    },
    //last
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
