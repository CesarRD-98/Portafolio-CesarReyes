import { Profile } from "@/app/modules/profile/profile.types";
import { AppError } from "../errors/appError";

export function mapFormDataToProfile(formData: FormData): Partial<Profile> {
    const author = formData.get("author") as string | null;
    const year = formData.get("year") as string | null;
    const shortBio = formData.get("shortBio") as string | null;
    const fullBio = formData.get("fullBio") as string | null;
    const learningFocus = formData.get("learningFocus") as string | null;

    const updateData: Partial<Profile> = {
        ...(author && { author }),
        ...(shortBio && { shortBio }),
        ...(fullBio && { fullBio }),
        ...(learningFocus && { learningFocus }),
    };

    if (year) {
        const parsedYear = parseInt(year);
        if (isNaN(parsedYear)) {
            throw new AppError("error", "Invalid year format");
        }
        updateData.year = parsedYear;
    }

    return updateData;
}