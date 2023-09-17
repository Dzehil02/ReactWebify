import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

const ForceUpdateContext = createContext({
    value: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    forceUpdate: () => {},
});

export const useForceUpdate = () => {
    const { forceUpdate } = useContext(ForceUpdateContext);
    return forceUpdate;
};

export function ForceUpdateProvider({ children }: { children: ReactNode }) {
    const [value, setValue] = useState(true);

    const forceUpdate = () => {
        setValue((prev) => !prev);
        setTimeout(() => {
            setValue((prev) => !prev);
        }, 0);
    };

    const valueContext = useMemo(() => {
        return { value, forceUpdate }
    }, [value])

    if (!value) {
        return null;
    }

    return (
        <ForceUpdateContext.Provider value={valueContext}>
            {children}
        </ForceUpdateContext.Provider>
    );
}
