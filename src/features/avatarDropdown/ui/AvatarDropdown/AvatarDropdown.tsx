import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { Button, ButtonTheme } from '@/shared/ui/Button';

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
            <Avatar size={30} src={authData.avatar} />
        </Button>
    );

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction={'bottom left'}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('admin'),
                              href: getRouteAdminPanel(),
                          },
                      ]
                    : []),
                {
                    content: t('profile'),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: t('Exit'),
                    onClick: onLogout,
                },
            ]}
            trigger={trigger}
        />
    );
});
