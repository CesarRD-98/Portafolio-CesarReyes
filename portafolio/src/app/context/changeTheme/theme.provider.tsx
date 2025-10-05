'use client'
import React, { useEffect, useState } from 'react'
import { ChildrenModel } from "@/app/model/children.model";
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

export default function ThemeProvider({ children }: ChildrenModel) {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null
    }

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
