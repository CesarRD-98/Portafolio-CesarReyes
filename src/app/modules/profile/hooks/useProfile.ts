import { ProfileService } from "@/app/modules/profile/profile.service"
import { useQuery } from "@tanstack/react-query"

export function useProfile() {
    return useQuery({
        queryKey: ['profile'],
        queryFn: ProfileService.getProfile,
        staleTime: 1000 * 60 * 5
    })
}