import { redirect } from "next/navigation"
import DashboardShell from "./shell"
import { ChildrenProps } from "@/app/types/children.type"
import { getSupabaseServerClient } from "@/app/lib/supabase/server"

export default async function DashboardLayout({ children }: ChildrenProps) {
    const supabase = await getSupabaseServerClient()
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) { redirect("/admin") }
    return (
        <DashboardShell>
            {children}
        </DashboardShell>
    )
}