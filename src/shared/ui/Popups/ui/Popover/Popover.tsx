import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import { Popover as HPopover } from '@headlessui/react'
import { ReactNode } from 'react';
import { DropDownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {

    const {
        className,
        direction = 'bottom right',
        trigger,
        children
    } = props;

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)} unmount={false}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}