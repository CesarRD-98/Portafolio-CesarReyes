'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './auth.context'
import { ChildrenModel } from '@/app/model/children.model'
import { User } from '@/app/model/user.model'
import { AuthService } from '@/app/services/auth.service'
import { User as UserLogged } from '@supabase/supabase-js'

export default function AuthProvider({ children }: ChildrenModel) {
    const [user, setUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState<UserLogged | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const login = async (email: string, password: string): Promise<void> => {
        try {
            setLoading(true)
            const res = await AuthService.login({ email, password });
            if (res.success) { setUserLoggedIn(res.data) }
        } catch (error: unknown) {
            throw new Error(error instanceof Error ? error.message : 'An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        const response = await AuthService.logout()
        if (response) { setUserLoggedIn(null) }
    }

    // useEffect(() => {
    //     console.log("Usuario logueado: ", userLoggedIn);
    // }, [userLoggedIn]);

    return (
        <AuthContext.Provider value={{ userLoggedIn, loading, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}

