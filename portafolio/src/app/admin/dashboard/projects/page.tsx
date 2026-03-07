import React from 'react'

export default function ProjectsPage() {
    return (
        <section>
            <h4>Proyectos</h4>
            <article>
                <h2>Proyectos publicados</h2>
                <dl>
                    <dt>Proyecto 1</dt>
                    <dd>Nombre</dd>

                    <dt>Descripción</dt>
                    <dd>Texto corto</dd>

                    <dt>Stack</dt>
                    <dd>Varios...</dd>

                    <dt>Rol</dt>
                    <dd>Frontend, Backend...</dd>

                    <dt>Enlace</dt>
                    <dd>https://ejemplo.com</dd>

                    <dt>Imagen</dt>
                    <dd>
                        <img src="..." alt="Avatar del autor" />
                    </dd>

                    <dt>Última actualización</dt>
                    <dd>10 enero 2026</dd>
                </dl>
            </article>

        </section>
    )
}