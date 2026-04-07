'use server'
import { redirect } from "next/navigation"
import DashboardShell from "./shell"
import { createSupabaseServerClient } from "@/app/lib/supabaseServer"
import { ReactQueryProvider } from "@/app/providers/reactQuery.provider"
import { ChildrenProps } from "@/app/types/children.type"
import AuthProvider from "@/app/modules/auth/auth.context"

export default async function DashboardLayout({ children }: ChildrenProps) {
    const supabase = await createSupabaseServerClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect("/admin")
    }

    return (
        <AuthProvider initialUser={user}>
            <ReactQueryProvider>
                <DashboardShell>
                    {children}
                </DashboardShell>
            </ReactQueryProvider>
        </AuthProvider>
    )
}