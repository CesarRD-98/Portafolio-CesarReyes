export interface Contact {
    id: number
    userId: number
    title: string
    type: string
    value: string
    linkUrl?: string
    isPrimary: boolean
}