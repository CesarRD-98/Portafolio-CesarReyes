'use client';
import { FileUploadField } from '@/app/components/fileUploadField/FileUploadField'
import { useToastContext } from '@/app/components/toast/toast.provider';
import React, { FormEvent, useState } from 'react'

export default function NewProjectPage() {
    const { showToast } = useToastContext();

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [stack, setStack] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        showToast({
            title: 'Error',
            message: "Hubo un error al agregar el nuevo proyecto",
            type: 'error',
        });
    }

    return (
        <section>
            <h4>Nuevo Proyecto</h4>
            <article>
                <form className='form-container'>
                    <div className="form-group">
                        <label>Título:</label>
                        <input type="text" className="" value={title} onChange={e => setTitle(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label>Descripción:</label>
                        <input type='text' className="" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Stack:</label>
                        <input type="text" className="" value={stack} onChange={e => setStack(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Rol:</label>
                        <select name="" id="" value={role} onChange={e => setRole(e.target.value)}>
                            <option defaultValue="">Selecciona un rol</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="fullstack">Fullstack</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Enlace:</label>
                        <input type="text" className="" value={link} onChange={e => setLink(e.target.value)} />
                    </div>
                    <FileUploadField
                        label="Imagen del proyecto:"
                        helperText="Formatos permitidos: JPG, PNG o GIF"
                        accept=".jpg,.jpeg,.png,.gif"
                        onFileSelect={setImage}
                    />
                    <button type="submit" className="btn btn-submit" onClick={handleSubmit}>Guardar cambios</button>
                </form>
            </article>
        </section>
    )
}