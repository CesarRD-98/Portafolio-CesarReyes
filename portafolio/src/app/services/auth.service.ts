import axios from "axios";
import { LoginModel } from "../model/login.model";
import { extractAxiosError } from "../utils/extractAxiosError";

axios.defaults.withCredentials = true

export const loginServiceAuth = async (payload: LoginModel) => {
    try {
        const response = await axios.post('/api/auth/login',
            payload,
            { withCredentials: true }
        )
        return response.data.data
    } catch (error: unknown) {
        throw extractAxiosError(error)
    }
}

export const logoutServiceAuth = async () => {
    try {
        const response = await axios.post('/api/auth/logout', {}, { withCredentials: true })
        return response.data.success
    } catch (error: unknown) {
        throw extractAxiosError(error)
    }
}