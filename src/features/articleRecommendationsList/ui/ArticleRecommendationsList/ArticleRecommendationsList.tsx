import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('article-details');
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading) {
            return <div>{t('Loading')}</div>;
        }

        if (error || !articles) {
            return <div>{t('ErrorRecommends')}</div>;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <TextDeprecated
                    size={TextSize.L}
                    title={t('Recommendations')}
                />

                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
