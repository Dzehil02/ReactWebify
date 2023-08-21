import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailsRecommendsSchema } from '../types/ArticleDetailsRecommendsSchema';
import { Article } from '@/entities/Article';
import { fetchArticleRecommends } from '../services/fetchArticleRecommends/fetchArticleRecommends';

const recommendAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommends = recommendAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.recommends ||
        recommendAdapter.getInitialState(),
);

const articleDetailsRecommendsSlice = createSlice({
    name: 'articleDetailsRecommendsSlice',
    initialState:
        recommendAdapter.getInitialState<ArticleDetailsRecommendsSchema>({
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommends.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })

            .addCase(
                fetchArticleRecommends.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendAdapter.setAll(state, action.payload);
                },
            )

            .addCase(fetchArticleRecommends.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendsReducer } =
    articleDetailsRecommendsSlice;
