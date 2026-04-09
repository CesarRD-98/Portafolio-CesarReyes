'use server'
import { redirect } from "next/navigation"
import DashboardShell from "./shell"
import { ChildrenProps } from "@/app/types/children.type"
import { getSupabaseServerClient } from "@/app/lib/supabase/server"

export default async function DashboardLayout({ children }: ChildrenProps) {
    const supabase = await getSupabaseServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) { redirect("/admin") }

    return (
        <DashboardShell>
            {children}
        </DashboardShell>
    )
}