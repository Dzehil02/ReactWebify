import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import { useTranslation } from 'react-i18next';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {className} = props;
    const {t} = useTranslation('article-details')
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            {t('ArticleImageBlockComponent')}
        </div>
    )
})
