import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from 'shared/ui/Stack';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const {className, id} = props;
    const { t } = useTranslation()
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch])

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(id))
        }
    });

    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            <Text 
                size={TextSize.L} 
                title={t('Comments')} 
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList 
                isLoading={commentsIsLoading} 
                comments={comments} 
            />
        </VStack>
    );
})