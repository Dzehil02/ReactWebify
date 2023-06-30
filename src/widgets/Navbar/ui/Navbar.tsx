import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo, useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispacth = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [])

    const onLogout = useCallback(() => {
        dispacth(userActions.logout())
    }, [dispacth])

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} title={t('ReactWebify')} theme={TextTheme.INVERTED} />
                <AppLink 
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.INVERTED}
                    className={cls.createLink}
                >
                    {t('Create article')}
                </AppLink>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Exit')}
                </Button>
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Enter')}
            </Button>
            { isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </header>
    );
});
