'use client'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './user.context'
import { ChildrenModel } from '@/app/model/children.model'
import { User } from '@/app/model/user.model'
import { UserService } from '@/app/services/user.service'

export default function UserProvider({ children }: ChildrenModel) {
    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const id: number = 1

    const reloadUser = async () => {
        try {
            setLoading(true)
            const data = await UserService.getUser(id)
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
