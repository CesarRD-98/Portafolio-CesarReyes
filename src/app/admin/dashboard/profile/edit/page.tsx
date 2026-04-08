'use client'

import { FormEvent, useEffect, useState } from "react"
import { FileUploadField } from "@/app/components/ui/FileUploadField"
import { useToastContext } from "@/app/hooks/toast/toast.context"
import { useProfile } from "@/app/modules/profile/hooks/useProfile"
import { useUpdateProfile } from "@/app/modules/profile/hooks/useUpdateProfile"
import { ProfileDto } from "@/app/modules/profile/profile.types"
import { cn } from "@/app/lib/tailwind_merge/cn"
import { Field } from "@/app/components/ui/Field"
import { Textarea } from "@/app/components/ui/Textarea"
import { Input } from "@/app/components/ui/Input"

export default function EditProfilePage() {
    const { showToast } = useToastContext()
    const { data: profile } = useProfile()
    const { mutate, isPending } = useUpdateProfile()

    const [initialForm, setInitialForm] = useState<Partial<ProfileDto> | null>(null)

    const [form, setForm] = useState<ProfileDto>({
        author: '',
        year: '',
        shortBio: '',
        fullBio: '',
        learningFocus: '',
    })

    const [cv, setCv] = useState<File | null>(null)
    const [avatar, setAvatar] = useState<File | null>(null)

    const handleChange = <K extends keyof ProfileDto>(
        field: K,
        value: ProfileDto[K]
    ) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const hasChanges = initialForm
        ? Object.keys(form).some((key) => {
            const k = key as keyof ProfileDto
            return (form[k] ?? '') !== (initialForm[k] ?? '')
        }) || avatar !== null || cv !== null
        : false

    const buildFormData = () => {
        if (!initialForm) return null

        const formData = new FormData();

        (Object.keys(form) as (keyof ProfileDto)[]).forEach((key) => {
            const current = form[key] ?? ''
            const initial = initialForm[key] ?? ''

            if (current !== initial) {
                formData.append(key, String(current))
            }
        })

        if (avatar) formData.append('avatar', avatar)
        if (cv) formData.append('cv', cv)

        return formData
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const formData = buildFormData()
        if (!formData) return

        mutate(formData, {
            onSuccess: () => {
                showToast({
                    title: 'Perfil actualizado',
                    message: 'El perfil ha sido actualizado exitosamente.',
                    type: 'success'
                })
                setCv(null)
                setAvatar(null)
            },
            onError: (error) => {
                showToast({
                    title: 'Error al actualizar perfil',
                    message: error instanceof Error ? error.message : 'Error desconocido',
                    type: 'error'
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
        <section className="flex flex-col gap-8">

            {/* HEADER */}
            <div className="max-w-2xl space-y-1">
                <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                    Editar Perfil
                </h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Actualiza la información pública de tu portafolio
                </p>
            </div>

            {/* FORM CARD */}
            <form
                onSubmit={handleSubmit}
                className={cn(
                    "p-6 rounded-md",
                    "border border-neutral-200 dark:border-neutral-800",
                    "bg-white/60 dark:bg-neutral-900/60",
                    "backdrop-blur-md",
                    "flex flex-col gap-8"
                )}
            >

                {/* GRID */}
                <div className="grid gap-6 md:grid-cols-2">

                    <Field label="Autor">
                        <Input
                            value={form.author}
                            onChange={(e) => handleChange("author", e.target.value)}
                            placeholder="Tu nombre o alias"
                        />
                    </Field>

                    <Field label="Año">
                        <Input
                            inputMode="numeric"
                            pattern="[0-9]{4}"
                            maxLength={4}
                            value={form.year}
                            onChange={(e) => handleChange("year", e.target.value)}
                            placeholder="2026"
                        />
                    </Field>

                </div>

                {/* TEXTAREAS */}
                <div className="flex flex-col gap-6">

                    <Field label="Biografía corta">
                        <Textarea
                            rows={2}
                            value={form.shortBio}
                            onChange={(e) => handleChange("shortBio", e.target.value)}
                            placeholder="Resumen breve sobre ti"
                        />
                    </Field>

                    <Field label="Biografía completa">
                        <Textarea
                            rows={4}
                            value={form.fullBio}
                            onChange={(e) => handleChange("fullBio", e.target.value)}
                            placeholder="Describe tu experiencia, stack y trayectoria"
                        />
                    </Field>

                    <Field label="Enfoque">
                        <Textarea
                            rows={2}
                            value={form.learningFocus}
                            onChange={(e) => handleChange("learningFocus", e.target.value)}
                            placeholder="¿Qué estás aprendiendo actualmente?"
                        />
                    </Field>

                </div>

                {/* FILES */}
                <div className="grid gap-6 md:grid-cols-2">
                    <FileUploadField
                        label="Avatar"
                        helperText="JPG, PNG o GIF"
                        accept=".jpg,.jpeg,.png,.gif"
                        onFileSelect={setAvatar}
                    />

                    <FileUploadField
                        label="CV"
                        helperText="PDF o DOCX"
                        accept=".pdf,.doc,.docx"
                        onFileSelect={setCv}
                    />
                </div>

                {/* ACTIONS */}
                <div className="flex justify-end pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <button
                        type="submit"
                        disabled={!hasChanges || isPending}
                        className={cn(
                            "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium",
                            "transition-all duration-200",
                            hasChanges
                                ? "bg-blue-600 text-white hover:bg-blue-500 shadow-sm hover:shadow-md cursor-pointer"
                                : "bg-neutral-200 dark:bg-neutral-700 text-neutral-400 cursor-not-allowed"
                        )}
                    >
                        {isPending ? (
                            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            "Guardar cambios"
                        )}
                    </button>
                </div>

            </form>

        </section>
    )
}