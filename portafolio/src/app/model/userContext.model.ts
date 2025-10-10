import { User } from "./user.model";

export interface UserTypeContext {
    user: User | null
    reloadUser?: () => Promise<void>
    loading: boolean
    error: string | null
}