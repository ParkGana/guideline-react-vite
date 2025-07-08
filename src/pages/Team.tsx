import TeamList from '../components/team/TeamList';

const TeamPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-title text-center">TEAM</p>
      <TeamList />
    </div>
  );
};

export default TeamPage;
