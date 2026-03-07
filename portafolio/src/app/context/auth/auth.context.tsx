import { User } from "@/app/model/user.model";
import { createContext } from "react";
import {User as UserLogged} from "@supabase/supabase-js";

interface AuthCtxType {
    userLoggedIn: UserLogged | null
    loading: boolean
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthCtxType | undefined>(undefined)