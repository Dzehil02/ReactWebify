import { Decorator } from "@storybook/react";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { StateSchema } from "@/app/providers/StoreProvider";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "@/entities/Article/testing";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { addCommentFormReducer } from "@/features/addCommentForm/testing";
import { profileReducer } from "@/features/editableProfileCard/testing";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";

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
