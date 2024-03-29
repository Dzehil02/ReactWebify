import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import Star from '@/shared/assets/icons/star.svg';
import StarNew from '@/shared/assets/icons/starNew.svg';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '../../redesigned/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, selectedStars = 0, size = 30 } = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => cls.StarRating,
                    on: () => cls.StarRatingRedesigned,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const commonProps = {
                    className: classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [
                            currentStarsCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    ),
                    key: starNumber,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    width: size,
                    height: size,
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber,
                };
                return (
                    <ToggleFeatures
                        key={starNumber}
                        feature="isAppRedesigned"
                        off={<Star {...commonProps} />}
                        on={
                            <Icon 
                                clickable={!isSelected}
                                Svg={StarNew}
                                {...commonProps}
                            />
                        }
                    />
                );
            })}
        </div>
    );
});
