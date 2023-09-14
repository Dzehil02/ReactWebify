import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { Text as TextDeprecated, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import NotFoundImg from '@/shared/assets/icons/not_found_img.svg';
import { renderArticleBlock } from './renderArticleBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetailsDeprecated = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <AppImage
                    width={200}
                    height={200}
                    src={article?.img}
                    className={cls.avatar}
                    fallback={
                        <SkeletonDeprecated width={200} height={200} border="50%" />
                    }
                    errorFallback={<NotFoundImg width={200} height={200} />}
                />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStack gap="8" className={cls.articleInfo}>
                    <EyeIcon className={cls.icon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack gap="8" className={cls.articleInfo}>
                    <CalendarIcon className={cls.icon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const ArticleDetailsRedesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={<Skeleton width={'100%'} height={420} border={'16px'} />}
                src={article?.img}
                className={cls.img}
            />
            {/* <HStack justify="center" max className={cls.avatarWrapper}>
                <AppImage
                    width={200}
                    height={200}
                    src={article?.img}
                    className={cls.avatar}
                    fallback={
                        <Skeleton width={200} height={200} border="50%" />
                    }
                    errorFallback={<NotFoundImg width={200} height={200} />}
                />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <HStack gap="8" className={cls.articleInfo}>
                    <EyeIcon className={cls.icon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap="8" className={cls.articleInfo}>
                    <CalendarIcon className={cls.icon} />
                    <Text text={article?.createdAt} />
                </HStack>
            </VStack> */}
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    });

    let content;

    if (isLoading) {
        content = (
            <>
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
            </>
        );
    } else if (error) {
        content = <TextDeprecated align={TextAlign.CENTER} title={t('Error Article')} />;
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<ArticleDetailsDeprecated />}
                on={<ArticleDetailsRedesigned />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
