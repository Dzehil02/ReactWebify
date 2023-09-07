import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled.svg';
import ListIcon from '@/shared/assets/icons/listNew.svg';
import TiledIcon from '@/shared/assets/icons/tiledNew.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => TiledIconDeprecated,
            on: () => TiledIcon,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => ListIconDeprecated,
            on: () => ListIcon,
        }),
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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
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
            }
            on={
                <Card
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                    border={'round'}
                >
                    <HStack>
                        {viewTypes.map((viewType) => (
                            <Icon
                                clickable
                                onClick={onClick(viewType.view)}
                                key={viewType.view}
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [cls.selectedRedesigned]:
                                        viewType.view === view,
                                    [cls.notSelectedRedesigned]:
                                        viewType.view !== view,
                                })}
                            />
                        ))}
                    </HStack>
                </Card>
            }
        />
    );
};
