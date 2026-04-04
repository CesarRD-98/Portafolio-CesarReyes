import { ApiResponder } from "@/app/lib/api/apiResponder"
import { requireAuth } from "@/app/lib/api/requiredAuth"

export const GET = async () => {
    const { response, user } = await requireAuth()
    if (response) { return response }
    if (!user) { return ApiResponder.unauthorized("User not authenticated") }
    return ApiResponder.ok(user)
}