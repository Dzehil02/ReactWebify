import cls from './ArticleDetails.module.scss';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import NotFoundImg from '@/shared/assets/icons/not_found_img.svg';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '../../model/selectors/articleDetails';
import { renderArticleBlock } from './renderArticleBlock';

export const ArticleDetailsDeprecated = () => {
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