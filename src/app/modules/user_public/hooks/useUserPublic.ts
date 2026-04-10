import { useQuery } from '@tanstack/react-query';
import { UserPublicService } from '../userPublic.service';

export const useUserPublic = () => {
    return useQuery({
        queryKey: ['user-public'],
        queryFn: UserPublicService.getUserPublic,
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}