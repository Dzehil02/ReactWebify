import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { HStack } from '../Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.AppLogoWrapper, {}, [className])}
        >
            <AppSvg className={cls.applogo} width={size} height={size} color='black' />
            <div className={cls.gradientBig}></div>
            <div className={cls.gradientSmall}></div>
        </HStack>
    );
});
