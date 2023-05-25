import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {username, password, isLoading, error} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && <Text text={t('Error in LoginForm')} theme={TextTheme.ERROR}/>}
            <Input 
                value={username}
                onChange={onChangeUsername} 
                type='text' 
                className={cls.input} 
                placeholder={t('Enter name')} 
            />
            <Input
                value={password} 
                onChange={onChangePassword} 
                type='text' 
                className={cls.input} 
                placeholder={t('Enter password')} 
            />
            <Button
                onClick={onLoginClick}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Enter')}
            </Button>
        </div>
    )
});
