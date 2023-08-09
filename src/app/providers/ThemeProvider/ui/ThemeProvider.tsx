import React, { ReactNode, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { Theme } from "../../../../shared/const/theme";
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGH

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {

    const {
        children,
        initialTheme,
    } = props

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    document.body.className = theme;

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;