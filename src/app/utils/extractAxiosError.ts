import axios from "axios";

export function extractAxiosError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
        const apiErrorMessage =
            error.response?.data?.error?.message ??
            error.response?.data?.message ??
            error.response?.data

        if (apiErrorMessage) {
            return new Error(typeof apiErrorMessage === 'string' ? apiErrorMessage : JSON.stringify(apiErrorMessage))
        }

        if (error.response) {
            return new Error(`Request failed with status code ${error.response.status}`)
        }

        if (error.request) {
            return new Error('No response received from server')
        }
        return new Error(error.message)
    }
    return new Error(error instanceof Error ? error.message : String(error))
}