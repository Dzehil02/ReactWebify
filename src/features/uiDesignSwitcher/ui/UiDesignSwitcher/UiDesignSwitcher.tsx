import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { getFeatureFlags, updateFeatureFlag } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isAppRedesigned = getFeatureFlags('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);

    const items = [
        {
            content: t('new'),
            value: 'new',
        },
        {
            content: t('old'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    userId: authData?.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack gap="16">
            <Text text={t('interface')} />
            {isLoading ? (
                <SkeletonDeprecated width={120} height={40} />
            ) : (
                <ListBoxDeprecated
                    onChange={onChange}
                    items={items}
                    value={isAppRedesigned ? t('new') : t('old')}
                    className={className}
                    readonly
                />
            )}
        </HStack>
    );
});
