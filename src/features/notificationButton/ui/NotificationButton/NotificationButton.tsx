import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { NotificationList } from '@/entities/Notification';

import NotificationIconRedesigned from '@/shared/assets/icons/notificationNew.svg';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setisOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setisOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setisOpen(false);
    }, []);

    const trigger = (
        <Icon
            Svg={NotificationIconRedesigned}
            onClick={onOpenDrawer}
            clickable
            width={40}
            height={40}
        />
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    trigger={trigger}
                    direction="bottom left"
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
