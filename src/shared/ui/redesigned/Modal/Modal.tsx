import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../../redesigned/Portal/Portal';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { toggleFeatures } from '@/shared/lib/features';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DEELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { theme } = useTheme();

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DEELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        off: () => cls.modalOld,
                        on: () => cls.modalNew
                    })
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
