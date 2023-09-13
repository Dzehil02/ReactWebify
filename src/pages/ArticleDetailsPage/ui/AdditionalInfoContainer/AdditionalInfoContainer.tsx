import { getArticleDetailsData } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getRouteArticleEdit } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';

interface AdditionalInfoContainerProps {
    className?: string;
}

export const AdditionalInfoContainer = memo(
    (props: AdditionalInfoContainerProps) => {
        const { className } = props;
        const article = useSelector(getArticleDetailsData);
        const navigate = useNavigate();

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [article, navigate]);

        if (!article) {
            return null;
        }

        return (
            <Card className={cls.card} padding={'24'} border={'round'}>
                <ArticleAdditionalInfo
                    onEdit={onEditArticle}
                    author={article.user}
                    createdAt={article.createdAt}
                    views={article.views}
                    className={className}
                />
            </Card>
        );
    },
);
