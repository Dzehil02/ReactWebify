import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleUp from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    return (
        <Icon
            Svg={CircleUp}
            width={32}
            height={32}
            clickable
            onClick={onClick}
            className={classNames('', {}, [className])}
        />
    );
});
