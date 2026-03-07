import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_D!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY_D!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)