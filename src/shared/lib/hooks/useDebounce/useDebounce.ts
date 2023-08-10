import { MutableRefObject, useCallback, useRef } from "react";

/**
* Хук, который позволяет отменить предыдущий вызов функции пока не истечёт время (delay)
* @param callback
* @param delay - задержка в мс
*/

export function useDebounce(callback: (...args: any[]) => void, delay: number) {

    const timeoutRef = useRef() as MutableRefObject<any>;

    const debouncedCallback = useCallback((...args: any[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
        
    }, [callback, delay]);

    return debouncedCallback;
}