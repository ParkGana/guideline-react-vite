import { useAuth } from '@/providers/authProvider';
import { Navigate, Outlet } from 'react-router-dom';

const NonAuthenticatedRoute = () => {
  const { isAuthenticated } = useAuth();

  // 로그인 되어있는 경우 / 경로로 redirect
  if (isAuthenticated) return <Navigate to="/" replace />;

  // 로그인 되어있지 않은 경우 해당 경로로 이동
  return <Outlet />;
};

export default NonAuthenticatedRoute;
