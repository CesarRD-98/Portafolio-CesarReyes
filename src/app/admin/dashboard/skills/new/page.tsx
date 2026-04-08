'use client';

import { useState, FormEvent } from "react";
import { FileUploadField } from "@/app/components/ui/FileUploadField";

import { Input } from "@/app/components/ui/Input";
import { Select } from "@/app/components/ui/Select";
import { Field } from "@/app/components/ui/Field";
import { cn } from "@/app/lib/tailwind_merge/cn";
import { useToastContext } from "@/app/hooks/toast/toast.context";

type FormState = {
    name: string;
    type: string;
};

export default function NewSkillPage() {
    const { showToast } = useToastContext();

    const [form, setForm] = useState<FormState>({
        name: "",
        type: "",
    });

    const [image, setImage] = useState<File | null>(null);

    const handleChange = (key: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();

        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });

        if (image) {
            formData.append("image", image);
        }

        showToast({
            title: 'En Mantenimiento',
            message: 'Estamos mejorando el servicio. Vuelve luego.',
            type: 'info'
        })
        // aquí luego irá mutation + toast
    };

    return (
        <section className="flex flex-col gap-8">

            {/* HEADER */}
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    Nueva Habilidad
                </h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Agrega una nueva habilidad a tu perfil
                </p>
            </div>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className={cn(
                    "p-6 rounded-md",
                    "border border-neutral-200 dark:border-neutral-800",
                    "bg-white/60 dark:bg-neutral-900/60",
                    "backdrop-blur-md",
                    "flex flex-col gap-6"
                )}
            >

                <Field label="Nombre">
                    <Input
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Ej: React, Node.js, Figma..."
                    />
                </Field>

                <Field label="Tipo de habilidad">
                    <Select
                        value={form.type}
                        onChange={(e) => handleChange("type", e.target.value)}
                    >
                        <option value="">Selecciona un tipo</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="design">Diseño</option>
                        <option value="tool">Herramienta</option>
                        <option value="other">Otro</option>
                    </Select>
                </Field>

                <FileUploadField
                    label="Icono de la habilidad"
                    helperText="JPG, PNG o SVG"
                    accept=".jpg,.jpeg,.png,.svg"
                    onFileSelect={setImage}
                />

                {/* ACTION */}
                <div className="flex justify-end pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <button
                        type="submit"
                        className={cn(
                            "px-5 py-2.5 rounded-md text-sm font-medium",
                            "bg-blue-600 text-white hover:bg-blue-500",
                            "transition-all shadow-sm hover:shadow-md cursor-pointer"
                        )}
                    >
                        Guardar habilidad
                    </button>
                </div>

            </form>
        </section>
    );
}