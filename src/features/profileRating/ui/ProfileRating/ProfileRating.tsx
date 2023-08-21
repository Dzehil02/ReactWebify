import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import {
    useGetProfileRating,
    useRateProfile,
} from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId?: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId = '1' } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        userId: userData?.id ?? '',
        profileId,
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: starsCount,
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [profileId, rateProfileMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateProfile(starsCount, feedback);
        },
        [handleRateProfile],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateProfile(starsCount);
        },
        [handleRateProfile],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={className}
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            title={t('rateProfile')}
            feedbackTitle={t('feedbackProfileTitle')}
            hasFeedback
        />
    );
});

export default ProfileRating;
