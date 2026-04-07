'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { AuthService } from "./auth.service";
import { createSupabaseBrowserClient } from "@/app/lib/supabaseClient";

interface AuthCtxType {
    user: User | null
    logout: () => Promise<boolean>
}

const AuthContext = createContext<AuthCtxType | undefined>(undefined)

type AuthProviderProps = {
    children: ReactNode
    initialUser: User | null
}

export default function AuthProvider({ children, initialUser }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(initialUser)

    const logout = async (): Promise<boolean> => {
        const response = await AuthService.logout()
        setUser(null)
        return response.success
    }

    useEffect(() => {
        const supabase = createSupabaseBrowserClient()

        const init = async () => {
            const { data } = await supabase.auth.getUser()
            setUser(data.user)
        }

        init()

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null)
            }
        )

        return () => {
            listener.subscription.unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}