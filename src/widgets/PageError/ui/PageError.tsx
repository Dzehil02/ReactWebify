import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const {t} = useTranslation();
    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('errorboundary')}</p>
            <Button onClick={reloadPage}>
                {t('reload-page')}
            </Button>
        </div>
    )
}