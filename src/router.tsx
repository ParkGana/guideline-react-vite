import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* 등록되지 않은 경로로 접속할 경우 / 경로로 redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
