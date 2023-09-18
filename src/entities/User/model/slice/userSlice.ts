import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { LOCAL_STORAGE_LAST_THEME_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettigs } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, {payload}: PayloadAction<User>) => {
            state.authData = payload;
            setFeatureFlags(payload.features);
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                payload.id,
            );
            localStorage.setItem(
                LOCAL_STORAGE_LAST_THEME_KEY,
                payload.features?.isAppRedesigned ? 'new' : 'old',
            );
        },
        // initialAuthData: (state) => {
        //     const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        //     if (user) {
        //         const jsonUser = JSON.parse(user) as User;
        //         state.authData = jsonUser;
        //         setFeatureFlags(jsonUser.features);
        //     }
        //     state._inited = true;
        // },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, action: PayloadAction<JsonSettigs>) => {
                if (state.authData) {
                    state.authData.jsonSettings = action.payload;
                }
            },
        );
        builder.addCase(
            initAuthData.fulfilled,
            (state, {payload}: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._inited = true;
            },
        );
        builder.addCase(
            initAuthData.rejected,
            (state) => {
                state._inited = true;
            },
        );
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
