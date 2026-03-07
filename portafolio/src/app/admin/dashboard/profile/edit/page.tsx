'use client';
import React, { FormEvent, useState } from 'react'
import './edit-page.scss';
import { FileUploadField } from '@/app/components/fileUploadField/FileUploadField';

export default function EditProfilePage() {

    const [author, setAuthor] = useState<string>('César Reyes De Dios');
    const [year, setYear] = useState<string>('2025');
    const [shortBio, setShortBio] = useState<string>('');
    const [fullBio, setFullBio] = useState<string>(`César Reyes es un desarrollador de software con más 
de 5 años de experiencia en el desarrollo web y móvil. Especializado en tecnologías como React, Node.js y Python.
Me apasiona crear soluciones innovadoras y eficientes para resolver problemas complejos. En mi tiempo libre,
disfruto aprender nuevas tecnologías, contribuir a proyectos de código abierto y compartir conocimientos a
través de blogs y charlas técnicas.`);
    const [focus, setFocus] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [cv, setCv] = useState<File | null>(null);


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        alert("En mantenimiento, no se pueden guardar los cambios por ahora.");
    }


    return (
        <section>
            <h4>Editar Perfil</h4>
            <article>
                <form className='form-container'>
                    <div className="form-row-header">
                        <div className="form-group">
                            <label>Autor:</label>
                            <input type="text" className="" value={author} onChange={e => setAuthor(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Año:</label>
                            <input inputMode='numeric' pattern='[0-9]{4}' maxLength={4} className="" value={year} onChange={e => setYear(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Biografía corta:</label>
                        <textarea name="" id="" rows={2} value={shortBio} onChange={e => setShortBio(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Biografía completa:</label>
                        <textarea name="" id="" rows={4} value={fullBio} onChange={e => setFullBio(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Enfoque:</label>
                        <textarea name="" id="" rows={2} value={focus} onChange={e => setFocus(e.target.value)}></textarea>
                    </div>
                    <FileUploadField
                        label="Avatar:"
                        helperText="Formatos permitidos: JPG, PNG o GIF"
                        accept=".jpg,.jpeg,.png,.gif"
                        onFileSelect={setImage}
                    />

                    <FileUploadField
                        label="Hoja de vida:"
                        helperText="Formatos permitidos: PDF, DOCX"
                        accept=".pdf,.doc,.docx"
                        onFileSelect={setCv}
                    />

                    <button type="submit" className="btn btn-submit" onClick={handleSubmit}>Guardar cambios</button>
                </form>
            </article>
        </section>
    )
}