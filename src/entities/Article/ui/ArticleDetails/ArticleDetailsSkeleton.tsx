import { memo } from 'react';
import cls from './ArticleDetails.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

export const ArticleDetailsSkeleton = memo(() => {
    const Skeleton = SkeletonRedesigned;

    return (
        <VStack gap="16" max>
            <Skeleton
                className={cls.avatar}
                width={200}
                height={200}
                border={'50%'}
            />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
        </VStack>
    );
});
