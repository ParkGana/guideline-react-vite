import type { TeamType } from '../types/teamType';
import api from './api';

/* Team 목록 가져오기 */
export const fetchTeamsAPI = async (): Promise<TeamType[]> => {
  try {
    const res = await api.get('/teams');
    return res.data;
  } catch (e: any) {
    throw e.response.data;
  }
};

/* Team 수정 */
export const updateTeamAPI = async ({ id, liked }: Pick<TeamType, 'id' | 'liked'>): Promise<void> => {
  try {
    await api.patch(`/teams/${id}`, { liked });
  } catch (e: any) {
    throw e.response.data;
  }
};
