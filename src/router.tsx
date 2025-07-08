import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AuthenticatedRoute from './routes/authenticatedRoute';
import NonAuthenticatedRoute from './routes/nonAuthenticatedRoute';
import SignInPage from './pages/SignIn';
import TailwindPage from './pages/Tailwind';
import TodoPage from './pages/Todo';

const Router = () => {
  return (
    <Routes>
      <Route path="/tailwind" element={<TailwindPage />} />

      <Route path="/todo" element={<TodoPage />} />

      {/* 로그인 되어있는 경우에만 접속 가능한 경로들 */}
      <Route element={<AuthenticatedRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* 로그인 되어있지 않은 경우에만 접속 가능한 경로들 */}
      <Route element={<NonAuthenticatedRoute />}>
        <Route path="/signin" element={<SignInPage />} />
      </Route>

      {/* 등록되지 않은 경로로 접속할 경우 / 경로로 redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
