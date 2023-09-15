import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, isLoading, comments } = props;
    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <VStack
                    gap="16"
                    max
                    className={classNames('', {}, [className])}
                >
                    {comments?.length ? (
                        comments.map((comment) => (
                            <CommentCard
                                isLoading={isLoading}
                                key={comment.id}
                                comment={comment}
                            />
                        ))
                    ) : (
                        <TextDeprecated text={t('Comments is not found')} />
                    )}
                </VStack>
            }
            on={
                <VStack
                    gap="16"
                    max
                    className={classNames('', {}, [className])}
                >
                    {comments?.length ? (
                        comments.map((comment) => (
                            <CommentCard
                                isLoading={isLoading}
                                key={comment.id}
                                comment={comment}
                            />
                        ))
                    ) : (
                        <Text text={t('Comments is not found')} />
                    )}
                </VStack>
            }
        />
    );
});
