import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled.svg';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIconDeprecated,
    },
    {
        view: ArticleView.BIG,
        icon: ListIconDeprecated,
    },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({
    className,
    view,
    onViewClick,
}) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <ButtonDeprecated
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    {
                        <viewType.icon
                            width={24}
                            height={24}
                            className={classNames('', {
                                [cls.selected]: viewType.view === view,
                            })}
                        />
                    }
                </ButtonDeprecated>
            ))}
        </div>
    );
};
