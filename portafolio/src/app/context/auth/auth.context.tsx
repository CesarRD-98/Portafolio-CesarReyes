import { createContext } from "react";
import { User } from "@supabase/supabase-js";

interface AuthCtxType {
    user: User | null
    logout: () => Promise<boolean>
}

export const AuthContext = createContext<AuthCtxType | undefined>(undefined)