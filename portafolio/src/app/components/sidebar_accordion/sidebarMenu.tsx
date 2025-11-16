export type MenuItem = { label: string; href: string }
export type MenuSection = { id: string; label: string; items: MenuItem[] }

export const menu: readonly MenuSection[] = [
    {
        id: 'profile',
        label: 'Perfil',
        items: [
            { label: 'Ver perfil', href: '/admin/dashboard/profile' },
            { label: 'Editar perfil', href: '/admin/dashboard/profile/edit' },
        ]
    },
    {
        id: 'projects',
        label: 'Proyectos',
        items: [
            { label: 'Ver proyectos', href: '/admin/dashboard/projects' },
            { label: 'Editar o eliminar', href: '/admin/dashboard/projects/edit' },
            { label: 'Nuevo', href: '/admin/dashboard/projects/new' },
        ]
    },
    {
        id: 'contacts',
        label: 'Contactos',
        items: [
            { label: 'Ver contactos', href: '/admin/dashboard/contacts' },
            { label: 'Editar o eliminar', href: '/admin/dashboard/contacts/edit' },
            { label: 'Nuevo', href: '/admin/dashboard/contacts/new' },
        ]
    },
    {
        id: 'skills',
        label: 'Habilidades',
        items: [
            { label: 'Ver habilidades', href: '/admin/dashboard/skills' },
            { label: 'Editar o eliminar', href: '/admin/dashboard/skills/edit' },
            { label: 'Nuevo', href: '/admin/dashboard/skills/new' },
        ]
    }
] as const