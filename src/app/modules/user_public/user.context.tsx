'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenProps } from "@/app/types/children.type";
import { User } from "@/app/modules/user_public/user.types";
import { UserService } from "@/app/modules/user_public/user.service";

interface UserTypeContext {
    user: User | null
    reloadUser?: () => Promise<void>
    loading: boolean
    error: string | null
}

export const UserContext = createContext<UserTypeContext | undefined>(undefined)

export default function UserProvider({ children }: ChildrenProps) {
    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const reloadUser = async () => {
        try {
            setLoading(true)
            const data = await UserService.getUser()
            if (data) setUser(data)
        } catch (err) {
            console.error(err)
            setError('Error al cargar datos del usuario')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        reloadUser()
    }, [])

    return (
        <UserContext.Provider value={{ user, reloadUser, loading, error }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    return context
}
