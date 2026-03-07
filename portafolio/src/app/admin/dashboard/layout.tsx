import { ChildrenModel } from '@/app/model/children.model'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import DashboardShell from './shell'

export default async function DashboardLayout({ children }: ChildrenModel) {
    const cookieStore = await cookies()
    const access = cookieStore.get('sb-access-token')?.value
    if (!access) redirect('/admin')
    return <DashboardShell>{children}</DashboardShell>
}
