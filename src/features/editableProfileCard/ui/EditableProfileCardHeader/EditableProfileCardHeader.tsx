import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
    className?: string;
}

const EditableProfileCardHeaderRedesigned = ({
    className,
}: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <Card padding="24" max border="partial">
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Text title={t('Profile')} />
                {canEdit && (
                    <div>
                        {readonly ? (
                            <Button
                                variant="outline"
                                onClick={onEdit}
                                data-testid={
                                    'EditableProfileCardHeader.EditButton'
                                }
                            >
                                {t('Edit')}
                            </Button>
                        ) : (
                            <HStack gap="16">
                                <Button
                                    variant="outline"
                                    color="error"
                                    onClick={onCancelEdit}
                                    data-testid={
                                        'EditableProfileCardHeader.CancelButton'
                                    }
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    variant="outline"
                                    color="success"
                                    onClick={onSave}
                                    data-testid={
                                        'EditableProfileCardHeader.SaveButton'
                                    }
                                >
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </HStack>
        </Card>
    );
};

export const EditableProfileCardHeader = memo(() => {
    return <EditableProfileCardHeaderRedesigned />;
});
