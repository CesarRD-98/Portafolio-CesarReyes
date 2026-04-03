import axios from "axios";
import { extractAxiosError } from "../utils/extractAxiosError";

axios.defaults.withCredentials = true

export const ProfileService = {
    getProfile: async () => {
        try {
            const response = await axios.get('/api/profile', { withCredentials: true })
            return response.data
        } catch (error: unknown) {
            throw extractAxiosError(error)
        }
    }
}

