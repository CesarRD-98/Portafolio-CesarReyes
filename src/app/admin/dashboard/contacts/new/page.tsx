"use client";
import { useToastContext } from '@/app/context/toast/toast.provider';
import React, { FormEvent } from 'react'

export default function NewContactPage() {
    const { showToast } = useToastContext();

    const [title, setTitle] = React.useState('')
    const [value, setValue] = React.useState('')
    const [type, setType] = React.useState('')
    const [link, setLink] = React.useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        showToast({
            title: 'Contacto creado',
            message: `El contacto ha sido creado exitosamente.`,
            type: 'success',
        })
    }
    return (
        <section>
            <h4>Nuevo contacto</h4>
            <article>
                <form className='form-container'>
                    <div className="form-group">
                        <label>Título:</label>
                        <input type="text" className="" value={title} onChange={e => setTitle(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label>Valor:</label>
                        <input type='text' className="" value={value} onChange={e => setValue(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Tipo de contacto:</label>
                        <select name="" id="" value={type} onChange={e => setType(e.target.value)}>
                            <option defaultValue="">Selecciona un tipo</option>
                            <option value="email">Email</option>
                            <option value="phone">Teléfono</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="github">GitHub</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Enlace:</label>
                        <input type="text" className="" value={link} onChange={e => setLink(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-submit" onClick={handleSubmit}>Guardar cambios</button>
                </form>
            </article>
        </section>
    )
}