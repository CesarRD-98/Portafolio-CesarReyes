import { apiHandler } from "@/app/lib/api/apiHandler";
import { ApiResponder } from "@/app/lib/api/apiResponder";
import { NextRequest } from "next/server";
import { toCamelCase, toSnakeCase } from "@/app/utils/caseConverter";
import { getAuthOrFail } from "@/app/lib/api/getAuthorFail";
import { uploadFile } from "@/app/lib/storage/uploadFile";
import { mapFormDataToProfile } from "@/app/lib/mappers/profile.mapper";

export const GET = apiHandler(async () => {
    const { supabase, user } = await getAuthOrFail();

    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

    if (error) {
        return ApiResponder.serverError("Failed to fetch profile data");
    }

    return ApiResponder.ok(toCamelCase(data) ?? null);
});

export const PATCH = apiHandler(async (req: NextRequest) => {
    const { supabase, user } = await getAuthOrFail();
    const formData = await req.formData();

    const avatar = formData.get("avatar") as File | null;
    const cv = formData.get("cv") as File | null;

    let avatarUrl: string | null = null;
    let cvUrl: string | null = null;

    if (avatar) {
        avatarUrl = await uploadFile(supabase, avatar, user.id, "avatar");
    }

    if (cv) {
        cvUrl = await uploadFile(supabase, cv, user.id, "cv");
    }

    const updateData = mapFormDataToProfile(formData);

    if (avatarUrl) updateData.avatarUrl = avatarUrl;
    if (cvUrl) updateData.cvUrl = cvUrl;

    if (Object.keys(updateData).length === 0) {
        return ApiResponder.badRequest("No changes detected");
    }

    const { error } = await supabase
        .from("profiles")
        .update(toSnakeCase(updateData))
        .eq("id", user.id);

    if (error) {
        return ApiResponder.serverError("Failed to update profile");
    }

    return ApiResponder.ok({
        message: "Profile updated successfully",
    });
});