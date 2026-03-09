import React from 'react'
import '../../dashboard/profile/profile-page.scss'

export default function ProfilePage() {
    return (
        <section>
            <h4>Perfil</h4>
            <article>
                <h2>Perfil publicado</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Autor</th>
                            <th>Biografía corta</th>
                            <th>Biografía completa</th>
                            <th>Enfoque de aprendizaje</th>
                            <th>Año</th>
                            <th>Avatar</th>
                            <th>Hoja de vida</th>
                            <th>Última actualización</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre del autor</td>
                            <td>Texto corto</td>
                            <td>Texto largo</td>
                            <td>Ej. Frontend, Backend</td>
                            <td>2026</td>
                            <td>
                                <img src="..." alt="Avatar del autor" />
                            </td>
                            <td>
                                <a href="..." target="_blank">Descargar CV</a>
                            </td>
                            <td>10 enero 2026</td>
                        </tr>
                    </tbody>
                </table>
            </article>

        </section>
    )
}
