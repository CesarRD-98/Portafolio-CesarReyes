'use client'
import React from 'react'
import Link from 'next/link'

export default function DashboardPage() {
    return (
        <section>
            <h4>Dashboard</h4>
            <article>
                Acciones rápidas:
                <nav>
                    <ul>
                        <li><Link href="/admin/dashboard/profile">Ver perfil</Link></li>
                        <li><Link href="/admin/dashboard/projects">Ver Proyectos</Link></li>
                        <li><Link href="/admin/dashboard/contacts">Ver Contactos</Link></li>
                        <li><Link href="/admin/dashboard/skills">Ver Habilidades</Link></li>
                    </ul>
                </nav>
            </article>
        </section>
    )
}
