import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ProfileCardProps } from '../ProfileCard';

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            justify={'center'}
            max
            className={classNames(cls.ProfileCardDeprecated, {}, [cls.loading])}
        >
            <LoaderDeprecated />
        </HStack>
    );
};

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');
    return (
        <HStack
            justify={'center'}
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('ProfileError')}
                text={t('RefreshProfilePage')}
                align={TextAlign.CENTER}
            />
        </HStack>
    );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.ProfileCardDeprecated, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify={'center'} max className={cls.avatarWrapper}>
                    <AvatarDeprecated src={data?.avatar} />
                </HStack>
            )}
            <VStack
                max
                gap="16"
                className={classNames(cls.EditInfo, {}, [className])}
            >

            
            <InputDeprecated
                value={data?.first}
                placeholder={t('Firstname')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid={'ProfileCard.Firstname'}
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Lastname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid={'ProfileCard.Lastname'}
            />
            <InputDeprecated
                type="number"
                value={data?.age}
                placeholder={t('Age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />

</VStack>

        </VStack>
    );
};
