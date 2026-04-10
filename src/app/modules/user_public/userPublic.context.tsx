'use client'

import { createContext, useContext } from "react";
import { ChildrenProps } from "@/app/types/children.type";
import { User } from "@/app/modules/user_public/userPublic.types";
import { useUserPublic } from "./hooks/useUserPublic";

interface UserPublicTypeContext {
    user: User | null
    loading: boolean
    error: string | null
}

export const UserPublicContext = createContext<UserPublicTypeContext | undefined>(undefined)

export function UserPublicProvider({ children }: ChildrenProps) {
    const { data, isLoading, error } = useUserPublic()

    return (
        <UserPublicContext.Provider
            value={{
                user: data ?? null,
                loading: isLoading,
                error: error ? 'Error al cargar datos del usuario' : null
            }}
        >
            {children}
        </UserPublicContext.Provider>
    )
}

export const useUserPublicContext = () => {
    const context = useContext(UserPublicContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    return context
}