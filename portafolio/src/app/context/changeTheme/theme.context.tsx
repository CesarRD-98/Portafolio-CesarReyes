import {createContext} from "react";
import {ThemeContextType} from "@/app/model/themeContext.model";

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
})