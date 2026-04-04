import { CheckCircle, Upload } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";
import styles from './fileUploadField.module.scss';

interface FileUploadFileProps {
    label: string;
    helperText?: string;
    accept?: string;
    onFileSelect?: (file: File | null) => void;
}

export const FileUploadField = (
    { label = "", helperText = "Formatos permitidos: Documentos, Imágenes", accept = "*", onFileSelect }: FileUploadFileProps
) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const handleClick = () => {
        inputRef.current?.click();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] ?? null;
        setFile(selectedFile);
        if (onFileSelect) {
            onFileSelect(selectedFile);
        }
    }

    return (
        <div className={styles.file_upload}>
            <label className={styles.label}>{label}</label>

            <div className={styles.container}>
                <button
                    type="button"
                    className={styles.button}
                    onClick={handleClick}
                >
                    <Upload size={24} className={styles.icon} />
                </button>

                {file && (
                    <CheckCircle size={24} className={styles.success} />
                )}

                <div className={styles.info}>
                    <span className={styles.text}>
                        {file ? file.name : "Selecciona un archivo"}
                    </span>
                    <span className={styles.helper}>{helperText}</span>
                </div>

                <input
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    onChange={handleChange}
                    className={styles.input} />
            </div>
        </div>
    );
}