import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    let elements = useRoutes(routeConfig);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='page-wrapper'>
                {elements}
            </div>
        </Suspense>
    );
};

export default AppRouter;