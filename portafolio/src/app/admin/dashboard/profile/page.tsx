import React from 'react'
import '../../dashboard/profile/profile-page.scss'

export default function ProfilePage() {
    return (
        <section>
            <h4>Perfil</h4>
            <article>
                <h2>Perfil publicado</h2>
                <dl>
                    <dt>Autor</dt>
                    <dd>Nombre del autor</dd>

                    <dt>Short Bio</dt>
                    <dd>Texto corto</dd>

                    <dt>Full Bio</dt>
                    <dd>Texto largo</dd>

                    <dt>Learning Focus</dt>
                    <dd>Ej. Frontend, Backend</dd>

                    <dt>Year</dt>
                    <dd>2026</dd>

                    <dt>Avatar</dt>
                    <dd>
                        <img src="..." alt="Avatar del autor" />
                    </dd>

                    <dt>CV</dt>
                    <dd>
                        <a href="..." target="_blank">Descargar CV</a>
                    </dd>

                    <dt>Última actualización</dt>
                    <dd>10 enero 2026</dd>
                </dl>
            </article>

        </section>
    )
}
