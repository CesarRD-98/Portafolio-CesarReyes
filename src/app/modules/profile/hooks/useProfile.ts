import { ProfileService } from "@/app/modules/profile/profile.service"
import { Profile } from "@/app/modules/profile/profile.types"
import { useQuery } from "@tanstack/react-query"


export function useProfile() {
    return useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const response = await ProfileService.getProfile()
            return response.data as Profile
        },
        staleTime: 1000 * 60 * 5, // 5 min cache
    })
}