import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../auth.service';
import { LoginDto } from '../auth.types';

export function useLogin() {
    return useMutation({
        mutationFn: (data: LoginDto) => AuthService.login(data),
    });
}