import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount={true}
            reducers={initialReducers}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Authorization form')} />
                        {error && (
                            <TextDeprecated
                                text={t('Error in LoginForm')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            value={username}
                            onChange={onChangeUsername}
                            type="text"
                            className={cls.input}
                            placeholder={t('Enter name')}
                        />
                        <InputDeprecated
                            value={password}
                            onChange={onChangePassword}
                            type="text"
                            className={cls.input}
                            placeholder={t('Enter password')}
                        />
                        <ButtonDeprecated
                            onClick={onLoginClick}
                            className={cls.loginBtn}
                            disabled={isLoading}
                        >
                            {t('Enter')}
                        </ButtonDeprecated>
                    </div>
                }
                on={
                    <VStack gap='16' className={classNames(cls.LoginForm, {}, [className])}>
                        <Text title={t('Authorization form')} />
                        {error && (
                            <Text
                                text={t('Error in LoginForm')}
                                variant='error'
                            />
                        )}
                        <Input
                            value={username}
                            onChange={onChangeUsername}
                            type="text"
                            placeholder={t('Enter name')}
                        />
                        <Input
                            value={password}
                            onChange={onChangePassword}
                            type="text"
                            placeholder={t('Enter password')}
                        />
                        <Button
                            onClick={onLoginClick}
                            className={cls.loginBtnRedesigned}
                            disabled={isLoading}
                        >
                            {t('Enter')}
                        </Button>
                    </VStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
