import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from '../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation('article-details');

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                        on={<Text title={block.title} className={cls.title} />}
                    />
                )}
                {block.paragraphs.map((paragraph) => (
                    <ToggleFeatures
                        key={paragraph}
                        feature="isAppRedesigned"
                        off={
                            <TextDeprecated
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                        on={
                            <Text
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
