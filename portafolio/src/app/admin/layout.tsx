import React from 'react'
import UserProvider from '../context/user_profile/user.provider'
import { ChildrenModel } from '../model/children.model'

export default function layout({ children }: ChildrenModel) {
    return (
        <>
            <UserProvider>
                {children}
            </UserProvider>

        </>
    )
}
