import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { 
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { 
    addCommentForArticle
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Page } from 'widgets/Page/Page';
import {
    getArticleRecommends
} from '../../model/slices/articleDetailsRecommendsSlice';
import { getArticleRecommendsIsLoading } from '../../model/selectors/recommends';
import { fetchArticleRecommends } from '../../model/services/fetchArticleRecommends/fetchArticleRecommends';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({className}) => {
    const { t } = useTranslation('article-details')
    const {id} = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommends = useSelector(getArticleRecommends.selectAll);
    const recommendsIsLoading = useSelector(getArticleRecommendsIsLoading);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);


    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch])

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(id))
            dispatch(fetchArticleRecommends())
        }
    });

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text size={TextSize.L} className={cls.commentTitle} title={t('Recommendations')} />
                    <ArticleList
                        articles={recommends}
                        isLoading={recommendsIsLoading}
                        className={cls.reccomends}
                        target="_blank"
                    />
                    <Text size={TextSize.L} className={cls.commentTitle} title={t('Comments')} />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList isLoading={commentsIsLoading} comments={comments} />
                </VStack>
            </Page> 
        </DynamicModuleLoader>

    );
}

export default memo(ArticleDetailsPage);