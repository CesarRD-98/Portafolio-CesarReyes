'use client';
import { FormEvent, useEffect, useState } from 'react'
import { FileUploadField } from '@/app/components/fileUploadField/FileUploadField';
import { useToastContext } from '@/app/context/toast/toast.provider';
import { useProfile } from '@/app/hooks/profile/useProfile';
import { useUpdateProfile } from '@/app/hooks/profile/useUpdateProfile';
import './edit-page.scss';
import { ProfileDto } from '@/app/model/profile.model';

export default function EditProfilePage() {
    const { showToast } = useToastContext();
    const { data: profile } = useProfile();
    const { mutate, isPending } = useUpdateProfile();

    const [initialForm, setInitialForm] = useState<Partial<ProfileDto> | null>(null)
    const [form, setForm] = useState<ProfileDto>({
        author: '',
        year: '',
        shortBio: '',
        fullBio: '',
        learningFocus: '',
    })

    const [cv, setCv] = useState<File | null>(null);
    const [avatar, setAvatar] = useState<File | null>(null);

    const hasChanges = initialForm
        ? (
            form.author !== initialForm.author ||
            form.year !== initialForm.year ||
            form.shortBio !== initialForm.shortBio ||
            form.fullBio !== initialForm.fullBio ||
            form.learningFocus !== initialForm.learningFocus ||
            avatar !== null ||
            cv !== null
        )
        : false;

    const handleChange = (field: string, value: string) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        if (!initialForm) return;

        if (form.author !== initialForm.author) { formData.append('author', form.author ?? '') }
        if (form.year !== initialForm.year) { formData.append('year', form.year ?? '') }
        if (form.shortBio !== initialForm.shortBio) { formData.append('shortBio', form.shortBio ?? '') }
        if (form.fullBio !== initialForm.fullBio) { formData.append('fullBio', form.fullBio ?? '') }
        if (form.learningFocus !== initialForm.learningFocus) { formData.append('learningFocus', form.learningFocus ?? '') }
        if (avatar) { formData.append('avatar', avatar) }
        if (cv) { formData.append('cv', cv) }

        mutate(formData, {
            onSuccess: () => {
                showToast({
                    title: 'Perfil actualizado',
                    message: 'El perfil ha sido actualizado exitosamente.',
                    type: 'success',
                })
                setCv(null);
                setAvatar(null);
            },
            onError: (error) => {
                showToast({
                    title: 'Error al actualizar perfil',
                    message: error instanceof Error ? error.message : 'Error desconocido',
                    type: 'error',
                })
            }
        })
    }

    useEffect(() => {
        if (profile) {
            const mapped: ProfileDto = {
                author: profile.author ?? '',
                year: profile.year?.toString() ?? '',
                shortBio: profile.shortBio ?? '',
                fullBio: profile.fullBio ?? '',
                learningFocus: profile.learningFocus ?? ''
            }

            setForm(mapped)
            setInitialForm(mapped)
        }
    }, [profile])


    return (
        <section>
            <h4>Editar Perfil</h4>
            <article>
                <form className='form-container' onSubmit={handleSubmit}>
                    <div className="form-row-header">
                        <div className="form-group">
                            <label>Autor:</label>
                            <input type="text" className="" value={form.author} onChange={e => handleChange('author', e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Año:</label>
                            <input inputMode='numeric' pattern='[0-9]{4}' maxLength={4} className="" value={form.year} onChange={e => handleChange('year', e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Biografía corta:</label>
                        <textarea name="" id="" rows={2} value={form.shortBio} onChange={e => handleChange('shortBio', e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Biografía completa:</label>
                        <textarea name="" id="" rows={4} value={form.fullBio} onChange={e => handleChange('fullBio', e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Enfoque:</label>
                        <textarea name="" id="" rows={2} value={form.learningFocus} onChange={e => handleChange('learningFocus', e.target.value)}></textarea>
                    </div>
                    <FileUploadField
                        label="Avatar:"
                        helperText="Formatos permitidos: JPG, PNG o GIF"
                        accept=".jpg,.jpeg,.png,.gif"
                        onFileSelect={setAvatar}
                    />

                    <FileUploadField
                        label="Hoja de vida:"
                        helperText="Formatos permitidos: PDF, DOCX"
                        accept=".pdf,.doc,.docx"
                        onFileSelect={setCv}
                    />

                    <button type="submit" className={`btn btn-submit ${!hasChanges ? 'btn-disabled' : ''}`} disabled={isPending || !hasChanges}>
                        {isPending
                            ? <div className="spinner"></div>
                            : 'Guardar cambios'
                        }
                    </button>
                </form>
            </article>
        </section>
    )
}