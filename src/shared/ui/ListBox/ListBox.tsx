import { Fragment, ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import { DropDownDirection } from 'shared/types/ui';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
}

export function ListBox(props: ListBoxProps) {
    const {
        items, 
        className, 
        value, 
        defaultValue, 
        onChange, 
        readonly, 
        label, 
        direction = 'bottom left'
    } = props

    const optionsClasses = [mapDirectionClass[direction]]

    return (
        <HStack gap='8'>
            {label && <span>{label}</span>}
            <HListBox
                disabled={readonly}
                as='div'
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    disabled={readonly}
                    className={cls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}

                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled
                                }, [])}>
                                    {selected && '> '}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    )
}