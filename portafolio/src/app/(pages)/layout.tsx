import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import {ChildrenModel} from "@/app/model/children.model";

export default function layout({children}: ChildrenModel) {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}
