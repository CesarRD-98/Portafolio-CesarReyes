import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProfileService } from '@/app/services/profile.service'

export function useUpdateProfile() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ProfileService.updateProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        }
    })
}