import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Article not found')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <StickyContentLayout
                content={
                    <Page
                        className={classNames(cls.ArticleDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack gap={'16'} max>
                            <DetailsContainer />
                            <ArticleRating articleId={id} />
                            <ArticleRecommendationsList />
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </Page>
                }
                right={<AdditionalInfoContainer />}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
