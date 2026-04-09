'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenProps } from "@/app/types/children.type";
import { User } from "@/app/modules/user_public/userPublic.types";
import { useUserPublic } from "./hooks/useUserPublic";

interface UserPublicTypeContext {
    user: User | null
    loading: boolean
    error: string | null
}

export const UserPublicContext = createContext<UserPublicTypeContext | undefined>(undefined)

export default function UserPublicProvider({ children }: ChildrenProps) {
    const { data } = useUserPublic()

    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        try {
            setLoading(true)
            if (data) setUser(data)
        } catch (error: unknown) {
            if (error instanceof Error) { setError('Error al cargar datos del usuario') }
        } finally {
            setLoading(false)
        }
    }, [data])

    return (
        <UserPublicContext.Provider value={{ user, loading, error }}>
            {children}
        </UserPublicContext.Provider>
    )
}

export const useUserPublicContext = () => {
    const context = useContext(UserPublicContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    return context
}
