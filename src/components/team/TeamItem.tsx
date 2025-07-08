import { useTeam } from '../../hooks/query/useTeam';
import type { TeamType } from '../../types/teamType';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';

type TeamItemProps = {
  data: TeamType;
};

const TeamItem = ({ data: { id, name, img_url, liked } }: TeamItemProps) => {
  const { updateTeamMutation } = useTeam();

  /* Team 수정 */
  const handleUpdateTeam = () => {
    updateTeamMutation.mutate({ id, liked: !liked });
  };

  return (
    <div key={id} className="relative flex flex-col items-center gap-2 border-4 border-gray-300 p-3">
      <div className="absolute top-2 right-2 cursor-pointer" onClick={handleUpdateTeam}>
        {liked ? <FaHeart fill="red" /> : <FaRegHeart />}
      </div>
      <img src={img_url} width={100} />
      <p className="text-body">{name}</p>
    </div>
  );
};

export default TeamItem;
