import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { ChildrenModel } from "@/app/model/children.model";
import UserProvider from '../context/user_profile/user.provider';

export default function layout({ children }: ChildrenModel) {
    return (
        <>
            <UserProvider>
                <Navbar />
                {children}
                <Footer />
            </UserProvider>
        </>
    )
}
