import { createClient } from "@supabase/supabase-js"
import { Database } from "./types/supabase"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_D!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY_D!

export const supabasePublic = createClient<Database>(supabaseUrl, supabaseAnonKey)