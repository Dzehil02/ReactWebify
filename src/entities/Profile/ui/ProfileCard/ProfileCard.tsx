import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const {t} = useTranslation('profile')
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')}/>
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Firstname')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    )
}