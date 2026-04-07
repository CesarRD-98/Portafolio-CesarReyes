import axios from "axios";
import { LoginDto } from "./auth.types";
import { extractAxiosError } from "@/app/utils/extractAxiosError";

axios.defaults.withCredentials = true

export const AuthService = {
    login: async (payload: LoginDto) => {
        try {
            const response = await axios.post('/api/auth/login',
                payload,
                { withCredentials: true }
            )
            return response.data
        } catch (error: unknown) {
            throw extractAxiosError(error)
        }
    },
    logout: async () => {
        try {
            const response = await axios.post('/api/auth/logout', { withCredentials: true })
            return response.data
        } catch (error: unknown) {
            throw extractAxiosError(error)
        }
    },
    getUser: async () => {
        try {
            const response = await axios.get('/api/auth/user', { withCredentials: true })
            return response.data
        } catch (error: unknown) {
            throw extractAxiosError(error)
        }
    }
}

