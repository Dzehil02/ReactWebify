import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
    toggleTheme: (saveAction: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction: (theme: Theme) => void) => {
        let newTheme: Theme;

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGH;
                break;
            case Theme.LIGH:
                newTheme = Theme.BLUE;
                break;
            case Theme.BLUE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGH;
        }

        setTheme?.(newTheme);
        saveAction(newTheme)
    };

    return {
        theme: theme || Theme.LIGH,
        toggleTheme,
    };
}
