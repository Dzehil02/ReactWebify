import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import BlueIcon from '@/shared/assets/icons/theme-blue.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR} 
            className={classNames('', {}, [className])} 
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : theme === Theme.LIGH ? <LightIcon/> : <BlueIcon/>}
        </Button>
    )
})