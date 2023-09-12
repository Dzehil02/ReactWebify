import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleListItem.module.scss';
import { ArticleTextBlock } from '../../../model/types/article';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eyeNew.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import NotFoundImg from '@/shared/assets/icons/not_found_img.svg';
import { ArticleListItemProps } from '../ArticleListItem';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('article-details');

    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} />
            <Text bold text={article.user.username} />
        </>
    );

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack gap={'8'}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                padding="24"
                max
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <VStack max gap={'16'}>
                    <HStack max gap={'8'} justify="between">
                        <HStack max gap={'8'}>
                            <Avatar size={32} src={article.user.avatar} />
                            <Text bold text={article.user.username} />
                            <Text text={article.createdAt} />
                        </HStack>
                        {types}
                    </HStack>
                    <Text bold title={article.title} />
                    <Text title={article.subtitle} size="s" />
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250} />}
                        errorFallback={
                            <NotFoundImg width={'100%'} height={200} />
                        }
                        src={article.img}
                        className={cls.imgRedesigned}
                        alt={article.title}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlockRedesigned}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack max justify={'between'}>
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button variant="outline">{t('Read more')}</Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
                <div className={cls.footer}></div>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            to={getRouteArticleDetails(article.id)}
            target={target}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card} border="round">
                <AppImage
                    fallback={<Skeleton width={200} height={200} />}
                    alt={article.title}
                    src={article.img}
                    className={cls.imgRedesigned}
                    errorFallback={<NotFoundImg width={200} height={200} />}
                />
                <VStack gap="4" className={cls.info}>
                    <Text text={article.title} className={cls.title} />
                    <VStack max gap="4" className={cls.footer}>
                        <HStack max justify="between">
                            <Text
                                text={article.createdAt}
                            />
                            {views}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
