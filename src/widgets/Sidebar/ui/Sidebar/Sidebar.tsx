import { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrowDown.svg';

interface SidebarProps {
    className?: string;
}

const SidebarRedesigned = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsedRedesigned]: collapsed },
                [className],
            )}
        >
            <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemsList}
            </VStack>
            <Icon
                clickable
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                Svg={ArrowIcon}
            />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
});

export const Sidebar = memo(() => {
    return <SidebarRedesigned />;
});
