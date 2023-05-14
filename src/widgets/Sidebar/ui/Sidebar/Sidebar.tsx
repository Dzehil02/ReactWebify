import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';

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
            className={classNames(
                cls.Sidebar, {[cls.collapsed]: collapsed}, [className]
            )}
        >
            <button onClick={onToggle}>{t('Turn on/off')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>    
        </div>
    )
}