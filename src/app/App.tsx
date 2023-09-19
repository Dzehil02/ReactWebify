import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppToolbar } from './lib/useAppToolbar';

const App = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<PageLoader />}
                on={
                    <div
                        id="app_redesigned"
                        className={classNames('app_redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />
                    </div>
                }
            />
        );
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            off={
                <div id='app' className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {<AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div id='app_redesigned' className={classNames('app_redesigned', {}, [theme])}>
                    <Suspense fallback="">
                    <MainLayout
                        header={<Navbar />}
                        content={<AppRouter />}
                        sidebar={<Sidebar />}
                        toolbar={toolbar}
                    />
                    </Suspense>
                </div>
            }
        />
    );
};

export default App;
