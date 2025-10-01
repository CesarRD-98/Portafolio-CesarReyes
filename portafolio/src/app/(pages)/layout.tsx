import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
