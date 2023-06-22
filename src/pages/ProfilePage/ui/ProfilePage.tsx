import { FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { 
    ProfileCard,
    ValidateProfileErrors,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';


const reducers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const {t} = useTranslation('profile')
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors)
    const {id} = useParams<{id: string}>();

    const validateErrorTranslates = {
        [ValidateProfileErrors.SERVER_ERROR]: t('SERVER_ERROR'), 
        [ValidateProfileErrors.INCORRECT_AGE]: t('INCORRECT_AGE'), 
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('INCORRECT_COUNTRY'), 
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('INCORRECT_USER_DATA'), 
        [ValidateProfileErrors.NO_DATA]: t('NO_DATA'), 
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));  
        }

    })

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updatePofile({first: value || ''}))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updatePofile({lastname: value || ''}))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updatePofile({age: Number(value || 0)}))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updatePofile({city: value || ''}))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updatePofile({username: value || ''}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updatePofile({avatar: value || ''}))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updatePofile({currency}))
    }, [dispatch])

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updatePofile({country}))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                {validateErrors?.length && validateErrors.map(err => (
                    <Text 
                        theme={TextTheme.ERROR} 
                        text={validateErrorTranslates[err]} 
                        key={err} 
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>

    )
}

export default ProfilePage;
