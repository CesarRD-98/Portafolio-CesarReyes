import React from 'react'
import './footer.scss'

export default function Footer() {
    const author: string = 'César Reyes'
    const year: string = '2025'

    return (
        <footer>
            <p>&copy; {year} {author}. Todos los derechos resevados.</p>
        </footer>
    )
}
