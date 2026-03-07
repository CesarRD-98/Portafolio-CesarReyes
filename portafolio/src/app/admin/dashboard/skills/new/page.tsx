"use client";
import { FileUploadField } from '@/app/components/fileUploadField/FileUploadField'
import React, { useState } from 'react'

export default function NewSkillPage() {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [image, setImage] = useState<File | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }
    return (
        <section>
            <h4>Nueva Habilidad</h4>
            <article>
                <form className='form-container'>
                    <div className="form-group">
                        <label>Título:</label>
                        <input type="text" className="" value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label>Tipo de habilidad:</label>
                        <select name="" id="" value={type} onChange={e => setType(e.target.value)}>
                            <option defaultValue="">Selecciona un tipo</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="design">Diseño</option>
                            <option value="tool">Herramienta</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                    <FileUploadField
                        label="Icono de la habilidad:"
                        helperText="Formatos permitidos: JPG, PNG o SVG"
                        accept=".jpg,.jpeg,.png,.svg"
                        onFileSelect={setImage}
                    />
                    <button type="submit" className="btn btn-submit" onClick={handleSubmit}>Guardar cambios</button>
                </form>
            </article>
        </section>
    )
}