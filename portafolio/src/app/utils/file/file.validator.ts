export const validateFile = (file: File, allowedMime: readonly string[]) => {
    if (!allowedMime.includes(file.type)) {
        throw new Error('Formato de archivo no permitido')
    }
}