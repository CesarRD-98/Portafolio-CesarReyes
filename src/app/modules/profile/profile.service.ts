import { extractAxiosError } from "@/app/utils/extractAxiosError";
import axios from "axios";

axios.defaults.withCredentials = true

export const ProfileService = {
    getProfile: async () => {
        try {
            const response = await axios.get('/api/profile', { withCredentials: true })
            return response.data
        } catch (error: unknown) {
            throw extractAxiosError(error)
        }
    },
    updateProfile: async (formData: FormData) => {
        try {
            const response = await axios.patch('/api/profile',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    withCredentials: true
                }
            )
            return response.data
        } catch (error: unknown) {
            throw extractAxiosError(error)
        }
    }
}

