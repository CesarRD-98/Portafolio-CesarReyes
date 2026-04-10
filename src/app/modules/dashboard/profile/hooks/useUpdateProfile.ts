import { ProfileService } from '@/app/modules/dashboard/profile/profile.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'


export const useUpdateProfile = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ProfileService.updateProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        }
    })
}