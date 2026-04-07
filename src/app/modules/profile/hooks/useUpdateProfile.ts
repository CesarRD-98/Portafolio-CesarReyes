import { ProfileService } from '@/app/modules/profile/profile.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'


export function useUpdateProfile() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ProfileService.updateProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        }
    })
}