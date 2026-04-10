import { ProfileService } from "@/app/modules/dashboard/profile/profile.service"
import { useQuery } from "@tanstack/react-query"

export const useProfile = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: ProfileService.getProfile,
        staleTime: 1000 * 60 * 5
    })
}