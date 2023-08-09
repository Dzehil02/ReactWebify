/* eslint-disable webify-plugin/public-api-imports */
import { Decorator } from "@storybook/react";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { StateSchema } from "@/app/providers/StoreProvider";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { addCommentFormReducer } from "@/features/addCommentForm/model/slice/addCommentFormSlice";
import { profileReducer } from "@/features/editableProfileCard/model/slice/profileSlice";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slices";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: ReducersList
    ): Decorator =>
        (Story) =>
            <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
                <Story />
            </StoreProvider>;
