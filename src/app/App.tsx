import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppToolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

const App = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <div
                id="app_redesigned"
                className={classNames('app_redesigned', {}, [theme])}
            >
                <AppLoaderLayout />
            </div>
        );
    }

    return (
        <div
            id="app_redesigned"
            className={classNames('app_redesigned', {}, [theme])}
        >
            <Suspense fallback="">
                <MainLayout
                    header={<Navbar />}
                    content={<AppRouter />}
                    sidebar={<Sidebar />}
                    toolbar={toolbar}
                />
            </Suspense>
        </div>
    );
});

export default withTheme(App);
