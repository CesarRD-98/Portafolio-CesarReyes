const mimeToExt: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'application/pdf': 'pdf',
    'application/msword': 'doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx'
}

export const generateFileName = (userId: string, file: File, prefix: string) => {
    const ext = mimeToExt[file.type]

    if (!ext) {
        throw new Error('Tipo de archivo no soportado')
    }

    return `${userId}/${prefix}-${crypto.randomUUID()}.${ext}`
}