import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { className, order, sort, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation('article-details');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('ascending'),
            },
            {
                value: 'desc',
                content: t('descending'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('date'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('title'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('views'),
            },
        ],
        [t],
    );

    return (
        <div
            className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
                className,
            ])}
        >
            <VStack gap="8">
                <Text text={t('Sorted by')} />
                <ListBox
                    items={sortFieldOptions}
                    value={sort}
                    onChange={onChangeSort}
                />
                <ListBox
                    items={orderOptions}
                    value={order}
                    onChange={onChangeOrder}
                />
            </VStack>
        </div>
    );
};
