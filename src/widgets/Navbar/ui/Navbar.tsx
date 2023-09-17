import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

interface NavbarProps {
    className?: string;
}

const AuthNavbarDeprecated = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <TextDeprecated
                className={cls.appName}
                title={t('ReactWebify')}
                theme={TextTheme.INVERTED}
            />
            <AppLinkDeprecated
                to={getRouteArticleCreate()}
                theme={AppLinkTheme.INVERTED}
                className={cls.createLink}
            >
                {t('Create article')}
            </AppLinkDeprecated>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    );
};

const AuthNavbarRedesigned = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    );
};

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => cls.Navbar,
        on: () => cls.NavbarRedesigned,
    })

    if (authData) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<AuthNavbarRedesigned />}
                off={<AuthNavbarDeprecated />}
            />
        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Enter')}
                    </ButtonDeprecated>
                }
                on={
                    <Button
                        variant="clear"
                        onClick={onShowModal}
                    >
                        {t('Enter')}
                    </Button>
                }
            />

            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
