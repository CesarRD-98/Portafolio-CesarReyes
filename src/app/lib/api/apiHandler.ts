import { NextRequest } from "next/server"
import { ApiResponder } from "./apiResponder"

type HandlerContext = { params: Promise<Record<string, string>> }
type Handler = (req: NextRequest, context?: HandlerContext) => Promise<Response>

export const apiHandler = (handler: Handler) => {
    return async (req: NextRequest, context?: HandlerContext): Promise<Response> => {
        try {
            return await handler(req, context)
        } catch (error: unknown) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Unexpected server error"

            return ApiResponder.serverError(message)
        }
    }
}