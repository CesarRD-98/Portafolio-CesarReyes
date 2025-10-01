'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ChildrenModel } from "@/app/model/children.model";
import { Theme } from "@/app/model/theme.model";
import { ThemeContext } from "@/app/context/changeTheme/theme.context";

export default function ThemeProvider({ children }: ChildrenModel) {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme;
        if (storedTheme) setTheme(storedTheme)
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useThemeContext must be used within ThemeProvider')
    return context
}
