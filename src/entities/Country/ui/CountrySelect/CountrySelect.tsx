import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.France, content: Country.France },
    { value: Country.Italy, content: Country.Italy },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        const props = {
            className,
            value,
            defaultValue: t('Country'),
            label: t('Country'),
            items: options,
            onChange: onChangeHandler,
            readonly,
            direction: 'top right' as const,
        };

        return <ListBox {...props} />;
    },
);
