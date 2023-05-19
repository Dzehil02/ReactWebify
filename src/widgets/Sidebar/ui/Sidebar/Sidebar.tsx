import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const {t} = useTranslation()
    const [collapsed, setCollapsed] = useState(false);
    
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar" 
            className={classNames(
                cls.Sidebar, {[cls.collapsed]: collapsed}, [className]
            )}
        >
            <Button 
                data-testid="sidebar-toggle" 
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div>
                    <AppLink
                        theme={AppLinkTheme.INVERTED}
                        to={RoutePath.main}
                        className={cls.item}
                    >
                        <MainIcon className={cls.icon}/>
                        <span className={cls.link}>{t('main')}</span>
                    </AppLink>
                </div>

                <div>
                    <AppLink
                        theme={AppLinkTheme.INVERTED}
                        to={RoutePath.about}
                        className={cls.item}
                    >
                        <AboutIcon className={cls.icon}/>
                        <span className={cls.link}>{t('about-page')}</span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>    
        </div>
    )
}