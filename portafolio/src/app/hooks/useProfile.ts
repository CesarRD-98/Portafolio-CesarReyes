import { useQuery } from '@tanstack/react-query'
import { ProfileService } from '@/app/services/profile.service'

export function useProfile() {
    return useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await ProfileService.getProfile()
            return res.data
        },
        staleTime: 1000 * 60 * 5, // 5 min cache
    })
}