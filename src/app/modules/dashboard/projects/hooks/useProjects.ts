import { useQuery } from "@tanstack/react-query";
import { ProjectsService } from "../projects.service";

export const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: ProjectsService.getProjects,
        staleTime: 1000 * 60 * 5
    })
}