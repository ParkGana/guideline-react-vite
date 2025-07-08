import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { TeamType } from '../../types/teamType';
import { fetchTeamsAPI, updateTeamAPI } from '../../api/Team';

export const useTeam = () => {
  const queryClient = useQueryClient();

  /* Team 목록 가져오기 */
  const fetchTeamsQuery = useQuery({
    queryKey: ['teams'],
    queryFn: fetchTeamsAPI
  });

  /* Team 수정 (낙관적 업데이트) */
  const updateTeamMutation = useMutation({
    mutationFn: updateTeamAPI,
    onMutate: async ({ id, liked }) => {
      await queryClient.cancelQueries({ queryKey: ['teams'] });

      const prevTeams = queryClient.getQueryData(['teams']);

      queryClient.setQueryData<TeamType[]>(['teams'], (prev = []) =>
        prev.map((team) => (team.id === id ? { ...team, liked } : team))
      );

      return { prevTeams };
    },
    onError: (_err, _variables, context) => {
      context && queryClient.setQueryData(['teams'], context.prevTeams);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['teams'] });
    }
  });

  return { fetchTeamsQuery, updateTeamMutation };
};
