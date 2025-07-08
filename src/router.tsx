import { Navigate, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      {/* 등록되지 않은 경로로 접속할 경우 / 경로로 redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
