import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { NotificationList } from '@/entities/Notification';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Popover } from '@/shared/ui/deprecated/Popups';
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg';
import NotificationIconRedesigned from '@/shared/assets/icons/notificationNew.svg';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR_INVERTED}>
            <ToggleFeatures
                feature='isAppRedesigned'
                off={<NotificationIconDeprecated width={20} height={20} />}
                on={<Icon Svg={NotificationIconRedesigned} />}
            />
            
        </Button>
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
