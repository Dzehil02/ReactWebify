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
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

interface EditableProfileCardHeaderProps {
    className?: string;
}

const EditableProfileCardHeaderDeprecated = ({
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
        <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}
        >
            <TextDeprecated title={t('Profile')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid={'EditableProfileCardHeader.EditButton'}
                        >
                            {t('Edit')}
                        </ButtonDeprecated>
                    ) : (
                        <HStack gap="8">
                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid={
                                    'EditableProfileCardHeader.CancelButton'
                                }
                            >
                                {t('Cancel')}
                            </ButtonDeprecated>

                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid={
                                    'EditableProfileCardHeader.SaveButton'
                                }
                            >
                                {t('Save')}
                            </ButtonDeprecated>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};

export const EditableProfileCardHeader = memo(() => {
    return <EditableProfileCardHeaderDeprecated />;
});
