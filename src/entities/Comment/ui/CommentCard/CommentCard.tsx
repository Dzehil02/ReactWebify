import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, isLoading, comment } = props;

    const Skeleton = SkeletonDeprecated;

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
        <VStack
            data-testid="CommentCard.Content"
            max
            gap={'8'}
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLinkDeprecated
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar ? (
                    <AvatarDeprecated src={comment.user.avatar} size={30} />
                ) : null}
                <TextDeprecated
                    className={cls.username}
                    title={comment.user.username}
                />
            </AppLinkDeprecated>
            <TextDeprecated className={cls.text} text={comment.text} />
        </VStack>
    );
});
