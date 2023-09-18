import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/consts';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { VStack, HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        const mainClass = toggleFeatures({
            name: 'isAppRedesigned',
            off: () => cls.ArticleListItem,
            on: () => cls.ArticleListItemRedesigned,
        })

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            off: () => SkeletonDeprecated,
            on: () => SkeletonRedesigned,
        });

        if (view === ArticleView.BIG) {
            const cardContent = (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={
                        <>
                            <div className={cls.header}>
                                <Skeleton border="50%" width={30} height={30} />
                                <Skeleton
                                    width={150}
                                    height={16}
                                    className={cls.username}
                                />
                                <Skeleton
                                    width={150}
                                    height={16}
                                    className={cls.date}
                                />
                            </div>
                            <Skeleton
                                width={250}
                                height={24}
                                className={cls.title}
                            />
                            <Skeleton height={250} className={cls.img} />
                            <Skeleton height={160} className={cls.img} />
                            <div className={cls.footer}>
                                <Skeleton height={36} width={200} />
                            </div>
                        </>
                    }
                    on={
                        <>
                            <div className={cls.header}>
                                <Skeleton border="50%" width={30} height={30} />
                                <Skeleton
                                    width={150}
                                    height={16}
                                    border='32px'
                                    className={cls.username}
                                />
                                <Skeleton
                                    width={100}
                                    height={24}
                                    border='32px'
                                    className={cls.date}
                                />
                            </div>
                            <Skeleton
                                width={350}
                                height={40}
                                border='32px'
                                className={cls.title}
                            />
                            <Skeleton height={250} border='12px' className={cls.img} />
                            <Skeleton height={70} border='12px' className={cls.img} />
                            <HStack justify='between' className={cls.footer}>
                                <Skeleton height={38} width={160} border='32px' />
                                <Skeleton height={24} width={80} border='32px' />
                            </HStack>
                        </>
                    }
                />
            );

            return (
                <div
                    className={classNames(mainClass, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        off={
                            <CardDeprecated className={cls.card}>
                                {cardContent}
                            </CardDeprecated>
                        }
                        on={
                            <CardRedesigned
                                border="partial"
                                className={cls.card}
                            >
                                {cardContent}
                            </CardRedesigned>
                        }
                    />
                </div>
            );
        }

        
        const cardContent = (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <>
                        <div className={cls.imageWrapper}>
                            <Skeleton
                                width={200}
                                height={200}
                                className={cls.img}
                            />
                        </div>
                        <div className={cls.infoWrapper}>
                            <Skeleton width={200} height={24} />
                        </div>
                        <Skeleton
                            width={200}
                            height={24}
                            className={cls.title}
                        />
                    </>
                }
                on={
                    <>
                        <Skeleton
                            width="100%"
                            height={150}
                            border='20px'
                            className={cls.imgRedesigned}
                        />
                        <VStack gap="4" className={cls.info}>
                            <Skeleton border="32px" width={200} height={40}/>
                            <VStack max gap="4" className={cls.footer}>
                                <HStack max justify="between">
                                <Skeleton border="32px" width={90} height={24}/>
                                <Skeleton border="32px" width={50} height={24}/>
                                </HStack>
                                <HStack gap="8">
                                <Skeleton border="100%" width={30} height={30}/>
                                <Skeleton border="32px" width={32} height={16}/>
                                </HStack>
                            </VStack>
                        </VStack>
                    </>
                }
            />
        );

        return (
            <div
                className={classNames(mainClass, {}, [
                    className,
                    cls[view],
                ])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={
                        <CardDeprecated className={cls.card}>
                            {cardContent}
                        </CardDeprecated>
                    }
                    on={
                        <CardRedesigned border="partial" padding='0' className={cls.card}>
                            {cardContent}
                        </CardRedesigned>
                    }
                />
            </div>
        );
    },
);
