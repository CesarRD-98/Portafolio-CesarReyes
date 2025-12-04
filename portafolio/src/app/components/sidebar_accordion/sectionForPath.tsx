import { MenuSection } from "./sidebarMenu"

export type SectionId = string | null

export function getSectionForPath(sections: readonly MenuSection[], path: string): SectionId {
    if (!path) return null
    const found = sections.find(section => section.items.some(i => path.startsWith(i.href)))
    return found?.id ?? null
}