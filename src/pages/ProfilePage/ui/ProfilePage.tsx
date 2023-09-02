import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ProfileRating } from '@/features/profileRating';
import { Page } from '@/widgets/Page';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '@/features/editableProfileCard';
import { useSelector } from 'react-redux';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canRate = authData?.id !== profileData?.id;

    if (!id && __PROJECT__ !== 'storybook') {
        return <Page className={className}>{t('ProfileNotFound')}</Page>;
    }

    return (
        <Page
            data-testid="ProfilePage"
            className={classNames('', {}, [className])}
        >
            <VStack max gap="16">
                <EditableProfileCard id={id} />
                {canRate && <ProfileRating profileId={id} />}
            </VStack>
        </Page>
    );
};

export default ProfilePage;
