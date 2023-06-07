import { CombinedState, Reducer, ReducersMapObject, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { $api } from 'shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { NavigateOptions, To } from 'react-router-dom';


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });
    
    // eslint-disable-next-line
    //@ts-ignore
    store.reducerManager = reducerManager;

    return store; 
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']