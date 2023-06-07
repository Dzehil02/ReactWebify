import { Suspense, memo } from 'react';
import { useRoutes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const AppRouter = () => {
    const elements = useRoutes(routeConfig);
    // У Улби тут логика для routes. Логика фильтрует страницы для авторизованного пользователя (41 урок, 1:10:00)
    return (
        <Suspense fallback={<PageLoader/>}>
            <div className='page-wrapper'>
                {elements}
            </div>
        </Suspense>
    );
};

export default memo(AppRouter);