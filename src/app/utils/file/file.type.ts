export const FILE_TYPES = {
    avatar: {
        mime: ['image/jpeg', 'image/png', 'image/gif'],
        extensions: ['jpg', 'jpeg', 'png', 'gif']
    },
    cv: {
        mime: [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ],
        extensions: ['pdf', 'doc', 'docx']
    }
} as const