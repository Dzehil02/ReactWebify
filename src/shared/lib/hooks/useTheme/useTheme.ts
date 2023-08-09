import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../../const/theme";
import { LOCAL_STORAGE_THEME_KEY } from "../../../const/localstorage";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGH
            break;
        case Theme.LIGH:
            newTheme = Theme.BLUE
            break;
        case Theme.BLUE:
            newTheme = Theme.DARK
            break;
        default:
            newTheme = Theme.LIGH
        }

        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme: theme || Theme.LIGH,
        toggleTheme
    }
}