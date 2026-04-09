import { validateFile } from "@/app/utils/file/file.validator";
import { generateFileName } from "@/app/utils/file/file.namer";
import { FILE_TYPES } from "@/app/utils/file/file.type";
import { Database } from "../types/Database";
import { SupabaseClient } from "@supabase/supabase-js";
import { AppError } from "../../errors/appError";


type UploadType = "avatar" | "cv";

const BUCKETS: Record<UploadType, string> = {
    avatar: "Avatars",
    cv: "Cvs",
};

export async function uploadFile(supabase: SupabaseClient<Database>, file: File, userId: string, type: UploadType): Promise<string> {
    const config = FILE_TYPES[type];

    validateFile(file, config.mime);

    const filename = generateFileName(userId, file, type);

    const { error } = await supabase.storage
        .from(BUCKETS[type])
        .upload(filename, file, {
            upsert: true
        });

    if (error) {
        throw new AppError('error', `Error al subir ${type}`);
    }

    const { data } = supabase.storage
        .from(BUCKETS[type])
        .getPublicUrl(filename);

    return data.publicUrl;
}