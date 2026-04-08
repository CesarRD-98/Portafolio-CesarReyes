'use client';

import { useState, FormEvent } from "react";
import { useToastContext } from "@/app/hooks/toast/toast.context";

import { Input } from "@/app/components/ui/Input";
import { Select } from "@/app/components/ui/Select";
import { Field } from "@/app/components/ui/Field";
import { cn } from "@/app/lib/tailwind_merge/cn";


type FormState = {
    title: string;
    value: string;
    type: string;
    link: string;
};

export default function NewContactPage() {
    const { showToast } = useToastContext();

    const [form, setForm] = useState<FormState>({
        title: "",
        value: "",
        type: "",
        link: "",
    });

    const handleChange = (key: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        showToast({
            title: 'En Mantenimiento',
            message: 'Estamos mejorando el servicio. Vuelve luego.',
            type: 'info'
        })
    };

    return (
        <section className="flex flex-col gap-8">

            {/* HEADER */}
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    Nuevo contacto
                </h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Agrega un nuevo medio de contacto a tu perfil
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

                <Field label="Título">
                    <Input
                        value={form.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                        placeholder="Ej: Email personal, WhatsApp..."
                    />
                </Field>

                <Field label="Valor">
                    <Input
                        value={form.value}
                        onChange={(e) => handleChange("value", e.target.value)}
                        placeholder="correo@ejemplo.com o +504..."
                    />
                </Field>

                <Field label="Tipo de contacto">
                    <Select
                        value={form.type}
                        onChange={(e) => handleChange("type", e.target.value)}
                    >
                        <option value="">Selecciona un tipo</option>
                        <option value="email">Email</option>
                        <option value="phone">Teléfono</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="github">GitHub</option>
                    </Select>
                </Field>

                <Field label="Enlace">
                    <Input
                        type="url"
                        value={form.link}
                        onChange={(e) => handleChange("link", e.target.value)}
                        placeholder="https://..."
                    />
                </Field>

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
                        Guardar contacto
                    </button>
                </div>

            </form>
        </section>
    );
}