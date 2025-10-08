'use client'
import React, { useContext, useEffect, useState } from 'react'
import { WindowWidthContext } from './windowWidth.context'
import { ChildrenModel } from '@/app/model/children.model'

export default function WindowWidthProvider({ children }: ChildrenModel) {
    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <WindowWidthContext.Provider value={{ windowWidth }}>
            {children}
        </WindowWidthContext.Provider>
    )
}

export const useWindowWidthContext = () => {
    const context = useContext(WindowWidthContext)
    if (!context) throw new Error('useWindowWidthContext must be used within a WindowWidthProvider')
    return context
}