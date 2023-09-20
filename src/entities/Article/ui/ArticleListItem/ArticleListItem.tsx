import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    return <ArticleListItemDeprecated {...props} />;
});
