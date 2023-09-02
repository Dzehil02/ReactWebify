import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Portal = (props: PortalProps) => {
    const ref = useRef<Element>();
    const [mounted, setMounted] = useState(false);

    const { children } = props;

    useEffect(() => {
        ref.current = document.querySelector('#root') || undefined;
        setMounted(true);
    }, []);

    return mounted && ref.current ? createPortal(children, ref.current) : null;
};
