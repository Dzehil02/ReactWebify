import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <TextDeprecated title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph) => (
                    <TextDeprecated
                        key={paragraph.slice(0, 12)}
                        text={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        );
    },
);
