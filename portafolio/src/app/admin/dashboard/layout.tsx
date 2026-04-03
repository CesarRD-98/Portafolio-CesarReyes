import { redirect } from "next/navigation"
import DashboardShell from "./shell"
import { createSupabaseServerClient } from "@/app/lib/supabaseServer"
import { ChildrenModel } from "@/app/model/children.model"
import AuthProvider from "@/app/context/auth/auth.provider"

export default async function DashboardLayout({ children }: ChildrenModel) {
    const supabase = await createSupabaseServerClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect("/admin")
    }

    return (
        <AuthProvider initialUser={user}>
            <DashboardShell>
                {children}
            </DashboardShell>
        </AuthProvider>
    )
}