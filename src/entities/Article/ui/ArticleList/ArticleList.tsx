import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 8 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton view={view} key={index} />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation('article-details');
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                key={article.id}
                target={target}
            />
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size="l" title={t('Articles not found')} />
            </div>
        );
    }

    return (
        <HStack
            gap={'24'}
            wrap="wrap"
            data-testid="ArticleListRedesigned"
            className={classNames(cls.ArticleList, {}, [])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </HStack>
    );
});
