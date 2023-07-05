import { Fragment, ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropDownDirection = 'top' | 'bottom';

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string
    direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
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
        direction = 'bottom'
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