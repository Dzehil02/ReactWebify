import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { useTranslation } from 'react-i18next';

import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    console.log('ARTICLE' + article);

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            console.log('!!1111111111111111111111111111111111!!!');
            dispatch(fetchArticleById(id));
        }
    });

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = <Text align="center" title={t('Error Article')} />;
    } else {
        content = <ArticleDetailsRedesigned />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
