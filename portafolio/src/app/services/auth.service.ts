import axios from "axios";
import { LoginModel } from "../model/login.model";

axios.defaults.withCredentials = true

export const loginApi = async (payload: LoginModel) => {
    const response = await axios.post('/api/auth/login',
        payload,
        { withCredentials: true })
    return response.data
}