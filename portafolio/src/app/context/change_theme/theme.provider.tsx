'use client'
import React from 'react'
import { ChildrenModel } from "@/app/model/children.model";
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

export default function ThemeProviderWrapper({ children }: ChildrenModel) {
    return (
        <NextThemesProvider attribute="data-theme" defaultTheme='system' enableSystem>
            {children}
        </NextThemesProvider>
    )
}

export const useThemeContext = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return { theme, toggleTheme }
}
