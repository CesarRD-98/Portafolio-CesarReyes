import { useQuery } from '@tanstack/react-query'
import { ProfileService } from '@/app/services/profile.service'
import { Profile } from '@/app/model/profile.model'

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