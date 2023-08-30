import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures, getFeatureFlags } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled')

    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Article not found')}
            </Page>
        );
    }

    // const articleRatingCard = toggleFeatures({
    //     name: 'isArticleRatingEnabled',
    //     on: () => <ArticleRating articleId={id}/>,
    //     off: () => <Card max>{t('RateWillBeSoon')}</Card>
    // });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {/* {articleRatingCard} */}
                    <ToggleFeatures 
                        feature={'isArticleRatingEnabled'} 
                        on={<ArticleRating articleId={id}/>} 
                        off={<Card max>{t('RateWillBeSoon')}</Card>}
                    />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
