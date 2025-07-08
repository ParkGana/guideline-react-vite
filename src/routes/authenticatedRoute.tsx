import { Navigate, Outlet } from 'react-router-dom';

const AuthenticatedRoute = () => {
  const isAuthenticated = true;

  // 로그인 되어있지 않은 경우 /signin 경로로 redirect
  if (!isAuthenticated) return <Navigate to="/signin" replace />;

  // 로그인 되어있는 경우 해당 경로로 이동
  return <Outlet />;
};

export default AuthenticatedRoute;
