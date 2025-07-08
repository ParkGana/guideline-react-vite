import { useTeam } from '../../hooks/query/useTeam';
import TeamItem from './TeamItem';

const TeamList = () => {
  const {
    fetchTeamsQuery: { data: teams, isPending, isError }
  } = useTeam();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {teams.map((team) => (
        <TeamItem key={team.id} data={team} />
      ))}
    </div>
  );
};

export default TeamList;
