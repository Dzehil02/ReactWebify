import { Text } from '@/shared/ui/redesigned/Text';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/redesigned/Input';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { ProfileCardProps } from '../ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card padding={'24'} max>
            <VStack gap={'32'}>
                <HStack justify={'center'} max>
                    <Skeleton width={128} height={128} border={'100%'} />
                </HStack>
                <HStack max gap={'24'}>
                    <VStack max gap={'16'}>
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                    </VStack>
                    <VStack max gap={'16'}>
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');
    return (
        <HStack justify={'center'} max>
            <Text
                variant="error"
                title={t('ProfileError')}
                text={t('RefreshProfilePage')}
                align="center"
            />
        </HStack>
    );
};

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
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

    return (
        <Card padding={'24'} border='partial' max className={className}>
            <VStack gap={'32'}>
                {data?.avatar && (
                    <HStack justify={'center'} max>
                        <Avatar size={128} src={data?.avatar} />
                    </HStack>
                )}
                <HStack max gap={'24'}>
                    <VStack max gap={'16'}>
                        <Input
                            value={data?.first}
                            label={t('Firstname')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid={'ProfileCard.Firstname'}
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Lastname')}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid={'ProfileCard.Lastname'}
                        />
                        <Input
                            type="number"
                            value={data?.age}
                            label={t('Age')}
                            onChange={onChangeAge}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.city}
                            label={t('City')}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </VStack>
                    <VStack max gap={'16'}>
                        <Input
                            value={data?.username}
                            label={t('Username')}
                            onChange={onChangeUsername}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Avatar')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />
                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
