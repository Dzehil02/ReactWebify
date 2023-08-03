import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames'
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Ukraine, content: Country.Ukraine},
    {value: Country.France, content: Country.France},
    {value: Country.Italy, content: Country.Italy},
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
    const {t} = useTranslation('profile')

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <ListBox
            label={t('Country')}
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Country')}
            items={options}
            readonly={readonly}
            direction={'top right'}
        />
    )

    // return (
    //     <Select 
    //         className={classNames('', {}, [className])}
    //         label={t('Country')}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // )
})