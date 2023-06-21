import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList, ArticleView } from 'entities/Article';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({className}) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList view={ArticleView.BIG} articles={[]} />
        </div>
    );
}

export default memo(ArticlesPage);