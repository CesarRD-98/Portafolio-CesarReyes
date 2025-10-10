import { LayoutHead } from '@/app/model/layoutHead.model'
import Head from 'next/head'
import React from 'react'

export default function Layout({ children, title, description }: LayoutHead) {
    const defaultTitle: string = 'César Reyes - Desarrollador Web'
    const defaultDescription: string = 'Portafolio de César Reyes, desarrollador web. Proyectos y habilidades'
    return (
        <>
            <Head>
                <title>{title || defaultTitle}</title>
                <meta name='description' content={description || defaultDescription} />
                <link rel="icon" href="/favicon.ico" />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <main>{children}</main>
        </>
    )
}
