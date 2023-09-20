import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { getRouteProfile } from '@/shared/const/router';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, isLoading, comment } = props;

    const Skeleton = SkeletonRedesigned;

    if (isLoading) {
        return (
            <VStack
                data-testid="CommentCard.Loading"
                max
                gap={'8'}
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <Card padding="24" border="partial" max>
            <VStack
                data-testid="CommentCard.Content"
                max
                gap={'8'}
                className={classNames(cls.CommentCardRedesigned, {}, [
                    className,
                ])}
            >
                <AppLink to={getRouteProfile(comment.user.id)}>
                    <HStack gap="8">
                        {comment.user.avatar ? (
                            <Avatar src={comment.user.avatar} size={30} />
                        ) : null}
                        <Text bold text={comment.user.username} />
                    </HStack>
                </AppLink>
                <Text text={comment.text} />
            </VStack>
        </Card>
    );
});
