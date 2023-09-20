import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import {
    getRouteAdminPanel,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispacth = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispacth(userActions.logout());
    }, [dispacth]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const trigger = (
        <Button theme={ButtonTheme.CLEAR_INVERTED}>
            <AvatarDeprecated size={30} src={authData.avatar} />
        </Button>
    );

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('admin'),
                      href: getRouteAdminPanel(),
                  },
              ]
            : []),
        {
            content: t('settings'),
            href: getRouteSettings(),
        },
        {
            content: t('profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Exit'),
            onClick: onLogout,
        },
    ];

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction={'bottom left'}
            items={items}
            trigger={<Avatar size={40} src={authData.avatar} />}
        />
    );
});
