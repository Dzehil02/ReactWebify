import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollTolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollTolbarProps {
    className?: string;
}

export const ScrollTolbar = memo((props: ScrollTolbarProps) => {
    const { className } = props;

    return (
        <VStack
            justify="center"
            align="center"
            max
            className={classNames(cls.ScrollTolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
