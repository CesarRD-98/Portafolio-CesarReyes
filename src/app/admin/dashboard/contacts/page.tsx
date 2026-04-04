import Image from 'next/image'

export default function ContactPage() {
    return (
        <section className="">
            <h4>Contactos</h4>
            <article>
                <h2>Contactos publicados</h2>
                <dl>
                    <dt>Titulo</dt>
                    <dd>Nombre</dd>

                    <dt>Valor</dt>
                    <dd>Texto corto</dd>

                    <dt>Tipo de contacto</dt>
                    <dd>Texto corto</dd>

                    <dt>Logo</dt>
                    <dd>
                        <Image src="..." alt="Logo del contacto" />
                    </dd>

                    <dt>Última actualización</dt>
                    <dd>10 enero 2026</dd>
                </dl>
            </article>
        </section>
    )
}