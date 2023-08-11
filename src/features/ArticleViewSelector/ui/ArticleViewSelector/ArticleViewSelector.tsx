import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import ListIcon from '@/shared/assets/icons/list.svg'
import TiledIcon from '@/shared/assets/icons/tiled.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArticleView } from '@/entities/Article'

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({ className, view, onViewClick }) => {

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button 
                    key={viewType.view} 
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    {<viewType.icon className={classNames('', {[cls.selected] : viewType.view === view} )}/>}
                </Button>
            ))}
        </div>
    )
}