import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency } from "@/entities/Currency";
import { CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile')
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props

    if (isLoading) {
        return (
            <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        )

    }
    if (error) {
        return (
            <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('ProfileError')}
                    text={t('RefreshProfilePage')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <VStack  max gap='16' className={classNames(cls.ProfileCard, mods, [className])}>

            {data?.avatar && (<HStack justify={'center'} max className={cls.avatarWrapper}>
                <Avatar src={data?.avatar} />
            </HStack>)}
            <Input
                value={data?.first}
                placeholder={t('Firstname')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid={'ProfileCard.Firstname'}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Lastname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid={'ProfileCard.Lastname'}
            />
            <Input
                type="number"
                value={data?.age}
                placeholder={t('Age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
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
    )
}