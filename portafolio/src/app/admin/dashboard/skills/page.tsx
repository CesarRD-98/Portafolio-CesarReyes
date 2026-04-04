import Image from "next/image"

export default function SkillPage() {
    return (
        <section className="">
            <h4>Habilidades</h4>
            <article>
                <h2>Habilidades publicadas</h2>
                <dl>
                    <dt>Titulo</dt>
                    <dd>Nombre</dd>

                    <dt>Tipo de habilidad</dt>
                    <dd>Texto corto</dd>

                    <dt>Logo</dt>
                    <dd>
                        <Image src="..." alt="Avatar del autor" />
                    </dd>

                    <dt>Última actualización</dt>
                    <dd>10 enero 2026</dd>
                </dl>
            </article>
        </section>
    )
}