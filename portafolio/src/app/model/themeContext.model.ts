import { Theme } from "@/app/model/theme.model";

export interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}