import { TypedSupabaseClient } from "../types/supabase.type";
import { validateFile } from "@/app/utils/file/file.validator";
import { generateFileName } from "@/app/utils/file/file.namer";
import { FILE_TYPES } from "@/app/utils/file/file.type";


type UploadType = "avatar" | "cv";

const BUCKETS: Record<UploadType, string> = {
    avatar: "Avatars",
    cv: "Cvs",
};

export async function uploadFile(supabase: TypedSupabaseClient, file: File, userId: string, type: UploadType): Promise<string> {
    const config = FILE_TYPES[type];

    validateFile(file, config.mime);

    const filename = generateFileName(userId, file, type);

    const { error } = await supabase.storage
        .from(BUCKETS[type])
        .upload(filename, file);

    if (error) {
        throw new Error(`Failed to upload ${type}`);
    }

    const { data } = supabase.storage
        .from(BUCKETS[type])
        .getPublicUrl(filename);

    return data.publicUrl;
}